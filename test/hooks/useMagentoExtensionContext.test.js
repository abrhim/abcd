import { renderHook } from '@testing-library/react-hooks';
import useMagentoExtensionContext from '../../lib/collector/hooks/useMagentoExtensionContext';
import mse from '@adobe/magento-storefront-events-sdk';

const magentoExtensionContext = { magento_extension_version: '1.2.3' };

jest.mock('@apollo/client', () => ({
  useQuery: jest
    .fn()
    .mockReturnValueOnce({
      data: undefined,
      error: 'test error',
    })
    .mockReturnValueOnce({
      data: { magentoExtensionContext },
    }),
}));

test('logs error and sets context to null on error', () => {
  const origError = console.error;
  console.error = jest.fn();
  renderHook(() => useMagentoExtensionContext());
  expect(mse.context.getMagentoExtension()).toBeFalsy();
  expect(console.error).toHaveBeenCalledTimes(1);
  console.error = origError;
});

test('sets extension version', () => {
  renderHook(() => useMagentoExtensionContext());
  expect(mse.context.getMagentoExtension().magentoExtensionVersion).toEqual(
    magentoExtensionContext.magento_extension_version,
  );
});
