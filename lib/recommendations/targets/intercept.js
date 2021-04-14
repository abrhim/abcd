const myName = '@magento/venia-product-recommendations';

module.exports = targets => {
  const builtins = targets.of('@magento/pwa-buildpack');
  builtins.specialFeatures.tap(flags => {
    flags[targets.name] = {
      esModules: true,
      graphqlQueries: true,
      cssModules: true,
    };
  });

  builtins.envVarDefinitions.tap(() => {
    targets.of('@magento/peregrine').talons.tap(talons => {
      talons.App.useApp.wrapWith(
        `${myName}/lib/recommendations/wrappers/wrapUseApp`,
      );
      talons.Gallery.useGalleryItem.wrapWith(
        `${myName}/lib/recommendations/wrappers/wrapUseGalleryItem`,
      );
      return talons;
    });
  });
};
