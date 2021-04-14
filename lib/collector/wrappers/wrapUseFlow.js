import { useCartContext } from '@magento/peregrine/lib/context/cart';
import mse from '@adobe/magento-storefront-events-sdk';

const wrapUseFlow = origUseFlow => {
  return function(props) {
    const api = origUseFlow(props);
    const [cart] = useCartContext();
    const cartId = cart.cartId;
    return {
      ...api,
      handleBeginCheckout(...args) {
        const cartContext = mse.context.getShoppingCart();
        mse.context.setShoppingCart({ ...cartContext, cartId });
        mse.publish.initiateCheckout();
        return api.handleBeginCheckout(...args);
      },
    };
  };
};

export default wrapUseFlow;
