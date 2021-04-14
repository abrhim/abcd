import useLocation from './useLocation';
import { useEffect, useRef } from 'react';
import mse from '@adobe/magento-storefront-events-sdk';

const useReferrerUrl = () => {
  const location = useLocation();
  const prevPathName = useRef();

  // initialize referrer url context
  useEffect(() => {
    if (document.referrer) {
      mse.context.setReferrerUrl({ referrerUrl: document.referrer });
      mse.publish.referrerUrl();
    }
  }, []);

  useEffect(() => {
    const referrerContext = mse.context.getReferrerUrl();
    const referrerUrl = window.location.origin + prevPathName.current;
    if (
      prevPathName.current &&
      referrerContext &&
      referrerContext.referrerUrl !== referrerUrl
    ) {
      mse.context.setReferrerUrl({ referrerUrl });
      mse.publish.referrerUrl();
    }
    prevPathName.current = location.pathname;
  }, [location]);
};

export default useReferrerUrl;
