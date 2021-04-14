import processGraphQLResponse from '../../lib/collector/util/processGraphQLResponse';
import { sampleGraphQLCart } from '../mocks';

test('simple object', () => {
  const obj = {
    __typename: 'Cart',
    id: '4yG9W7GyEUB5z1Sovd9Htf2IlmdoArVn',
    total_quantity: 4,
  };

  const processedResponse = processGraphQLResponse(obj);
  expect(JSON.stringify(processedResponse)).toEqual(
    '{"id":"4yG9W7GyEUB5z1Sovd9Htf2IlmdoArVn","totalQuantity":4}',
  );
});

test('nested object', () => {
  const obj = {
    __typename: 'Cart',
    id: '4yG9W7GyEUB5z1Sovd9Htf2IlmdoArVn',
    total_quantity: 4,
    product: {
      __typename: 'ConfigurableProduct',
      image: {
        __typename: 'ProductImage',
        url_link: 'url',
      },
    },
  };
  const processedResponse = processGraphQLResponse(obj);
  expect(JSON.stringify(processedResponse)).toEqual(
    '{"id":"4yG9W7GyEUB5z1Sovd9Htf2IlmdoArVn","totalQuantity":4,"product":{"image":{"urlLink":"url"}}}',
  );
});

test('object with arrays', () => {
  const obj = {
    __typename: 'Cart',
    id: '4yG9W7GyEUB5z1Sovd9Htf2IlmdoArVn',
    total_quantity: 4,
    product: [
      {
        __typename: 'ConfigurableProduct',
        image: {
          __typename: 'ProductImage',
          url_link: 'url',
        },
      },
      {
        __typename: 'ConfigurableProduct',
        image: {
          __typename: 'ProductImage',
          url_link: 'url',
        },
      },
    ],
  };
  const processedResponse = processGraphQLResponse(obj);
  expect(JSON.stringify(processedResponse)).toEqual(
    '{"id":"4yG9W7GyEUB5z1Sovd9Htf2IlmdoArVn","totalQuantity":4,"product":[{"image":{"urlLink":"url"}},{"image":{"urlLink":"url"}}]}',
  );
});

test('keeps typename', () => {
  const obj = {
    __typename: 'Cart',
    id: '4yG9W7GyEUB5z1Sovd9Htf2IlmdoArVn',
    total_quantity: 4,
  };

  const processedResponse = processGraphQLResponse(obj, true);
  expect(JSON.stringify(processedResponse)).toEqual(
    '{"__typename":"Cart","id":"4yG9W7GyEUB5z1Sovd9Htf2IlmdoArVn","totalQuantity":4}',
  );
});

test('magento cart', () => {
  const processedResponse = processGraphQLResponse(sampleGraphQLCart);
  expect(JSON.stringify(processedResponse)).toEqual(
    '{"id":"4yG9W7GyEUB5z1Sovd9Htf2IlmdoArVn","totalQuantity":4,"prices":{"subtotalExcludingTax":{"value":432},"subtotalIncludingTax":{"value":432}},"items":[{"id":"477","canApplyMsrp":false,"formattedPrice":"<span class=\\"price\\">$108.00</span>","productConfigurationOptions":[{"product":null},{"product":null}],"product":{"id":1144,"name":"Selena Pants","urlKey":"selena-pants","urlSuffix":".html","isVisibleInSiteVisibility":true,"sku":"VP01","productHasUrl":true,"image":{"url":"https://master-7rqtwti-5k2ulbou6q5ti.us-4.magentosite.cloud/media/catalog/product/cache/18e351d3d205c0264ac03dce60b9880e/v/p/vp01-ll_main_4.jpg"},"thumbnail":{"url":"https://master-7rqtwti-5k2ulbou6q5ti.us-4.magentosite.cloud/media/catalog/product/cache/18e351d3d205c0264ac03dce60b9880e/v/p/vp01-ll_main_4.jpg","label":"Main"}},"prices":{"price":{"currency":"USD","value":108}},"quantity":1,"configurableOptions":[{"id":180,"optionLabel":"Fashion Color","valueId":23,"valueLabel":"Lilac"},{"id":183,"optionLabel":"Fashion Size","valueId":30,"valueLabel":"M"}]},{"id":"479","canApplyMsrp":false,"formattedPrice":"<span class=\\"price\\">$108.00</span>","productConfigurationOptions":[{"product":null},{"product":null}],"product":{"id":1144,"name":"Selena Pants","urlKey":"selena-pants","urlSuffix":".html","isVisibleInSiteVisibility":true,"sku":"VP01","productHasUrl":true,"image":{"url":"https://master-7rqtwti-5k2ulbou6q5ti.us-4.magentosite.cloud/media/catalog/product/cache/18e351d3d205c0264ac03dce60b9880e/v/p/vp01-ll_main_4.jpg"},"thumbnail":{"url":"https://master-7rqtwti-5k2ulbou6q5ti.us-4.magentosite.cloud/media/catalog/product/cache/18e351d3d205c0264ac03dce60b9880e/v/p/vp01-ll_main_4.jpg","label":"Main"}},"prices":{"price":{"currency":"USD","value":108}},"quantity":2,"configurableOptions":[{"id":180,"optionLabel":"Fashion Color","valueId":23,"valueLabel":"Lilac"},{"id":183,"optionLabel":"Fashion Size","valueId":29,"valueLabel":"L"}]},{"id":"481","canApplyMsrp":false,"formattedPrice":"<span class=\\"price\\">$108.00</span>","productConfigurationOptions":[{"product":null},{"product":null}],"product":{"id":1144,"name":"Selena Pants","urlKey":"selena-pants","urlSuffix":".html","isVisibleInSiteVisibility":true,"sku":"VP01","productHasUrl":true,"image":{"url":"https://master-7rqtwti-5k2ulbou6q5ti.us-4.magentosite.cloud/media/catalog/product/cache/18e351d3d205c0264ac03dce60b9880e/v/p/vp01-ll_main_4.jpg"},"thumbnail":{"url":"https://master-7rqtwti-5k2ulbou6q5ti.us-4.magentosite.cloud/media/catalog/product/cache/18e351d3d205c0264ac03dce60b9880e/v/p/vp01-ll_main_4.jpg","label":"Main"}},"prices":{"price":{"currency":"USD","value":108}},"quantity":1,"configurableOptions":[{"id":180,"optionLabel":"Fashion Color","valueId":25,"valueLabel":"Mint"},{"id":183,"optionLabel":"Fashion Size","valueId":30,"valueLabel":"M"}]}]}',
  );
});
