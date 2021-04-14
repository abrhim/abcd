/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */
import { version } from '../../../package.json';
// This value will be overwritten at build time
const build = '0.0.0';

import { MAGENTO_JS_TRACKER_SCHEMA_URL } from '../constants';

export const getJSTrackerContext = () => {
  const trackerContext = {
    schema: MAGENTO_JS_TRACKER_SCHEMA_URL,
    data: {
      magentoJsVersion: version,
      magentoJsBuild: build,
    },
  };

  return trackerContext;
};
