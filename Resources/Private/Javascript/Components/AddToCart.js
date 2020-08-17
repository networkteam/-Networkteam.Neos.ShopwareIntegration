import { useApiClient } from '../Api/Context';

const addToCartOnClick = ({ proxy, productId }) => {
  const apiClient = useApiClient();

  proxy.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await apiClient.addProductToCart(productId);

    document.dispatchEvent(new CustomEvent('added-to-cart', {
      detail: {
        message: result
      }
    }));
  });

  return [];
};

export default addToCartOnClick;
