export const generateShopperContext = overrides => ({
  shopperId: 'test123',
  ...overrides,
});

export const generateStorefrontInstanceContext = overrides => ({
  environtmentId: '1234',
  instanceId: 'instance1',
  environment: 'test',
  storeUrl: 'http://test.com',
  websiteId: 'main website',
  websiteCode: 'main website',
  storeId: 1234,
  storeCode: 'main store',
  storeViewId: 12345,
  storeViewCode: 'main store view code',
  websiteName: 'my website',
  storeName: 'my store name',
  storeViewName: 'my store view name',
  baseCurrencyCode: 'usd',
  storeViewCurrencyCode: 'usd',
  catalogExtensionVersion: '1.2.3',
  ...overrides,
});

export const generateMagentoExtensionContext = overrides => ({
  magentoExtensionVersion: '1.2.3',
  ...overrides,
});

export const generateProductContext = overrides => ({
  id: 1144,
  categories: [
    {
      id: 12,
      breadcrumbs: [
        {
          categoryId: 11,
        },
      ],
    },
  ],
  description:
    '<p>The Selena Pants are one of the more form-fitting pieces in the Venia collection. But don\'t be fooled by their appearance. These gems are made with soft pima cotton and just the right amount of stretch.</p><p>Features:</p><ul><li>Cotton waistband</li><li>Drawstring waist</li><li>Sits just below waist</li><li>31" inseam</li><li>Machine wash, line dry</li></ul>',
  mediaGalleryEntries: [
    {
      id: 1238,
      label: 'Main',
      position: 1,
      disabled: false,
      file: '/v/p/vp01-ll_main_4.jpg',
    },
  ],
  metaDescription:
    "The Selena Pants are one of the more form-fitting pieces in the Venia collection. But don't be fooled by their appearance. These gems are made with soft pima cotton and just the right amount of stretch. Features: Cotton waistband. Drawstring waist. Sits ",
  name: 'Selena Pants',
  price: {
    regularPrice: {
      amount: {
        currency: 'USD',
        value: 108,
      },
    },
  },
  sku: 'VP01-LL-XL',
  parentSku: 'VP01',
  smallImage:
    'https://master-7rqtwti-5k2ulbou6q5ti.us-4.magentosite.cloud/media/catalog/product/cache/18e351d3d205c0264ac03dce60b9880e/v/p/vp01-ll_main_4.jpg',
  urlKey: 'selena-pants',
  configurableOptions: [
    {
      attributeCode: 'fashion_color',
      attributeId: '180',
      id: 96,
      label: 'Fashion Color',
      values: [
        {
          defaultLabel: 'Lilac',
          label: 'Lilac',
          storeLabel: 'Lilac',
          useDefaultValue: true,
          valueIndex: 23,
          swatchData: {
            value: '#dcd5e1',
          },
        },
      ],
    },
    {
      attributeCode: 'fashion_size',
      attributeId: '183',
      id: 97,
      label: 'Fashion Size',
      values: [
        {
          defaultLabel: 'L',
          label: 'L',
          storeLabel: 'L',
          useDefaultValue: true,
          valueIndex: 29,
          swatchData: {
            value: 'L',
          },
        },
      ],
    },
  ],
  variants: [
    {
      attributes: [
        {
          code: 'fashion_color',
          valueIndex: 27,
        },
        {
          code: 'fashion_size',
          valueIndex: 31,
        },
      ],
      product: {
        id: 794,
        mediaGalleryEntries: [
          {
            id: 804,
            disabled: false,
            file: '/v/p/vp01-la_main_2.jpg',
            label: 'Main',
            position: 1,
          },
        ],
        sku: 'VP01-LA-S',
        stockStatus: 'IN_STOCK',
        price: {
          regularPrice: {
            amount: {
              currency: 'USD',
              value: 108,
            },
          },
        },
      },
    },
  ],
  ...overrides,
});

export const generateShoppingCart = overrides => ({
  id: 1234,
  giftMessageSelected: true,
  giftWrappingSelected: true,
  items: [
    {
      product: {
        name: 'my product',
        image: {
          url: 'https://test.com/cool.jpg',
        },
        sku: '1234',
      },
      basePrice: 1.23,
      id: 1234,
      quantity: 100,
      prices: {
        price: {
          value: 1.23,
        },
      },
    },
  ],
  totalQuantity: 100,
  possibleOnepageCheckout: false,
  subtotalAmount: 123,
  prices: {
    subtotalExcludingTax: { value: 123 },
    subtotalIncludingTax: { value: 124 },
  },
  ...overrides,
});

