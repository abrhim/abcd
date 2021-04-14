import { renderHook } from '@testing-library/react-hooks';
import wrapUseSignIn from '../../lib/collector/wrappers/wrapUseSignIn';
import mse from '@adobe/magento-storefront-events-sdk';

test('both original function and wrapper functionality are run in the hook', () => {
  const handleSubmit = jest.fn();
  const functionToWrap = jest.fn().mockReturnValue({
    handleSubmit,
  });
  const useFlow = wrapUseSignIn(functionToWrap);
  const { result } = renderHook(() => useFlow());
  expect(functionToWrap).toHaveBeenCalledTimes(1);
  jest.spyOn(mse.context, 'setShopper');
  jest.spyOn(mse.publish, 'signIn');
  result.current.handleSubmit();
  expect(handleSubmit).toHaveBeenCalledTimes(1);
  expect(mse.context.setShopper).toHaveBeenCalledTimes(1);
  expect(mse.context.setShopper).toHaveBeenLastCalledWith({
    shopperId: 'logged-in',
  });
  expect(mse.publish.signIn).toHaveBeenCalledTimes(1);
});
