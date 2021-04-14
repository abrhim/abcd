import { useState, useEffect, useCallback, useRef } from 'react';
import mse from '@adobe/magento-storefront-events-sdk';

// ping interval in seconds
export const PING_INTERVAL = 5;

const useActivitySummaryInterval = (offsets, pingsRef, isVisible) => {
  const [delay, setDelay] = useState(PING_INTERVAL * 1000);
  const getPageOffsetContext = useCallback(() => {
    pingsRef.current += 1;
    mse.context.setPageOffset({
      ...offsets,
      pings: pingsRef.current,
      ping_interval: PING_INTERVAL,
      eventType: 'Page Ping',
    });
  }, [offsets, pingsRef]);

  const savedCallback = useRef(getPageOffsetContext);

  useEffect(() => {
    // If tab is switched, pause the interval
    setDelay(isVisible ? PING_INTERVAL * 1000 : null);
  }, [isVisible]);

  useEffect(() => {
    savedCallback.current = getPageOffsetContext;
  }, [getPageOffsetContext]);

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    let id = window.setInterval(tick, delay);
    return () => window.clearInterval(id);
  }, [delay]);
};

export default useActivitySummaryInterval;
