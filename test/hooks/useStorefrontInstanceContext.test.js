import { renderHook } from '@testing-library/react-hooks';
import useStorefrontInstanceContext from '../../lib/collector/hooks/useStorefrontInstanceContext';
import mse from '@adobe/magento-storefront-events-sdk';
import { useQuery } from '@apollo/client';

jest.mock('@apollo/client', () => ({
  useQuery: jest.fn(),
}));

test('logs errors', () => {
  const oldError = console.error;
  console.error = jest.fn();
  useQuery.mockReturnValueOnce({
    data: undefined,
    error: 'foo',
    loading: false,
  });
  renderHook(() => useStorefrontInstanceContext());
  expect(console.error).toHaveBeenCalledTimes(1);
  console.error = oldError;
});

test('populates mse context', () => {
  expect(mse.context.getStorefrontInstance()).toBeUndefined();
  const catalogExtensionVersion = '1.2.3';
  const environment = 'prod';
  const environmentId = 'prod';
  const storeCode = 'main store';
  const storeId = 'main';
  const storeName = 'main store name';
  const storeUrl = 'https://coolstore.com';
  const storeViewCode = 'default';
  const storeViewId = '1';
  const storeViewName = 'default';
  const websiteCode = 'default';
  const websiteId = '1';
  const websiteName = 'default';
  useQuery.mockReturnValueOnce({
    data: {
      storefrontInstanceContext: {
        catalog_extension_version: catalogExtensionVersion,
        environment,
        environment_id: environmentId,
        store_code: storeCode,
        store_id: storeId,
        store_name: storeName,
        store_url: storeUrl,
        store_view_code: storeViewCode,
        store_view_id: storeViewId,
        store_view_name: storeViewName,
        website_code: websiteCode,
        website_id: websiteId,
        website_name: websiteName,
      },
    },
  });
  renderHook(() => useStorefrontInstanceContext());
  const storefrontInstance = mse.context.getStorefrontInstance();
  expect(storefrontInstance).toBeDefined();
  expect(storefrontInstance.environment).toEqual(environment);
  expect(storefrontInstance.catalogExtensionVersion).toEqual(
    catalogExtensionVersion,
  );
  expect(storefrontInstance.environmentId).toEqual(environmentId);
  expect(storefrontInstance.storeCode).toEqual(storeCode);
  expect(storefrontInstance.storeId).toEqual(storeId);
  expect(storefrontInstance.storeName).toEqual(storeName);
  expect(storefrontInstance.storeUrl).toEqual(storeUrl);
  expect(storefrontInstance.storeViewCode).toEqual(storeViewCode);
  expect(storefrontInstance.storeViewId).toEqual(storeViewId);
  expect(storefrontInstance.storeViewName).toEqual(storeViewName);
  expect(storefrontInstance.websiteCode).toEqual(websiteCode);
  expect(storefrontInstance.websiteId).toEqual(websiteId);
  expect(storefrontInstance.websiteName).toEqual(websiteName);
});
