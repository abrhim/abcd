import { gql } from '@apollo/client';
import { ProductRecommendationsFragment } from './getCart.gql';
import { MiniCartFragment } from '@magento/venia-ui/lib/components/MiniCart/miniCart.gql';

const MINI_CART_QUERY = gql`
  query MiniCartQuery($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      ...MiniCartFragment
      ...ProductRecommendationsFragment
    }
  }
  ${MiniCartFragment}
  ${ProductRecommendationsFragment}
`;
export default MINI_CART_QUERY;
