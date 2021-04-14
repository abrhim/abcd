export const COLLECTOR_NAME = 'magento_store_events';
export const SNOWPLOW_JS_URL = 'https://commerce.adobedtm.com/sp/v2/sp.js';

export default function (p, l, o, w, i, n, g) {
  if (!p[i]) {
    p.GlobalSnowplowNamespace = p.GlobalSnowplowNamespace || [];
    p.GlobalSnowplowNamespace.push(i);
    p[i] = function () {
      (p[i].q = p[i].q || []).push(arguments);
    };
    p[i].q = p[i].q || [];
    n = l.createElement(o);
    g = l.getElementsByTagName(o)[0];
    n.async = 1;
    n.src = w;
    g.parentNode.insertBefore(n, g);
  }
}
