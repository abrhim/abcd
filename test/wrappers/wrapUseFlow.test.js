import { renderHook } from '@testing-library/react-hooks';
import wrapUseFlow from '../../lib/collector/wrappers/wrapUseFlow';
import mse from '@adobe/magento-storefront-events-sdk';
const cartId = 'test';
jest.mock('@magento/peregrine/lib/context/cart', () => ({
  useCartContext: () => [{ cartId }],
}));

test('both original function and wrapper functionality are run in the hook', () => {
  const handleBeginCheckout = jest.fn();
  const functionToWrap = jest.fn().mockReturnValue({
    handleBeginCheckout,
  });
  const useFlow = wrapUseFlow(functionToWrap);
  const { result } = renderHook(() => useFlow());
  expect(functionToWrap).toHaveBeenCalledTimes(1);
  jest.spyOn(mse.context, 'setShoppingCart');
  jest.spyOn(mse.publish, 'initiateCheckout');
  result.current.handleBeginCheckout();
  expect(handleBeginCheckout).toHaveBeenCalledTimes(1);
  expect(mse.context.setShoppingCart).toHaveBeenCalledTimes(1);
  expect(mse.context.setShoppingCart).toHaveBeenLastCalledWith({
    cartId,
  });
  expect(mse.publish.initiateCheckout).toHaveBeenCalledTimes(1);
  expect(mse.context.getShoppingCart()).toEqual({
    cartId,
  });
});
