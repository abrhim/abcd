import { renderHook } from '@testing-library/react-hooks';
import useLocation from '../../lib/collector/hooks/useLocation';

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

test('useLocation only sets state when pathname changes', () => {
  const { result, rerender } = renderHook(() => useLocation());
  expect(result.current.pathname).toEqual(first.pathname);
  // rerender with the same pathname
  rerender();
  expect(result.current).toEqual(result.all[0]);
  expect(result.current.key).toEqual(first.key);
  // render with different pathname
  rerender();
  expect(result.current.pathname).toEqual(second.pathname);
});
