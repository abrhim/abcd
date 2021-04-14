import { renderHook } from '@testing-library/react-hooks';
import useShopperContext from '../../lib/collector/hooks/useShopperContext';
import mse from '@adobe/magento-storefront-events-sdk';

jest.mock('@magento/peregrine/lib/context/user', () => ({
  useUserContext: jest
    .fn()
    .mockReturnValueOnce([{ isSignedIn: true }])
    .mockReturnValueOnce([{ isSignedIn: false }]),
}));

test('useShopperContext', () => {
  const { rerender } = renderHook(() => useShopperContext());
  expect(mse.context.getShopper().shopperId).toEqual('logged-in');
  rerender();
  expect(mse.context.getShopper().shopperId).toEqual('guest');
});
