import { useEffect, useRef } from 'react';
import {
  STOREFRONT_INSTANCE_SCHEMA_URL,
  MAGENTO_EXTENSION_SCHEMA_URL,
  SHOPPER_SCHEMA_URL,
  SHOPPING_CART_SCHEMA_URL,
} from '../constants';
import { getJSTrackerContext } from '../util/getJsTrackerContext';
import mse from '@adobe/magento-storefront-events-sdk';

const getStorefrontInstanceContext = () => ({
  schema: STOREFRONT_INSTANCE_SCHEMA_URL,
  data: mse.context.getStorefrontInstance(),
});

const getMagentoExtensionContext = () => ({
  schema: MAGENTO_EXTENSION_SCHEMA_URL,
  data: mse.context.getMagentoExtension(),
});

const getShopperContext = () => ({
  schema: SHOPPER_SCHEMA_URL,
  data: mse.context.getShopper(),
});

export const getCartIdHash = cartId => {
  if (cartId) {
    let hash = 0;
    let i, char;
    for (i = 0; i < cartId.length; i++) {
      char = cartId.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0;
    }
    return Math.abs(hash);
  }
  return cartId;
};

const getShoppingCartContext = () => {
  const shoppingCart = mse.context.getShoppingCart();
  let shoppingCartContext = {};

  if (shoppingCart && shoppingCart.totalQuantity > 0) {
    shoppingCartContext = {
      cartId: getCartIdHash(shoppingCart.id),
      subtotalExcludingTax: shoppingCart.prices.subtotalExcludingTax.value,
      subtotalIncludingTax: shoppingCart.prices.subtotalIncludingTax.value,
      itemsCount: shoppingCart.totalQuantity,
      items: shoppingCart.items.map(item => {
        return {
          cartItemId: Number(item.id),
          productName: item.product.name,
          qty: item.quantity,
          productSku: item.product.sku,
          offerPrice: item.prices.price.value,
          mainImageUrl: item.product.image.url,
        };
      }),
    };
  }
  return {
    schema: SHOPPING_CART_SCHEMA_URL,
    data: shoppingCartContext,
  };
};

const useGlobalContexts = () => {
  const storefrontContext = useRef(getStorefrontInstanceContext());
  const magentoExtensionContext = useRef(getMagentoExtensionContext());
  const shopperContext = useRef(getShopperContext());
  const shoppingCartContext = useRef(getShoppingCartContext());

  useEffect(() => {
    window.magento_store_events('addGlobalContexts', [getJSTrackerContext()]);
  }, []);

  useEffect(() => {
    const handleStorefrontUpdate = () => {
      window.magento_store_events('removeGlobalContexts', [
        storefrontContext.current,
      ]);
      storefrontContext.current = getStorefrontInstanceContext();
      window.magento_store_events('addGlobalContexts', [
        storefrontContext.current,
      ]);
    };
    mse.subscribe.dataLayerChange(handleStorefrontUpdate, {
      path: 'storefrontInstanceContext',
    });
    return () => {
      mse.unsubscribe.dataLayerChange(handleStorefrontUpdate);
    };
  }, []);

  useEffect(() => {
    const handleExtensionUpdate = () => {
      window.magento_store_events('removeGlobalContexts', [
        magentoExtensionContext.current,
      ]);
      magentoExtensionContext.current = getMagentoExtensionContext();
      window.magento_store_events('addGlobalContexts', [
        magentoExtensionContext.current,
      ]);
    };
    mse.subscribe.dataLayerChange(handleExtensionUpdate, {
      path: 'magentoExtensionContext',
    });
    return () => {
      mse.unsubscribe.dataLayerChange(handleExtensionUpdate);
    };
  }, []);

  useEffect(() => {
    const handleShopperUpdate = () => {
      window.magento_store_events('removeGlobalContexts', [
        shopperContext.current,
      ]);
      shopperContext.current = getShopperContext();
      window.magento_store_events('addGlobalContexts', [
        shopperContext.current,
      ]);
    };
    mse.subscribe.dataLayerChange(handleShopperUpdate, {
      path: 'shopperContext',
    });
    return () => {
      mse.unsubscribe.dataLayerChange(handleShopperUpdate);
    };
  }, []);

  useEffect(() => {
    const handleShoppingCartUpdate = () => {
      window.magento_store_events('removeGlobalContexts', [
        shoppingCartContext.current,
      ]);
      shoppingCartContext.current = getShoppingCartContext();
      if (shoppingCartContext.current.data.itemsCount > 0) {
        window.magento_store_events('addGlobalContexts', [
          shoppingCartContext.current,
        ]);
      }
    };
    mse.subscribe.dataLayerChange(handleShoppingCartUpdate, {
      path: 'shoppingCartContext',
    });
    return () => {
      mse.unsubscribe.dataLayerChange(handleShoppingCartUpdate);
    };
  }, []);
};

export default useGlobalContexts;
