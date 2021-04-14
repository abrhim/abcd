import { useEffect } from 'react';
import useCollector from '../collectors/useCollector';
import mse from '@adobe/magento-storefront-events-sdk';
import { ACTIVITY_SUMMARY_SCHEMA_URL, PRODUCT_SCHEMA_URL } from '../constants';
import clearActivitySummaryFromDataLayerArray from '../util/clearActivitySummaryFromDataLayerArray';
import { createItemContext, createUnitContext } from '../contexts';
import { getCartIdHash } from './useGlobalSnowplowContexts';

export const prepareProductContext = () => {
  const product = mse.context.getProduct();

  if (!product || !product.id) {
    return [];
  }

  return [
    {
      schema: PRODUCT_SCHEMA_URL,
      data: {
        productId: product.id,
        sku: product.sku,
        name: product.name,
        categories: product.categories.map(category => String(category.id)),
        topLevelSku: product.parentSku,
      },
    },
  ];
};

const useCreateDataLayerEventHandlers = () => {
  const snowplowCollector = useCollector();

  useEffect(() => {
    const handleAddToCart = () => {
      const productContext = prepareProductContext();
      snowplowCollector(
        'trackStructEvent',
        'product',
        'add-to-cart',
        null,
        null,
        null,
        productContext,
      );
    };
    const handleProductPageView = () => {
      snowplowCollector(
        'trackStructEvent',
        'product',
        'view',
        null,
        null,
        null,
        prepareProductContext(),
      );
    };
    const handlePageActivitySummary = () => {
      const data = mse.context.getPageOffset();
      snowplowCollector('trackSelfDescribingEvent', {
        schema: ACTIVITY_SUMMARY_SCHEMA_URL,
        data,
      });
      clearActivitySummaryFromDataLayerArray();
    };
    const handleCustomUrl = () => {
      const customUrl = mse.context.getCustomUrl();
      if (customUrl) {
        snowplowCollector('setCustomUrl', customUrl);
      }
    };

    const handleReferrerUrl = () => {
      const referrerUrl = mse.context.getReferrerUrl();
      snowplowCollector('setReferrerUrl', referrerUrl);
    };

    const handlePageViewEvent = () => {
      snowplowCollector('trackPageView');
    };

    const handlePlaceOrderEvent = event => {
      snowplowCollector(
        'trackStructEvent',
        'checkout',
        'place-order',
        event.eventInfo.orderContext.orderId,
        null,
        getCartIdHash(event.eventInfo.shoppingCartContext.id),
      );
    };

    const handleRecsApiRequestSent = event => {
      snowplowCollector(
        'trackStructEvent',
        'recommendation-unit',
        'api-request-sent',
        null,
        event.eventInfo.pageType,
        null,
        null,
      );
    };

    const handleRecsApiResponseReceived = event => {
      const { recUnits } = event.eventInfo;
      const contexts = [];

      if (recUnits) {
        recUnits.forEach(unit => {
          const unitContext = createUnitContext(unit);
          contexts.push(unitContext);
          unit.products.slice(0, unit.displayNumber).forEach(product => {
            const itemContext = createItemContext(unit.unitId, product);
            contexts.push(itemContext);
          });
        });
      }

      snowplowCollector(
        'trackStructEvent',
        'recommendation-unit',
        'api-response-received',
        null,
        event.eventInfo.pageType,
        null,
        contexts,
      );
    };

    const handleRecsItemClick = event => {
      const {
        recItem,
        recItem: { unit },
      } = event.eventInfo;

      const unitContext = createUnitContext(unit);
      const itemContext = createItemContext(unit.unitId, recItem);
      const contexts = [unitContext, itemContext];

      snowplowCollector(
        'trackStructEvent',
        'recommendation-unit',
        'rec-click',
        null,
        unit.pageType,
        itemContext.data.displayRank,
        contexts,
      );
    };

    const handleRecsUnitView = event => {
      const unitContext = createUnitContext(event.eventInfo.recUnit);
      const contexts = [unitContext];
      snowplowCollector(
        'trackStructEvent',
        'recommendation-unit',
        'view',
        null,
        event.eventInfo.recUnit.pageType,
        null,
        contexts,
      );
    };

    const handleRecsUnitRender = event => {
      const { recUnit } = event.eventInfo;
      const contexts = [];

      const unitContext = createUnitContext(recUnit);
      contexts.push(unitContext);

      recUnit.products.forEach(product => {
        const itemContext = createItemContext(recUnit.unitId, product);
        contexts.push(itemContext);
      });

      snowplowCollector(
        'trackStructEvent',
        'recommendation-unit',
        'impression-render',
        null,
        recUnit.pageType,
        null,
        contexts,
      );
    };

    mse.subscribe.addToCart(handleAddToCart);
    mse.subscribe.productPageView(handleProductPageView);
    mse.subscribe.dataLayerChange(handlePageActivitySummary, {
      path: 'pageOffsetContext',
    });
    mse.subscribe.customUrl(handleCustomUrl);
    mse.subscribe.referrerUrl(handleReferrerUrl);
    mse.subscribe.pageView(handlePageViewEvent);
    mse.subscribe.placeOrder(handlePlaceOrderEvent);
    mse.subscribe.recsItemClick(handleRecsItemClick);
    mse.subscribe.recsResponseReceived(handleRecsApiResponseReceived);
    mse.subscribe.recsRequestSent(handleRecsApiRequestSent);
    mse.subscribe.recsUnitView(handleRecsUnitView);
    mse.subscribe.recsUnitRender(handleRecsUnitRender);
    return () => {
      mse.unsubscribe.addToCart(handleAddToCart);
      mse.unsubscribe.productPageView(handleProductPageView);
      mse.unsubscribe.dataLayerChange(handlePageActivitySummary);
      mse.unsubscribe.customUrl(handleCustomUrl);
      mse.unsubscribe.referrerUrl(handleReferrerUrl);
      mse.unsubscribe.pageView(handlePageViewEvent);
      mse.unsubscribe.placeOrder(handlePlaceOrderEvent);
      mse.unsubscribe.recsRequestSent(handleRecsApiRequestSent);
      mse.unsubscribe.recsResponseReceived(handleRecsApiResponseReceived);
      mse.unsubscribe.recsItemClick(handleRecsItemClick);
      mse.unsubscribe.recsUnitView(handleRecsUnitView);
      mse.unsubscribe.recsUnitRender(handleRecsUnitRender);
    };
  }, [snowplowCollector]);
};

export default useCreateDataLayerEventHandlers;