export const sampleGraphQLCart = {
  __typename: 'Cart',
  id: '4yG9W7GyEUB5z1Sovd9Htf2IlmdoArVn',
  total_quantity: 4,
  prices: {
    __typename: 'CartPrices',
    subtotal_excluding_tax: { __typename: 'Money', value: 432 },
    subtotal_including_tax: { __typename: 'Money', value: 432 },
  },
  items: [
    {
      __typename: 'ConfigurableCartItem',
      id: '477',
      can_apply_msrp: false,
      formatted_price: '<span class="price">$108.00</span>',
      product_configuration_options: [
        { __typename: 'ProductOptions', product: null },
        { __typename: 'ProductOptions', product: null },
      ],
      product: {
        __typename: 'ConfigurableProduct',
        id: 1144,
        name: 'Selena Pants',
        url_key: 'selena-pants',
        url_suffix: '.html',
        is_visible_in_site_visibility: true,
        sku: 'VP01',
        product_has_url: true,
        image: {
          __typename: 'ProductImage',
          url:
            'https://master-7rqtwti-5k2ulbou6q5ti.us-4.magentosite.cloud/media/catalog/product/cache/18e351d3d205c0264ac03dce60b9880e/v/p/vp01-ll_main_4.jpg',
        },
        thumbnail: {
          __typename: 'ProductImage',
          url:
            'https://master-7rqtwti-5k2ulbou6q5ti.us-4.magentosite.cloud/media/catalog/product/cache/18e351d3d205c0264ac03dce60b9880e/v/p/vp01-ll_main_4.jpg',
          label: 'Main',
        },
      },
      prices: {
        __typename: 'CartItemPrices',
        price: { __typename: 'Money', currency: 'USD', value: 108 },
      },
      quantity: 1,
      configurable_options: [
        {
          __typename: 'SelectedConfigurableOption',
          id: 180,
          option_label: 'Fashion Color',
          value_id: 23,
          value_label: 'Lilac',
        },
        {
          __typename: 'SelectedConfigurableOption',
          id: 183,
          option_label: 'Fashion Size',
          value_id: 30,
          value_label: 'M',
        },
      ],
    },
    {
      __typename: 'ConfigurableCartItem',
      id: '479',
      can_apply_msrp: false,
      formatted_price: '<span class="price">$108.00</span>',
      product_configuration_options: [
        { __typename: 'ProductOptions', product: null },
        { __typename: 'ProductOptions', product: null },
      ],
      product: {
        __typename: 'ConfigurableProduct',
        id: 1144,
        name: 'Selena Pants',
        url_key: 'selena-pants',
        url_suffix: '.html',
        is_visible_in_site_visibility: true,
        sku: 'VP01',
        product_has_url: true,
        image: {
          __typename: 'ProductImage',
          url:
            'https://master-7rqtwti-5k2ulbou6q5ti.us-4.magentosite.cloud/media/catalog/product/cache/18e351d3d205c0264ac03dce60b9880e/v/p/vp01-ll_main_4.jpg',
        },
        thumbnail: {
          __typename: 'ProductImage',
          url:
            'https://master-7rqtwti-5k2ulbou6q5ti.us-4.magentosite.cloud/media/catalog/product/cache/18e351d3d205c0264ac03dce60b9880e/v/p/vp01-ll_main_4.jpg',
          label: 'Main',
        },
      },
      prices: {
        __typename: 'CartItemPrices',
        price: { __typename: 'Money', currency: 'USD', value: 108 },
      },
      quantity: 2,
      configurable_options: [
        {
          __typename: 'SelectedConfigurableOption',
          id: 180,
          option_label: 'Fashion Color',
          value_id: 23,
          value_label: 'Lilac',
        },
        {
          __typename: 'SelectedConfigurableOption',
          id: 183,
          option_label: 'Fashion Size',
          value_id: 29,
          value_label: 'L',
        },
      ],
    },
    {
      __typename: 'ConfigurableCartItem',
      id: '481',
      can_apply_msrp: false,
      formatted_price: '<span class="price">$108.00</span>',
      product_configuration_options: [
        { __typename: 'ProductOptions', product: null },
        { __typename: 'ProductOptions', product: null },
      ],
      product: {
        __typename: 'ConfigurableProduct',
        id: 1144,
        name: 'Selena Pants',
        url_key: 'selena-pants',
        url_suffix: '.html',
        is_visible_in_site_visibility: true,
        sku: 'VP01',
        product_has_url: true,
        image: {
          __typename: 'ProductImage',
          url:
            'https://master-7rqtwti-5k2ulbou6q5ti.us-4.magentosite.cloud/media/catalog/product/cache/18e351d3d205c0264ac03dce60b9880e/v/p/vp01-ll_main_4.jpg',
        },
        thumbnail: {
          __typename: 'ProductImage',
          url:
            'https://master-7rqtwti-5k2ulbou6q5ti.us-4.magentosite.cloud/media/catalog/product/cache/18e351d3d205c0264ac03dce60b9880e/v/p/vp01-ll_main_4.jpg',
          label: 'Main',
        },
      },
      prices: {
        __typename: 'CartItemPrices',
        price: { __typename: 'Money', currency: 'USD', value: 108 },
      },
      quantity: 1,
      configurable_options: [
        {
          __typename: 'SelectedConfigurableOption',
          id: 180,
          option_label: 'Fashion Color',
          value_id: 25,
          value_label: 'Mint',
        },
        {
          __typename: 'SelectedConfigurableOption',
          id: 183,
          option_label: 'Fashion Size',
          value_id: 30,
          value_label: 'M',
        },
      ],
    },
  ],
};

