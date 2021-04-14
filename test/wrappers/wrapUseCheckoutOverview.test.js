import { renderHook } from '@testing-library/react-hooks';
import wrapUseCheckoutOverview from '../../lib/collector/wrappers/wrapUseCheckoutOverview';
import mse from '@adobe/magento-storefront-events-sdk';
const cartId = 'test';
jest.mock('@magento/peregrine/lib/context/cart', () => ({
  useCartContext: () => [{ cartId }],
}));

test('both original function and wrapper functionality are run in the hook', () => {
  const handleSubmit = jest.fn();
  const functionToWrap = jest.fn().mockReturnValue({
    handleSubmit,
  });
  const useFlow = wrapUseCheckoutOverview(functionToWrap);
  const { result } = renderHook(() => useFlow());
  expect(functionToWrap).toHaveBeenCalledTimes(1);
  jest.spyOn(mse.context, 'setShoppingCart');
  jest.spyOn(mse.publish, 'initiateCheckout');
  result.current.handleSubmit();
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(mse.context.setShoppingCart).toHaveBeenCalledTimes(1);
  expect(mse.context.setShoppingCart).toHaveBeenLastCalledWith({
    cartId,
  });
  expect(mse.publish.initiateCheckout).toHaveBeenCalledTimes(1);
  expect(mse.context.getShoppingCart()).toEqual({
    cartId,
  });
});
