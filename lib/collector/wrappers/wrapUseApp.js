import useCreateDataLayerEventHandlers from '../hooks/useCreateDataLayerEventHandlers';
import useActivitySummaryCollector from '../collectors/useActivitySummaryCollector';
import useCustomUrl from '../hooks/useCustomUrl';
import useReferrerUrl from '../hooks/useReferrerUrl';
import usePageView from '../hooks/usePageView';
import useShopperContext from '../hooks/useShopperContext';
import useStorefrontInstanceContext from '../hooks/useStorefrontInstanceContext';
import useMagentoExtensionContext from '../hooks/useMagentoExtensionContext';
import useCart from '../hooks/useCart';
import useGlobalSnowplowContexts from '../hooks/useGlobalSnowplowContexts';

export default function wrapUseApp(origUseApp) {
  return function (props) {
    // Create subscribers and load in collector
    useCreateDataLayerEventHandlers();
    // Create listeners for global snowplow contexts
    useGlobalSnowplowContexts();
    // Wrap pwa hooks, request extra data, populate acdl
    useShopperContext();
    useStorefrontInstanceContext();
    useMagentoExtensionContext();
    useActivitySummaryCollector();
    useCart();
    useCustomUrl();
    useReferrerUrl();
    usePageView();
    return origUseApp(props);
  };
}
