import { useEffect, useState } from 'react';
import mse from '@adobe/magento-storefront-events-sdk';
import processGraphQLResponse from '../util/processGraphQLResponse';
import { appendOptionsToPayload } from '@magento/peregrine/lib/util/appendOptionsToPayload';
import { isProductConfigurable } from '@magento/peregrine/lib/util/isProductConfigurable';

const wrapUseProductFullDetail = origUseProductFullDetail => {
  return function (props) {
    const [product] = useState(processGraphQLResponse(props.product));

    useEffect(() => {
      mse.context.setProduct(product);
      mse.publish.productPageView();
      return () => {
        mse.context.setProduct({});
      };
    }, [product]);

    const api = origUseProductFullDetail(props);

    return {
      ...api,
      handleAddToCart: arg => {
        const formattedProduct = appendOptionsToPayload(
          {
            item: {
              ...product,
              configurable_options: product.configurableOptions,
            },
          },
          deriveOptionSelectionsFromProduct(product),
        );
        product.parentSku = product.sku;
        product.sku = formattedProduct.item.sku;
        mse.context.setProduct(product);
        api.handleAddToCart(arg);
      },
    };
  };
};

export default wrapUseProductFullDetail;

const deriveOptionSelectionsFromProduct = product => {
  if (!isProductConfigurable(product)) {
    return new Map();
  }

  const initialOptionSelections = new Map();
  for (const { attribute_id } of product.configurable_options) {
    initialOptionSelections.set(attribute_id, undefined);
  }

  return initialOptionSelections;
};
