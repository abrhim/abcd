import useEventListener from './useEventListener';

const usePageUnload = handleBeforeUnload => {
  // Handle closing the page or navigating away
  useEventListener(window, 'beforeunload', handleBeforeUnload);
};

export default usePageUnload;
