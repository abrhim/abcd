const clearActivitySummaryFromDataLayerArray = () => {
  window.requestAnimationFrame(() => {
    let start = undefined;
    let delLength = undefined;
    const spliceValues = window.adobeDataLayer.reduce((acc, curr, index) => {
      if (Object.prototype.hasOwnProperty.call(curr, 'page-offset-context')) {
        if (start === undefined) {
          start = index;
          delLength = 1;
        } else {
          delLength += 1;
        }
      }
      if (
        !Object.prototype.hasOwnProperty.call(curr, 'page-offset-context') ||
        index === window.adobeDataLayer.length - 1
      ) {
        if (start !== undefined) {
          acc.push([start, delLength]);
          start = undefined;
          delLength = undefined;
        }
      }
      return acc;
    }, []);

    while (spliceValues.length > 0) {
      const [begin, length] = spliceValues.pop();
      window.adobeDataLayer.splice(begin, length);
    }
  });
};

export default clearActivitySummaryFromDataLayerArray;
