import { renderHook } from '@testing-library/react-hooks';
import usePageHidden from '../../lib/collector/hooks/usePageHidden';
import mse from '@adobe/magento-storefront-events-sdk';

test('updates pageOffsets context and sends pageSummary event', () => {
  jest.spyOn(mse.context, 'getPageOffset');
  jest.spyOn(mse.context, 'setPageOffset');
  jest.spyOn(mse.publish, 'pageActivitySummary');
  const { rerender } = renderHook(isVisible => usePageHidden(isVisible), {
    initialProps: true,
  });

  expect(mse.context.getPageOffset).not.toHaveBeenCalled();
  expect(mse.context.setPageOffset).not.toHaveBeenCalled();
  expect(mse.publish.pageActivitySummary).not.toHaveBeenCalled();
  rerender(false);
  expect(mse.context.getPageOffset).toHaveBeenCalledTimes(1);
  expect(mse.context.setPageOffset).toHaveBeenCalledTimes(2);
  expect(mse.context.setPageOffset.mock.calls[0][0].eventType).toEqual(
    'visibilityHidden',
  );
  expect(mse.context.setPageOffset.mock.calls[1][0].eventType).toBeUndefined();
});
