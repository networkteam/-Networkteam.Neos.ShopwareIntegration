import { useApiClient } from '../Api/Context';

const addToCartOnClick = ({ proxy, productId }) => {
  const apiClient = useApiClient();

  proxy.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await apiClient.addProductToCart(productId);

    if(result.status == 200) {
      document.dispatchEvent(new Event('cart-changed'));
      document.dispatchEvent(new CustomEvent('added-to-cart', {
        detail: {
          element: proxy,
          message: result
        }
      }));
    }
  });

  return [];
};

export default addToCartOnClick;
