const collectorIntercept = require('../collector/targets/intercept');
const recommendationsIntercept = require('../recommendations/targets/intercept');

module.exports = targets => {
  recommendationsIntercept(targets);
  collectorIntercept(targets);
};