export const fetchedRecs = {
  data: {
    totalResults: 2,
    results: [
      {
        unitId: 'a0ed8163-f9eb-4395-bba8-0d628c34ca1d',
        unitName: 'HMPGTRND',
        unitType: 'primary',
        searchTime: 3,
        totalProducts: 20,
        primaryProducts: 0,
        backupProducts: 20,
        products: [
          {
            rank: 1,
            score: 1.5,
            sku: 'WSH04',
            name: 'Artemis Running Short',
            productId: 1973,
            shortDescription: null,
            type: 'configurable',
            visibility: 'Catalog, Search',
            categories: ['women/bottoms-women/shorts-women'],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh04-black_main_9.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh04-black_main_9.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh04-black_main_9.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/artemis-running-short.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 45.0,
                regular: 45.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 45.0,
                regular: 45.0,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
          {
            rank: 2,
            score: 1.5,
            sku: 'WSH03',
            name: 'Gwen Drawstring Bike Short',
            productId: 1957,
            shortDescription: null,
            type: 'configurable',
            visibility: 'Catalog, Search',
            categories: [
              '',
              'collections/yoga-new',
              'women/bottoms-women/shorts-women',
              'collections/performance-fabrics',
            ],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh03-gray_main_18.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh03-gray_main_18.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh03-gray_main_18.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/gwen-drawstring-bike-short.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 50.0,
                regular: 50.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 50.0,
                regular: 50.0,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
          {
            rank: 3,
            score: 1.5,
            sku: 'WSH10',
            name: 'Ana Running Short',
            productId: 2023,
            shortDescription: null,
            type: 'configurable',
            visibility: 'Catalog, Search',
            categories: [
              '',
              'women/bottoms-women/shorts-women',
              'collections/eco-friendly',
            ],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh10-black_main_9.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh10-black_main_9.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh10-black_main_9.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/ana-running-short.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 40.0,
                regular: 40.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 40.0,
                regular: 40.0,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
          {
            rank: 4,
            score: 1.5,
            sku: 'WSH08',
            name: 'Sybil Running Short',
            productId: 2009,
            shortDescription: null,
            type: 'configurable',
            visibility: 'Catalog, Search',
            categories: [
              '',
              'women/bottoms-women/shorts-women',
              'collections/performance-fabrics',
            ],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh08-purple_main_9.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh08-purple_main_9.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh08-purple_main_9.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/sybil-running-short.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 44.0,
                regular: 44.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 44.0,
                regular: 44.0,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
          {
            rank: 5,
            score: 1.5,
            sku: 'WSH06',
            name: 'Angel Light Running Short',
            productId: 1996,
            shortDescription: null,
            type: 'configurable',
            visibility: 'Catalog, Search',
            categories: ['women/bottoms-women/shorts-women'],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh06-gray_main_9.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh06-gray_main_9.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh06-gray_main_9.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/angel-light-running-short.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 42.0,
                regular: 42.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 42.0,
                regular: 42.0,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
          {
            rank: 6,
            score: 1.5,
            sku: 'WSH09',
            name: 'Mimi All-Purpose Short',
            productId: 2016,
            shortDescription: null,
            type: 'configurable',
            visibility: 'Catalog, Search',
            categories: ['women/bottoms-women/shorts-women'],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh09-gray_main_9.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh09-gray_main_9.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh09-gray_main_9.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/mimi-all-purpose-short.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 44.0,
                regular: 44.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 44.0,
                regular: 44.0,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
          {
            rank: 7,
            score: 1.5,
            sku: 'WSH12',
            name: 'Erika Running Short',
            productId: 2046,
            shortDescription: null,
            type: 'configurable',
            visibility: 'Catalog, Search',
            categories: [
              '',
              'women/bottoms-women/shorts-women',
              'collections/erin-recommends',
            ],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh12-green_main_9.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh12-green_main_9.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh12-green_main_9.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/erika-running-short.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 45.0,
                regular: 45.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 45.0,
                regular: 45.0,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
          {
            rank: 8,
            score: 1.5,
            sku: 'WSH11',
            name: 'Ina Compression Short',
            productId: 2030,
            shortDescription: null,
            type: 'configurable',
            visibility: 'Catalog, Search',
            categories: [
              '',
              'women/bottoms-women/shorts-women',
              'collections/erin-recommends',
            ],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh11-blue_main_9.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh11-blue_main_9.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh11-blue_main_9.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/ina-compression-short.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 49.0,
                regular: 49.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 49.0,
                regular: 49.0,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
          {
            rank: 9,
            score: 1.5,
            sku: 'WSH07',
            name: 'Echo Fit Compression Short',
            productId: 2003,
            shortDescription: null,
            type: 'configurable',
            visibility: 'Catalog, Search',
            categories: [
              '',
              'collections/yoga-new',
              'women/bottoms-women/shorts-women',
            ],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh07-black_main_9.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh07-black_main_9.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/s/wsh07-black_main_9.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/echo-fit-compression-short.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 24.0,
                regular: 24.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 24.0,
                regular: 24.0,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
          {
            rank: 10,
            score: 1.5,
            sku: 'WT03',
            name: 'Nora Practice Tank',
            productId: 1722,
            shortDescription: null,
            type: 'configurable',
            visibility: 'Catalog, Search',
            categories: [
              '',
              'collections/yoga-new',
              'women/tops-women/tanks-women',
              'collections/erin-recommends',
            ],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt03-red_main_9.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt03-red_main_9.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt03-red_main_9.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/nora-practice-tank.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 39.0,
                regular: 39.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 39.0,
                regular: 39.0,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
          {
            rank: 11,
            score: 1.5,
            sku: 'WT01',
            name: 'Bella Tank',
            productId: 1690,
            shortDescription: null,
            type: 'configurable',
            visibility: 'Catalog, Search',
            categories: [
              '',
              'women/tops-women/tanks-women',
              'collections/eco-friendly',
            ],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt01-blue_main_9.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt01-blue_main_9.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt01-blue_main_9.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/bella-tank.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 29.0,
                regular: 29.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 29.0,
                regular: 29.0,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
          {
            rank: 12,
            score: 1.5,
            sku: 'WT02',
            name: 'Zoe Tank',
            productId: 1706,
            shortDescription: null,
            type: 'configurable',
            visibility: 'Catalog, Search',
            categories: ['women/tops-women/tanks-women'],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt02-orange_main_9.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt02-orange_main_9.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt02-orange_main_9.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/zoe-tank.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 29.0,
                regular: 29.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 29.0,
                regular: 29.0,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
          {
            rank: 13,
            score: 1.5,
            sku: 'WT07',
            name: 'Maya Tunic',
            productId: 1786,
            shortDescription: null,
            type: 'configurable',
            visibility: 'Catalog, Search',
            categories: [
              '',
              'women/tops-women/tanks-women',
              'collections/performance-fabrics',
            ],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt07-green_main_9.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt07-green_main_9.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt07-green_main_9.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/maya-tunic.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 29.0,
                regular: 29.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 29.0,
                regular: 29.0,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
          {
            rank: 14,
            score: 1.5,
            sku: 'WT05',
            name: 'Leah Yoga Top',
            productId: 1754,
            shortDescription: null,
            type: 'configurable',
            visibility: 'Catalog, Search',
            categories: [
              '',
              'women/tops-women/tanks-women',
              'collections/erin-recommends',
            ],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt05-purple_main_18.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt05-purple_main_18.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt05-purple_main_18.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/leah-yoga-top.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 39.0,
                regular: 39.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 39.0,
                regular: 39.0,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
          {
            rank: 15,
            score: 1.5,
            sku: 'WT04',
            name: 'Nona Fitness Tank',
            productId: 1738,
            shortDescription: null,
            type: 'configurable',
            visibility: 'Catalog, Search',
            categories: [
              '',
              'women/tops-women/tanks-women',
              'collections/performance-fabrics',
            ],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt04-blue_main_9.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt04-blue_main_9.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt04-blue_main_9.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/nona-fitness-tank.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 39.0,
                regular: 39.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 39.0,
                regular: 39.0,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
          {
            rank: 16,
            score: 1.5,
            sku: 'WT09',
            name: 'Breathe-Easy Tank',
            productId: 1818,
            shortDescription: null,
            type: 'configurable',
            visibility: 'Catalog, Search',
            categories: [
              '',
              'women/tops-women/tanks-women',
              'promotions/women-sale',
              'collections/erin-recommends',
            ],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt09-white_main_9.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt09-white_main_9.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt09-white_main_9.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/breathe-easy-tank.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 34.0,
                regular: 34.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 34.0,
                regular: 34.0,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
          {
            rank: 17,
            score: 1.5,
            sku: 'WT06',
            name: 'Chloe Compete Tank',
            productId: 1770,
            shortDescription: null,
            type: 'configurable',
            visibility: 'Catalog, Search',
            categories: ['women/tops-women/tanks-women'],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt06-blue_main_9.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt06-blue_main_9.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt06-blue_main_9.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/chloe-compete-tank.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 39.0,
                regular: 39.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 39.0,
                regular: 39.0,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
          {
            rank: 18,
            score: 1.5,
            sku: 'WT08',
            name: 'Antonia Racer Tank',
            productId: 1802,
            shortDescription: null,
            type: 'configurable',
            visibility: 'Catalog, Search',
            categories: [
              '',
              'women/tops-women/tanks-women',
              'promotions/women-sale',
              'collections/performance-fabrics',
            ],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt08-black_main_9.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt08-black_main_9.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/t/wt08-black_main_9.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/antonia-racer-tank.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 34.0,
                regular: 34.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 34.0,
                regular: 34.0,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
          {
            rank: 19,
            score: 1.5,
            sku: 'space sku tst three',
            name: 'space sku tst three',
            productId: 2052,
            shortDescription: null,
            type: 'simple',
            visibility: 'Catalog, Search',
            categories: [
              '',
              'gear',
              'collections',
              'training',
              'men',
              'women',
              'promotions',
              'gift-cards',
              'sale',
              'what-is-new',
              'what-is-new/qa',
            ],
            weight: 7.0,
            weightType: null,
            currency: 'USD',
            image: null,
            smallImage: null,
            thumbnailImage: null,
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/space-sku-tst-three.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 12.22,
                regular: 12.22,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 12.22,
                regular: 12.22,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
          {
            rank: 20,
            score: 1.5,
            sku: 'space sku tst two',
            name: 'space sku tst two',
            productId: 2051,
            shortDescription: null,
            type: 'simple',
            visibility: 'Catalog, Search',
            categories: [
              '',
              'gear',
              'collections',
              'training',
              'men',
              'women',
              'promotions',
              'gift-cards',
              'sale',
              'what-is-new',
              'what-is-new/qa',
            ],
            weight: 7.0,
            weightType: null,
            currency: 'USD',
            image: null,
            smallImage: null,
            thumbnailImage: null,
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/space-sku-tst-two.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 33.12,
                regular: 33.12,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 33.12,
                regular: 33.12,
                regularAdjustments: [],
              },
            },
            queryType: 'backup',
          },
        ],
        pageType: 'CMS',
        typeId: 'trending',
        storefrontLabel: 'HMPGTRND',
        pagePlacement: 'below-main-content',
        displayNumber: 20,
        displayOrder: 4,
      },
      {
        unitId: 'f11e5d0a-921c-4637-8e0b-f639642e03e9',
        unitName: 'HMPGMP',
        unitType: 'primary',
        searchTime: 22,
        totalProducts: 20,
        primaryProducts: 20,
        backupProducts: 0,
        products: [
          {
            rank: 1,
            score: 1.5,
            sku: 'space sku tst grp',
            name: 'space sku tst grp',
            productId: 2053,
            shortDescription: null,
            type: 'grouped',
            visibility: 'Catalog, Search',
            categories: [
              '',
              'gear',
              'collections',
              'training',
              'men',
              'women',
              'promotions',
              'gift-cards',
              'sale',
              'what-is-new',
              'what-is-new/qa',
            ],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: null,
            smallImage: null,
            thumbnailImage: null,
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/space-sku-tst-grp.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 44.0,
                regular: 44.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 0.0,
                regular: 0.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
          {
            rank: 2,
            score: 1.5,
            sku: 'space sku tst one',
            name: 'space sku tst one',
            productId: 2050,
            shortDescription: null,
            type: 'simple',
            visibility: 'Catalog, Search',
            categories: [
              '',
              'gear',
              'collections',
              'training',
              'men',
              'women',
              'promotions',
              'gift-cards',
              'sale',
              'what-is-new',
              'what-is-new/qa',
            ],
            weight: 1.0,
            weightType: null,
            currency: 'USD',
            image: null,
            smallImage: null,
            thumbnailImage: null,
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/space-sku-tst-one.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 44.0,
                regular: 44.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 44.0,
                regular: 44.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
          {
            rank: 3,
            score: 1.5,
            sku: '24-UG04',
            name: 'Zing Jump Rope',
            productId: 17,
            shortDescription: null,
            type: 'simple',
            visibility: 'Catalog, Search',
            categories: ['gear', 'gear/fitness-equipment'],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/u/g/ug04-bk-0.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/u/g/ug04-bk-0.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/u/g/ug04-bk-0.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/zing-jump-rope.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 12.0,
                regular: 12.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 12.0,
                regular: 12.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
          {
            rank: 4,
            score: 1.5,
            sku: '24-MG01',
            name: 'Endurance Watch',
            productId: 37,
            shortDescription: null,
            type: 'simple',
            visibility: 'Catalog, Search',
            categories: ['gear', 'gear/watches'],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/m/g/mg01-bk-0.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/m/g/mg01-bk-0.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/m/g/mg01-bk-0.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/endurance-watch.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 49.0,
                regular: 49.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 49.0,
                regular: 49.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
          {
            rank: 5,
            score: 1.5,
            sku: '24-MG02',
            name: 'Dash Digital Watch',
            productId: 40,
            shortDescription: null,
            type: 'simple',
            visibility: 'Catalog, Search',
            categories: [
              'gear',
              'gear/watches',
              'collections',
              'collections/yoga-new',
            ],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/m/g/mg02-bk-0.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/m/g/mg02-bk-0.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/m/g/mg02-bk-0.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/dash-digital-watch.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 92.0,
                regular: 92.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 92.0,
                regular: 92.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
          {
            rank: 6,
            score: 1.5,
            sku: '240-LV04',
            name: "Beginner's Yoga",
            productId: 45,
            shortDescription:
              "The most difficult yoga poses to master are the ones learned incorrectly as a beginner. Luma's Beginner's Yoga is a fantastic way to break into your initial yoga session and begin the journey to a longer, leaner, healthier body. Confidently find your way into yoga with this effective yet gentle program. You'll learn proper alignment and how to sidestep common mistakes.",
            type: 'downloadable',
            visibility: 'Catalog, Search',
            categories: ['training', 'training/training-video'],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/l/t/lt01.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/l/t/lt01.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/l/t/lt01.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/beginner-s-yoga.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 6.0,
                regular: 6.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 6.0,
                regular: 6.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
          {
            rank: 7,
            score: 1.5,
            sku: '24-MG05',
            name: 'Cruise Dual Analog Watch',
            productId: 39,
            shortDescription: null,
            type: 'simple',
            visibility: 'Catalog, Search',
            categories: [
              'gear',
              'gear/watches',
              'collections',
              'collections/yoga-new',
            ],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/m/g/mg05-br-0.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/m/g/mg05-br-0.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/m/g/mg05-br-0.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/cruise-dual-analog-watch.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 55.0,
                regular: 55.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 55.0,
                regular: 55.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
          {
            rank: 8,
            score: 1.5,
            sku: '24-WB06',
            name: 'Endeavor Daytrip Backpack',
            productId: 11,
            shortDescription: null,
            type: 'simple',
            visibility: 'Catalog, Search',
            categories: ['gear', 'gear/bags', 'collections'],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: 'Image',
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/b/wb06-red-0.jpg',
            },
            smallImage: {
              label: 'Image',
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/b/wb06-red-0.jpg',
            },
            thumbnailImage: {
              label: 'Image',
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/b/wb06-red-0.jpg',
            },
            swatchImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/productno_selection',
            },
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/endeavor-daytrip-backpack.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 33.0,
                regular: 33.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 33.0,
                regular: 33.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
          {
            rank: 9,
            score: 1.5,
            sku: '240-LV07',
            name: 'Solo Power Circuit',
            productId: 48,
            shortDescription:
              "Many contemporary exercise trends sacrifice form and precision in favor of reps and \"PR\" goals. Luma's Solo Power Circuit teaches techniques to keep you safe. But don't think you'll get off easily: when it comes to building muscle and burning fat, these routines won't disappoint. A fusion of circuit training, yoga, Pilates and running, Solo Power Circuit brings out your sweatiest best.",
            type: 'downloadable',
            visibility: 'Catalog, Search',
            categories: ['training', 'training/training-video'],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/l/t/lt04.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/l/t/lt04.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/l/t/lt04.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/solo-power-circuit.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 14.0,
                regular: 14.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 14.0,
                regular: 14.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
          {
            rank: 10,
            score: 1.5,
            sku: '24-MB06',
            name: 'Rival Field Messenger',
            productId: 5,
            shortDescription: null,
            type: 'simple',
            visibility: 'Catalog, Search',
            categories: [
              'gear',
              'gear/bags',
              'collections',
              'collections/yoga-new',
            ],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/m/b/mb06-gray-0.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/m/b/mb06-gray-0.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/m/b/mb06-gray-0.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/rival-field-messenger.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 45.0,
                regular: 45.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 45.0,
                regular: 45.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
          {
            rank: 11,
            score: 1.5,
            sku: '24-UG02',
            name: 'Pursuit Lumaflex&trade; Tone Band',
            productId: 18,
            shortDescription: null,
            type: 'simple',
            visibility: 'Catalog, Search',
            categories: ['gear', 'gear/fitness-equipment'],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/u/g/ug02-bk-0.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/u/g/ug02-bk-0.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/u/g/ug02-bk-0.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/pursuit-lumaflex-trade-tone-band.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 16.0,
                regular: 16.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 16.0,
                regular: 16.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
          {
            rank: 12,
            score: 1.5,
            sku: '240-LV09',
            name: 'Luma Yoga For Life',
            productId: 50,
            shortDescription:
              'Luma founder Erin Renny on yoga and longevity: "I won\'t promise you\'ll live longer with yoga. No one can promise that. But your life will be healthier, less stressful, and more physically in tune when you focus on connecting your mind and body or a regular basis. Yoga is my favorite way to express this connection. I want to share the secrets of lifelong yoga with anyone willing to breathe and learn with me."',
            type: 'downloadable',
            visibility: 'Catalog, Search',
            categories: ['training', 'training/training-video'],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/l/t/lt06.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/l/t/lt06.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/l/t/lt06.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/luma-yoga-for-life.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 27.0,
                regular: 27.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 0.0,
                regular: 0.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
          {
            rank: 13,
            score: 1.5,
            sku: '24-UB02',
            name: 'Impulse Duffle',
            productId: 7,
            shortDescription: null,
            type: 'simple',
            visibility: 'Catalog, Search',
            categories: ['gear', 'gear/bags'],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/u/b/ub02-black-0.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/u/b/ub02-black-0.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/u/b/ub02-black-0.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/impulse-duffle.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 74.0,
                regular: 74.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 74.0,
                regular: 74.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
          {
            rank: 14,
            score: 1.5,
            sku: '24-MG03',
            name: 'Summit Watch',
            productId: 38,
            shortDescription: null,
            type: 'simple',
            visibility: 'Catalog, Search',
            categories: [
              'gear',
              'gear/watches',
              'collections',
              'collections/yoga-new',
            ],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/m/g/mg03-br-0.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/m/g/mg03-br-0.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/m/g/mg03-br-0.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/summit-watch.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 54.0,
                regular: 54.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 54.0,
                regular: 54.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
          {
            rank: 15,
            score: 1.5,
            sku: '240-LV05',
            name: 'LifeLong Fitness IV',
            productId: 46,
            shortDescription:
              'The instructors and routines featured in LifeLong Fitness IV provide safe options to serve all types of physical conditions and abilities. Range of motion, body awareness and breathing practices are essential tools of yogic self-care, essential for maintaining alertness, health, and dignity over a lifetime. The LifeLong Fitness series acknowledges that as we age, the safety and sustainability of our exercise become as important as pushing our limits.',
            type: 'downloadable',
            visibility: 'Catalog, Search',
            categories: ['training', 'training/training-video'],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/l/t/lt02.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/l/t/lt02.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/l/t/lt02.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/lifelong-fitness-iv.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 14.0,
                regular: 14.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 14.0,
                regular: 14.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
          {
            rank: 16,
            score: 1.5,
            sku: '24-WB05',
            name: 'Savvy Shoulder Tote',
            productId: 10,
            shortDescription: null,
            type: 'simple',
            visibility: 'Catalog, Search',
            categories: ['gear', 'gear/bags', 'collections'],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: 'Image',
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/b/wb05-red-0.jpg',
            },
            smallImage: {
              label: 'Image',
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/b/wb05-red-0.jpg',
            },
            thumbnailImage: {
              label: 'Image',
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/b/wb05-red-0.jpg',
            },
            swatchImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/productno_selection',
            },
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/savvy-shoulder-tote.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 24.0,
                regular: 24.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 24.0,
                regular: 32.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
          {
            rank: 17,
            score: 1.5,
            sku: '24-MB03',
            name: 'Crown Summit Backpack',
            productId: 3,
            shortDescription: null,
            type: 'simple',
            visibility: 'Catalog, Search',
            categories: ['gear', 'gear/bags'],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/m/b/mb03-black-0.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/m/b/mb03-black-0.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/m/b/mb03-black-0.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/crown-summit-backpack.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 38.0,
                regular: 38.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 38.0,
                regular: 38.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
          {
            rank: 18,
            score: 1.5,
            sku: '24-WG09',
            name: 'Luma Analog Watch',
            productId: 41,
            shortDescription: null,
            type: 'simple',
            visibility: 'Catalog, Search',
            categories: ['gear', 'gear/watches'],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: 'Image',
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/g/wg09-gr-0.jpg',
            },
            smallImage: {
              label: 'Image',
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/g/wg09-gr-0.jpg',
            },
            thumbnailImage: {
              label: 'Image',
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/g/wg09-gr-0.jpg',
            },
            swatchImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/productno_selection',
            },
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/luma-analog-watch.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 43.0,
                regular: 43.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 43.0,
                regular: 43.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
          {
            rank: 19,
            score: 1.5,
            sku: '24-WG01',
            name: 'Bolo Sport Watch',
            productId: 42,
            shortDescription: null,
            type: 'simple',
            visibility: 'Catalog, Search',
            categories: ['gear', 'gear/watches'],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: 'Image',
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/g/wg01-bk-0.jpg',
            },
            smallImage: {
              label: 'Image',
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/g/wg01-bk-0.jpg',
            },
            thumbnailImage: {
              label: 'Image',
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/w/g/wg01-bk-0.jpg',
            },
            swatchImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/productno_selection',
            },
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/bolo-sport-watch.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 49.0,
                regular: 49.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 49.0,
                regular: 49.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
          {
            rank: 20,
            score: 1.5,
            sku: '24-WG085_Group',
            name: 'Set of Sprite Yoga Straps',
            productId: 51,
            shortDescription: null,
            type: 'grouped',
            visibility: 'Catalog, Search',
            categories: ['gear', 'gear/fitness-equipment'],
            weight: 0.0,
            weightType: null,
            currency: 'USD',
            image: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/l/u/luma-yoga-strap-set.jpg',
            },
            smallImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/l/u/luma-yoga-strap-set.jpg',
            },
            thumbnailImage: {
              label: null,
              url:
                '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/media/catalog/product/l/u/luma-yoga-strap-set.jpg',
            },
            swatchImage: null,
            url:
              '//qa-h47ppbq-zt26wbqlr67wy.us-4.magentosite.cloud/set-of-sprite-yoga-straps.html',
            prices: {
              maximum: {
                finalAdjustments: [],
                final: 21.0,
                regular: 21.0,
                regularAdjustments: [],
              },
              minimum: {
                finalAdjustments: [],
                final: 0.0,
                regular: 0.0,
                regularAdjustments: [],
              },
            },
            queryType: 'primary',
          },
        ],
        pageType: 'CMS',
        typeId: 'most-purchased',
        storefrontLabel: 'HMPGMP',
        pagePlacement: 'below-main-content',
        displayNumber: 20,
        displayOrder: 1,
      },
    ],
  },
};
export const sampleGraphQLProduct = {
  __typename: 'ConfigurableProduct',
  id: 1144,
  categories: [
    {
      __typename: 'CategoryTree',
      id: 12,
      breadcrumbs: [{ __typename: 'Breadcrumb', category_id: 11 }],
    },
  ],
  description:
    '<p>The Selena Pants are one of the more form-fitting pieces in the Venia collection. But don\'t be fooled by their appearance. These gems are made with soft pima cotton and just the right amount of stretch.</p><p>Features:</p><ul><li>Cotton waistband</li><li>Drawstring waist</li><li>Sits just below waist</li><li>31" inseam</li><li>Machine wash, line dry</li></ul>',
  media_gallery_entries: [
    {
      __typename: 'MediaGalleryEntry',
      id: 1238,
      label: 'Main',
      position: 1,
      disabled: false,
      file: '/v/p/vp01-ll_main_4.jpg',
    },
  ],
  meta_description:
    "The Selena Pants are one of the more form-fitting pieces in the Venia collection. But don't be fooled by their appearance. These gems are made with soft pima cotton and just the right amount of stretch. Features: Cotton waistband. Drawstring waist. Sits ",
  name: 'Selena Pants',
  price: {
    __typename: 'ProductPrices',
    regularPrice: {
      __typename: 'Price',
      amount: { __typename: 'Money', currency: 'USD', value: 108 },
    },
  },
  sku: 'VP01',
  small_image:
    'https://master-7rqtwti-5k2ulbou6q5ti.us-4.magentosite.cloud/media/catalog/product/cache/18e351d3d205c0264ac03dce60b9880e/v/p/vp01-ll_main_4.jpg',
  url_key: 'selena-pants',
  configurable_options: [
    {
      __typename: 'ConfigurableProductOptions',
      attribute_code: 'fashion_color',
      attribute_id: '180',
      id: 96,
      label: 'Fashion Color',
      values: [
        {
          __typename: 'ConfigurableProductOptionsValues',
          default_label: 'Lilac',
          label: 'Lilac',
          store_label: 'Lilac',
          use_default_value: true,
          value_index: 23,
          swatch_data: { __typename: 'ColorSwatchData', value: '#dcd5e1' },
        },
      ],
    },
    {
      __typename: 'ConfigurableProductOptions',
      attribute_code: 'fashion_size',
      attribute_id: '183',
      id: 97,
      label: 'Fashion Size',
      values: [
        {
          __typename: 'ConfigurableProductOptionsValues',
          default_label: 'L',
          label: 'L',
          store_label: 'L',
          use_default_value: true,
          value_index: 29,
          swatch_data: { __typename: 'TextSwatchData', value: 'L' },
        },
      ],
    },
  ],
  variants: [
    {
      __typename: 'ConfigurableVariant',
      attributes: [
        {
          __typename: 'ConfigurableAttributeOption',
          code: 'fashion_color',
          value_index: 27,
        },
        {
          __typename: 'ConfigurableAttributeOption',
          code: 'fashion_size',
          value_index: 31,
        },
      ],
      product: {
        __typename: 'SimpleProduct',
        id: 794,
        media_gallery_entries: [
          {
            __typename: 'MediaGalleryEntry',
            id: 804,
            disabled: false,
            file: '/v/p/vp01-la_main_2.jpg',
            label: 'Main',
            position: 1,
          },
        ],
        sku: 'VP01-LA-S',
        stock_status: 'IN_STOCK',
        price: {
          __typename: 'ProductPrices',
          regularPrice: {
            __typename: 'Price',
            amount: { __typename: 'Money', currency: 'USD', value: 108 },
          },
        },
      },
    },
  ],
};
