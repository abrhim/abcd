import useLocation from './useLocation';
import { useEffect } from 'react';
import mse from '@adobe/magento-storefront-events-sdk';

const useCustomUrl = () => {
  const location = useLocation();

  useEffect(() => {
    const urlContext = mse.context.getCustomUrl() || {};
    const customUrl = window.location.href;
    if (urlContext.customUrl !== customUrl) {
      mse.context.setCustomUrl({ customUrl });
      mse.publish.customUrl();
    }
  }, [location]);
};

export default useCustomUrl;
