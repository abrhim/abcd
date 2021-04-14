import { useCartContext } from '@magento/peregrine/lib/context/cart';
import { useQuery } from '@apollo/client';
import GET_CART_QUERY from '../queries/getCart.gql';

// TODO: move inside of useCart after mse implements cartUpdated

const useShoppingCartQuery = props => {
  const { fetchPolicy, skip } = props;
  const [{ cartId }] = useCartContext();
  const response = useQuery(GET_CART_QUERY, {
    variables: { cartId },
    skip: !cartId || skip,
    fetchPolicy,
  });

  if (response.error && process.env.NODE_ENV === 'development') {
    console.error('Magento ShoppingCart context query failed!', response.error);
  }
  return response;
};

export default useShoppingCartQuery;
