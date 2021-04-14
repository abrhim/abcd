import { useLayoutEffect } from 'react';
import mse from '@adobe/magento-storefront-events-sdk';

const usePageHidden = isVisible => {
  useLayoutEffect(() => {
    if (!isVisible) {
      const pageOffsets = { ...mse.context.getPageOffset() };
      mse.context.setPageOffset({
        ...pageOffsets,
        eventType: 'visibilityHidden',
      });
      mse.context.setPageOffset(pageOffsets);
    }
  }, [isVisible]);
};

export default usePageHidden;
