import { ITEM_SCHEMA_URL } from '../constants';
export const createItemContext = (unitId, item) => {
  const itemContext = {
    schema: ITEM_SCHEMA_URL,
    data: {
      unitId,
      serviceRank: item.rank,
      displayRank: item.rank,
      name: item.name,
      sku: item.sku,
      url: item.url,
      imageUrl: item.image ? item.image.url : null,
      prices: {
        minimum: {
          regular:
            item.prices && item.prices.minimum && item.prices.minimum.regular
              ? item.prices.minimum.regular
              : null,
          final:
            item.prices && item.prices.minimum && item.prices.minimum.final
              ? item.prices.minimum.final
              : null,
        },
        maximum: {
          regular:
            item.prices && item.prices.maximum && item.prices.maximum.regular
              ? item.prices.maximum.regular
              : null,
          final:
            item.prices && item.prices.maximum && item.prices.maximum.final
              ? item.prices.maximum.final
              : null,
        },
      },
      currencyCode: item.currency,
    },
  };

  return itemContext;
};
