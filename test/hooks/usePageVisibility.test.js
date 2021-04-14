import { renderHook, act } from '@testing-library/react-hooks';
import usePageVisibility from '../../lib/collector/hooks/usePageVisibility';

const first = {
  pathname: '/first',
  key: 'foo',
};
const second = {
  pathname: 'second',
};

jest.mock('react-router-dom', () => ({
  useLocation: jest
    .fn()
    .mockReturnValueOnce(first)
    .mockReturnValueOnce({ ...first, key: 'bar' })
    .mockReturnValueOnce(second)
    .mockReturnValueOnce(second),
}));

test('creates and removes page visibility listeners', () => {
  const oldAdd = document.addEventListener;
  const oldRemove = document.removeEventListener;
  document.addEventListener = jest.fn();
  document.removeEventListener = jest.fn();

  const { unmount } = renderHook(() => usePageVisibility());
  expect(document.addEventListener).toHaveBeenCalledTimes(1);
  unmount();
  expect(document.removeEventListener).toHaveBeenCalledTimes(1);

  document.addEventListener = oldAdd;
  document.removeEventListener = oldRemove;
});

test('handles visibility change', () => {
  delete document.visibilityState;
  Object.defineProperty(document, 'visibilityState', {
    value: 'visible',
    writable: true,
  });
  const { result } = renderHook(() => usePageVisibility());
  expect(result.current.isVisible).toBe(true);
  document.visibilityState = 'hidden';
  act(() => {
    document.dispatchEvent(new Event('visibilitychange'));
  });
  expect(result.current.isVisible).toBe(false);
});
