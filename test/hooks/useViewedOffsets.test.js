import { act, renderHook } from '@testing-library/react-hooks';
import useViewedOffsets from '../../lib/collector/hooks/useViewedOffsets';

test('handles scroll events', () => {
  jest.spyOn(window, 'requestAnimationFrame').mockImplementation(cb => cb());
  const { result } = renderHook(() => useViewedOffsets());
  expect(result.current.offsets.minXOffset).toEqual(0);
  expect(result.current.offsets.minYOffset).toEqual(0);
  expect(result.current.offsets.maxXOffset).toEqual(window.innerWidth);
  expect(result.current.offsets.maxYOffset).toEqual(window.innerHeight);
  // test scrolling
  act(() => {
    document.body.scrollTop = 100;
    document.body.scrollLeft = 100;
    window.dispatchEvent(new CustomEvent('scroll'));
  });
  expect(result.current.offsets.minXOffset).toEqual(0);
  expect(result.current.offsets.minYOffset).toEqual(0);
  expect(result.current.offsets.maxXOffset).toEqual(window.innerWidth + 100);
  expect(result.current.offsets.maxYOffset).toEqual(window.innerHeight + 100);
  // test resizing
  act(() => {
    document.body.scrollTop = 0;
    document.body.scrollLeft = 0;
    window.innerWidth = 2000;
    window.innerHeight = 2000;
    window.dispatchEvent(new CustomEvent('resize'));
  });
  expect(result.current.offsets.minXOffset).toEqual(0);
  expect(result.current.offsets.minYOffset).toEqual(0);
  expect(result.current.offsets.maxXOffset).toEqual(window.innerWidth);
  expect(result.current.offsets.maxYOffset).toEqual(window.innerHeight);
  // test resetting offsets after navigation
  act(() => {
    document.body.scrollTop = 200;
    document.body.scrollLeft = 200;
    window.innerWidth = 1000;
    window.innerHeight = 1000;
    result.current.resetScrollOffsets();
  });
  expect(result.current.offsets.minXOffset).toEqual(200);
  expect(result.current.offsets.minYOffset).toEqual(200);
  expect(result.current.offsets.maxXOffset).toEqual(1200);
  expect(result.current.offsets.maxYOffset).toEqual(1200);
  window.requestAnimationFrame.mockRestore();
});
