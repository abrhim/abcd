import { useEffect } from 'react';
import useShoppingCartQuery from './useShoppingCartQuery';
// TODO: remove dep after mse.cartUpdated() is implemented
import { CART_CONTENTS_KEY } from '../constants';
import mse from '@adobe/magento-storefront-events-sdk';
import processGraphQLResponse from '../util/processGraphQLResponse';

const useCart = () => {
  const { data: currentCart } = useShoppingCartQuery({
    fetchPolicy: 'cache-first',
  });

  useEffect(() => {
    // TODO: mse.publish.cartUpdated(), mse.context.setShoppingCart(currentCart)
    if (currentCart && currentCart.cart && currentCart.cart.items) {
      let previousCart;

      // TODO: const previousCart = mse.context.getShoppingCart()
      try {
        previousCart = JSON.parse(localStorage.getItem(CART_CONTENTS_KEY));
      } catch (err) {
        console.log(err);
      }
      if (previousCart && previousCart.cart && previousCart.cart.items) {
        const prevCartLength = previousCart.cart.items.length;
        const currentCartLength = currentCart.cart.items.length;
        const newCart = processGraphQLResponse(currentCart.cart);
        if (currentCartLength < prevCartLength) {
          // remove item
          mse.context.setShoppingCart(newCart);
          mse.publish.removeFromCart();
        } else if (currentCartLength > prevCartLength) {
          // add item
          mse.context.setShoppingCart(newCart);
          mse.publish.addToCart();
        }
      }
    }
  }, [currentCart]);
};

export default useCart;
