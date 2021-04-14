import { renderHook } from '@testing-library/react-hooks';
import useRouteChanged from '../../lib/collector/hooks/useRouteChanged';
import useLocation from '../../lib/collector/hooks/useLocation';
jest.mock('../../lib/collector/hooks/useLocation');
// useRouteChanged calls useLocation to determine if the route has changed
// based on the pathname of the current route.
useLocation
  .mockReturnValueOnce({ pathname: 'test' })
  .mockReturnValue({ pathname: 'test2' });

test('updates pageOffsets context and sends pageSummary event', () => {
  const onBeforeUnload = jest.fn();
  const { rerender } = renderHook(() => useRouteChanged(onBeforeUnload));
  expect(onBeforeUnload).toHaveBeenCalledTimes(1);
  rerender();
  expect(onBeforeUnload).toHaveBeenCalledTimes(2);
  // don't fire if rerender with the same location
  rerender();
  expect(onBeforeUnload).toHaveBeenCalledTimes(2);
});
