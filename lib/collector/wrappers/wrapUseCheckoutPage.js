import mse from '@adobe/magento-storefront-events-sdk';
import { useEffect, useRef } from 'react';

const wrapUseCheckoutPage = origUseCheckoutPage => {
  return function(props) {
    const placeOrderFired = useRef(false);
    const api = origUseCheckoutPage(props);
    useEffect(() => {
      if (api.orderNumber && !placeOrderFired.current) {
        mse.context.setOrder({
          orderId: api.orderNumber,
        });
        mse.publish.placeOrder();
        placeOrderFired.current = true;
      }
      return () => {
        mse.context.setOrder({});
      };
    }, [api.orderNumber]);
    return api;
  };
};

export default wrapUseCheckoutPage;
