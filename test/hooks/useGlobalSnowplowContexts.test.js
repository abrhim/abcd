import { renderHook } from '@testing-library/react-hooks';
import useGlobalSnowplowContexts from '../../lib/collector/hooks/useGlobalSnowplowContexts';
import mse from '@adobe/magento-storefront-events-sdk';
import {
  generateMagentoExtensionContext,
  generateShopperContext,
  generateShoppingCart,
  generateStorefrontInstanceContext,
} from '../mocks';
import {
  MAGENTO_EXTENSION_SCHEMA_URL,
  SHOPPER_SCHEMA_URL,
  SHOPPING_CART_SCHEMA_URL,
  STOREFRONT_INSTANCE_SCHEMA_URL,
} from '../../lib/collector/constants';
import { getJSTrackerContext } from '../../lib/collector/util/getJsTrackerContext';

jest.mock('../../package.json', () => ({
  version: '1.2.3',
}));

test('snowplow collector updates global contexts when data layer changes', () => {
  window.magento_store_events = jest.fn();
  expect(window.magento_store_events).not.toHaveBeenCalled();

  renderHook(() => useGlobalSnowplowContexts());

  // Magento JS Tracker context
  expect(window.magento_store_events).toHaveBeenCalledTimes(1);
  expect(
    window.magento_store_events,
  ).toHaveBeenLastCalledWith('addGlobalContexts', [getJSTrackerContext()]);

  // Storefront instance context
  const storefrontInstance = generateStorefrontInstanceContext();
  mse.context.setStorefrontInstance(storefrontInstance);
  expect(window.magento_store_events).toHaveBeenCalledWith(
    'removeGlobalContexts',
    [
      {
        data: undefined,
        schema: STOREFRONT_INSTANCE_SCHEMA_URL,
      },
    ],
  );
  expect(window.magento_store_events).toHaveBeenLastCalledWith(
    'addGlobalContexts',
    [
      {
        data: storefrontInstance,
        schema: STOREFRONT_INSTANCE_SCHEMA_URL,
      },
    ],
  );

  // Magento extension context
  const magentoExtensionContext = generateMagentoExtensionContext();
  mse.context.setMagentoExtension(magentoExtensionContext);
  expect(window.magento_store_events).toHaveBeenCalledWith(
    'removeGlobalContexts',
    [
      {
        data: undefined,
        schema: MAGENTO_EXTENSION_SCHEMA_URL,
      },
    ],
  );
  expect(window.magento_store_events).toHaveBeenLastCalledWith(
    'addGlobalContexts',
    [
      {
        data: magentoExtensionContext,
        schema: MAGENTO_EXTENSION_SCHEMA_URL,
      },
    ],
  );

  // Shopper context
  const shopperContext = generateShopperContext();
  mse.context.setShopper(shopperContext);
  expect(window.magento_store_events).toHaveBeenCalledWith(
    'removeGlobalContexts',
    [
      {
        data: undefined,
        schema: SHOPPER_SCHEMA_URL,
      },
    ],
  );
  expect(window.magento_store_events).toHaveBeenLastCalledWith(
    'addGlobalContexts',
    [
      {
        data: shopperContext,
        schema: SHOPPER_SCHEMA_URL,
      },
    ],
  );

  // shopping cart context
  const shoppingCartContext = generateShoppingCart();
  mse.context.setShoppingCart(shoppingCartContext);
  expect(window.magento_store_events).toHaveBeenCalledWith(
    'removeGlobalContexts',
    [
      {
        data: {},
        schema: SHOPPING_CART_SCHEMA_URL,
      },
    ],
  );
  expect(window.magento_store_events).toHaveBeenLastCalledWith(
    'addGlobalContexts',
    [
      {
        data: expect.objectContaining({
          cartId: expect.any(Number),
        }),
        schema: SHOPPING_CART_SCHEMA_URL,
      },
    ],
  );
});
