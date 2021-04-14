import useViewedOffsets from '../hooks/useViewedOffsets';
import { useCallback, useRef } from 'react';
import usePageVisibility from '../hooks/usePageVisibility';
import useActivitySummaryInterval from '../hooks/useActivitySummaryInterval';
import usePageUnload from '../hooks/usePageUnload';
import usePageHidden from '../hooks/usePageHidden';
import useRouteChanged from '../hooks/useRouteChanged';
import mse from '@adobe/magento-storefront-events-sdk';

const useActivitySummaryCollector = () => {
  const pingsRef = useRef(0);
  const { offsets, resetScrollOffsets } = useViewedOffsets();
  const { isVisible } = usePageVisibility();

  const handleBeforeUnload = useCallback(() => {
    // publish unload event
    const pageOffsets = { ...mse.context.getPageOffset() };
    mse.context.setPageOffset({
      ...pageOffsets,
      eventType: 'pageUnload',
    });
    // reset everything
    resetScrollOffsets();
    pingsRef.current = 0;
  }, [resetScrollOffsets]);

  useActivitySummaryInterval(offsets, pingsRef, isVisible);
  usePageUnload(handleBeforeUnload);
  usePageHidden(isVisible);
  useRouteChanged(handleBeforeUnload);
};

export default useActivitySummaryCollector;
