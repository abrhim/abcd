import { renderHook } from '@testing-library/react-hooks';
import wrapUseMyAccount from '../../lib/collector/wrappers/wrapUseMyAccount';
import mse from '@adobe/magento-storefront-events-sdk';

test('both original function and wrapper functionality are run in the hook', () => {
  const handleSignOut = jest.fn();
  const functionToWrap = jest.fn().mockReturnValue({
    handleSignOut,
  });
  const useMyAccount = wrapUseMyAccount(functionToWrap);
  const { result } = renderHook(() => useMyAccount());
  expect(functionToWrap).toHaveBeenCalledTimes(1);
  jest.spyOn(mse.context, 'setShopper');
  jest.spyOn(mse.publish, 'signOut');
  result.current.handleSignOut();
  expect(handleSignOut).toHaveBeenCalledTimes(1);
  expect(mse.context.setShopper).toHaveBeenCalledTimes(1);
  expect(mse.context.setShopper).toHaveBeenLastCalledWith({
    shopperId: 'guest',
  });
  expect(mse.publish.signOut).toHaveBeenCalledTimes(1);
  expect(mse.context.getShopper()).toEqual({
    shopperId: 'guest',
  });
});
