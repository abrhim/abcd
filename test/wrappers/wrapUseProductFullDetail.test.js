import { renderHook } from '@testing-library/react-hooks';
import wrapUseProductFullDetail from '../../lib/collector/wrappers/wrapUseProductFullDetail';
import mse from '@adobe/magento-storefront-events-sdk';
import { sampleGraphQLProduct } from '../mocks';

test('both original function and wrapper functionality are run in the hook', () => {
  const functionToWrap = jest.fn();
  jest.spyOn(mse.context, 'setProduct');
  jest.spyOn(mse.publish, 'productPageView');
  jest.spyOn(mse.publish, 'productPageView');
  const props = { product: sampleGraphQLProduct };

  // assert baseline empty context
  expect(mse.context.getProduct()).toBeUndefined();

  const useProductFullDetail = wrapUseProductFullDetail(functionToWrap);
  const { unmount } = renderHook(() => useProductFullDetail(props));

  // Original hook gets called with props
  expect(functionToWrap).toHaveBeenCalledTimes(1);
  expect(functionToWrap).toHaveBeenCalledWith(props);

  // Handles product page view
  expect(mse.context.setProduct).toHaveBeenCalledTimes(1);
  expect(mse.publish.productPageView).toHaveBeenCalledTimes(1);
  expect(mse.context.getProduct().id).toEqual(sampleGraphQLProduct.id);

  // Cleans up product context on page view
  unmount();
  expect(mse.context.setProduct).toHaveBeenCalledTimes(2);
  expect(mse.context.getProduct()).toEqual({});
});
