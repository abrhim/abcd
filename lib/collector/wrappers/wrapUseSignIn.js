import mse from '@adobe/magento-storefront-events-sdk';

const wrapUseSignIn = origUseSignIn => {
  return function useSignIn(props) {
    const api = origUseSignIn(props);
    return {
      ...api,
      handleSubmit(...args) {
        mse.context.setShopper({
          shopperId: 'logged-in',
        });
        mse.publish.signIn();
        return api.handleSubmit(...args);
      },
    };
  };
};

export default wrapUseSignIn;
