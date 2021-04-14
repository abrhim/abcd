import { renderHook } from '@testing-library/react-hooks';
import usePageUnload from '../../lib/collector/hooks/usePageUnload';

test('updates pageOffsets context and sends pageSummary event', () => {
  const onBeforeUnload = jest.fn();
  renderHook(() => usePageUnload(onBeforeUnload));
  window.dispatchEvent(new CustomEvent('beforeunload'));
  expect(onBeforeUnload).toHaveBeenCalledTimes(1);
});
