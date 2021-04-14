import MINI_CART_QUERY from '../queries/miniCartQuery.gql';

export const wrapUseMiniCart = origUseMiniCart => {
  return function(props) {
    props.operations.miniCartQuery = MINI_CART_QUERY;
    const api = origUseMiniCart(props);
    return api;
  };
};

export default wrapUseMiniCart;
