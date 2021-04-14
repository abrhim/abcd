jest.mock('../../lib/collector/util/createCollector');
jest.mock('../../lib/collector/collectors/useCollector');
import { renderHook } from '@testing-library/react-hooks';
import useCreateDataLayerEventHandlers, {
  prepareProductContext,
} from '../../lib/collector/hooks/useCreateDataLayerEventHandlers';
import mse from '@adobe/magento-storefront-events-sdk';
import useCollector from '../../lib/collector/collectors/useCollector';
import { generateProductContext } from '../mocks';

jest.mock('../../package.json', () => ({
  version: '1.2.3',
}));

let collectorSpy = jest.fn();
useCollector.mockReturnValue(collectorSpy);

test('subscribes to and unsubscribes from events', () => {
  const addToCart = jest.spyOn(mse.subscribe, 'addToCart');
  const productPageView = jest.spyOn(mse.subscribe, 'productPageView');
  const pageActivitySummary = jest.spyOn(mse.subscribe, 'dataLayerChange');
  const customUrl = jest.spyOn(mse.subscribe, 'customUrl');
  const referrerUrl = jest.spyOn(mse.subscribe, 'referrerUrl');
  const pageView = jest.spyOn(mse.subscribe, 'pageView');
  const unsubscribeAddToCart = jest.spyOn(mse.unsubscribe, 'addToCart');
  const unsubscribeProductPageView = jest.spyOn(
    mse.unsubscribe,
    'productPageView',
  );
  const unsubscribePageActivitySummary = jest.spyOn(
    mse.unsubscribe,
    'dataLayerChange',
  );
  const unsubscribeCustomUrl = jest.spyOn(mse.unsubscribe, 'customUrl');
  const unsubscribeReferrerUrl = jest.spyOn(mse.unsubscribe, 'referrerUrl');
  const unsubscribePageView = jest.spyOn(mse.unsubscribe, 'pageView');
  const { rerender } = renderHook(() => useCreateDataLayerEventHandlers());

  // subscribers created on initial render
  expect(addToCart).toHaveBeenCalledTimes(1);
  expect(productPageView).toHaveBeenCalledTimes(1);
  expect(pageActivitySummary).toHaveBeenCalledTimes(1);
  expect(customUrl).toHaveBeenCalledTimes(1);
  expect(referrerUrl).toHaveBeenCalledTimes(1);
  expect(pageView).toHaveBeenCalledTimes(1);

  // change collector and rerender
  const newCollector = jest.fn();
  useCollector.mockReturnValueOnce(newCollector);
  rerender();

  // subscriptions cleaned up when collector changes
  expect(unsubscribeAddToCart).toHaveBeenCalledTimes(1);
  expect(unsubscribeCustomUrl).toHaveBeenCalledTimes(1);
  expect(unsubscribePageActivitySummary).toHaveBeenCalledTimes(1);
  expect(unsubscribePageView).toHaveBeenCalledTimes(1);
  expect(unsubscribeProductPageView).toHaveBeenCalledTimes(1);
  expect(unsubscribeReferrerUrl).toHaveBeenCalledTimes(1);

  // subscriptions recreated on second render
  expect(addToCart).toHaveBeenCalledTimes(2);
  expect(productPageView).toHaveBeenCalledTimes(2);
  expect(pageActivitySummary).toHaveBeenCalledTimes(2);
  expect(customUrl).toHaveBeenCalledTimes(2);
  expect(referrerUrl).toHaveBeenCalledTimes(2);
  expect(pageView).toHaveBeenCalledTimes(2);
});

test('add to cart event handled correctly', () => {
  renderHook(() => useCreateDataLayerEventHandlers());
  mse.publish.addToCart();
  expect(collectorSpy).toHaveBeenLastCalledWith(
    'trackStructEvent',
    'product',
    'add-to-cart',
    null,
    null,
    null,
    [],
  );
});

test('product page view event handled correctly', () => {
  renderHook(() => useCreateDataLayerEventHandlers());
  mse.publish.productPageView();
  expect(collectorSpy).toHaveBeenLastCalledWith(
    'trackStructEvent',
    'product',
    'view',
    null,
    null,
    null,
    [],
  );
});

test('page activity summary event handled correctly', () => {
  renderHook(() => useCreateDataLayerEventHandlers());
  mse.context.setPageOffset(undefined);
  expect(collectorSpy).toHaveBeenLastCalledWith('trackSelfDescribingEvent', {
    data: undefined,
    schema: 'iglu:com.adobe.magento.event/activity-summary/jsonschema/1-0-0',
  });
});

test('custom url event handled correctly', () => {
  renderHook(() => useCreateDataLayerEventHandlers());
  mse.publish.customUrl();
  expect(collectorSpy).toHaveBeenLastCalledWith('trackSelfDescribingEvent', {
    data: undefined,
    schema: 'iglu:com.adobe.magento.event/activity-summary/jsonschema/1-0-0',
  });
});

test('referrer url event handled correctly', () => {
  renderHook(() => useCreateDataLayerEventHandlers());
  mse.publish.referrerUrl();
  expect(collectorSpy).toHaveBeenLastCalledWith('setReferrerUrl', undefined);
});

test('page view event handled correctly', () => {
  renderHook(() => useCreateDataLayerEventHandlers());
  mse.publish.pageView();
  expect(collectorSpy).toHaveBeenLastCalledWith('trackPageView');
});

test('prepareProductContext correctly formats context data', () => {
  const productContext = generateProductContext();

  const result = [
    {
      data: {
        categories: productContext.categories.map(cat => String(cat.id)),
        name: productContext.name,
        productId: productContext.id,
        sku: productContext.sku,
        topLevelSku: productContext.parentSku,
      },
      schema: 'iglu:com.adobe.magento.entity/product/jsonschema/2-0-3',
    },
  ];

  mse.context.setProduct(productContext);

  const preparedContexts = prepareProductContext();

  expect(preparedContexts).toEqual(result);
});
