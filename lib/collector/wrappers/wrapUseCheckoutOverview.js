import { useCartContext } from '@magento/peregrine/lib/context/cart';
import mse from '@adobe/magento-storefront-events-sdk';

const wrapUseCheckoutOverview = origUseCheckoutOverview => {
  return function(props) {
    const api = origUseCheckoutOverview(props);
    const [cart] = useCartContext();
    const cartId = cart.cartId;
    return {
      ...api,
      handleSubmit(...args) {
        const cartContext = mse.context.getShoppingCart();
        mse.context.setShoppingCart({ ...cartContext, cartId });
        mse.publish.initiateCheckout();
        return api.handleSubmit(...args);
      },
    };
  };
};

export default wrapUseCheckoutOverview;
