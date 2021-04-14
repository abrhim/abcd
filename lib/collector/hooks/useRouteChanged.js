import { useLayoutEffect } from 'react';
import useLocation from './useLocation';

const useRouteChanged = handleBeforeUnload => {
  const location = useLocation();
  // Handle navigating within pwa studio
  useLayoutEffect(() => {
    handleBeforeUnload();
  }, [handleBeforeUnload, location]);
};

export default useRouteChanged;
