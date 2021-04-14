const processGraphQLResponse = (resp, keepTypenames = false) => {
  const retVal = {};

  Object.entries(resp).forEach(([key, value]) => {
    if (key === '__typename') {
      if (keepTypenames) {
        retVal[key] = value;
      }
    } else {
      if (Array.isArray(value)) {
        retVal[snakeToCamel(key)] = value.map(item =>
          processGraphQLResponse(item),
        );
      } else if (typeof value === 'object' && value !== null) {
        retVal[snakeToCamel(key)] = processGraphQLResponse(value);
      } else {
        retVal[snakeToCamel(key)] = value;
      }
    }
  });
  return retVal;
};

const snakeToCamel = str =>
  str.replace(/([-_][a-z])/g, group =>
    group
      .toUpperCase()
      .replace('-', '')
      .replace('_', ''),
  );

export default processGraphQLResponse;
