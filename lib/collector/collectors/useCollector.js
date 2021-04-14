import { useEffect } from 'react';
import createCollector, {
  COLLECTOR_NAME,
  SNOWPLOW_JS_URL,
} from '../util/createCollector';

createCollector(window, document, 'script', SNOWPLOW_JS_URL, COLLECTOR_NAME);

const useCollector = () => {
  useEffect(() => {
    const magentoStoreEvents = window[COLLECTOR_NAME];

    magentoStoreEvents(
      'newTracker',
      'magento-storefront-js',
      process.env.SNOWPLOW_URL,
      {
        appId: process.env.SNOWPLOW_APP_ID,
        platform: 'web',
        cookieDomain: null,
        eventMethod: navigator.sendBeacon ? 'beacon' : 'post',
        discoverRootDomain: true,
        cookieName: 'mg',
        encodeBase64: false,
        respectDoNotTrack: false,
        userFingerprint: true,
        userFingerprintSeed: 7089491512,
        pageUnloadTimer: 500,
        forceSecureTracker: true,
        bufferSize: 1,
        postPath: process.env.SNOWPLOW_COLLECTOR,
        maxPostBytes: 45000,
        cookieLifetime: 63072000, // 1 year
        stateStorageStrategy: 'localStorage',
        contexts: {
          webPage: true,
          performanceTiming: true,
        },
      },
    );

    magentoStoreEvents('enableLinkClickTracking');
    magentoStoreEvents('setOptOutCookie', 'mg_dnt');
  }, []);

  return window[COLLECTOR_NAME];
};

export default useCollector;
