import { useEffect, useState } from 'react';

const getIsDocumentVisible = () => document.visibilityState === 'visible';

const usePageVisibility = () => {
  const [isVisible, setIsVisible] = useState(() => getIsDocumentVisible());

  useEffect(() => {
    const handleVisibilityChange = () => setIsVisible(getIsDocumentVisible());

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return { isVisible };
};

export default usePageVisibility;
