import useLocation from '../hooks/useLocation';
import { useEffect } from 'react';
import mse from '@adobe/magento-storefront-events-sdk';

const usePageView = () => {
  const location = useLocation();

  useEffect(() => {
    mse.publish.pageView();
  }, [location]);
};

export default usePageView;
