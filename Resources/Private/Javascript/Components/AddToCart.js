import { useApiClient } from '../Api/Context';

const addToCartOnClick = ({ proxy, productId }) => {
  const apiClient = useApiClient();

  proxy.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await apiClient.addProductToCart(productId);

    document.dispatchEvent(new CustomEvent('add-to-cart', {
      detail: {
        element: proxy,
        message: result
      }
    }));
    document.dispatchEvent(new Event('cart-changed'));
  });

  return [];
};

export default addToCartOnClick;
