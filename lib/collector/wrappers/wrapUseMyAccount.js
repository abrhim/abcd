import mse from '@adobe/magento-storefront-events-sdk';

const wrapUseMyAccount = origUseMyAccount => {
  return function(props) {
    const api = origUseMyAccount(props);
    return {
      ...api,
      handleSignOut(...args) {
        mse.context.setShopper({
          shopperId: 'guest',
        });
        mse.publish.signOut();
        return api.handleSignOut(...args);
      },
    };
  };
};

export default wrapUseMyAccount;
