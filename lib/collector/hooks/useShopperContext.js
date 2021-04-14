import { useEffect } from 'react';
import { useUserContext } from '@magento/peregrine/lib/context/user';
import mse from '@adobe/magento-storefront-events-sdk';

const useShopperContext = () => {
  const [{ isSignedIn }] = useUserContext();

  useEffect(() => {
    mse.context.setShopper({
      shopperId: isSignedIn ? 'logged-in' : 'guest',
    });
  }, [isSignedIn]);
};

export default useShopperContext;
