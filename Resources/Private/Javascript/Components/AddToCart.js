import { useApiClient } from '../Api/Context';

const addToCartOnClick = ({ proxy, productId }) => {
  const apiClient = useApiClient();

  proxy.addEventListener('click', async (event) => {
    event.preventDefault();
    proxy.classList.add('u-loading');
    await apiClient.addProductToCart(productId);
    proxy.classList.remove('u-loading');
  });

  return [];
};

export default addToCartOnClick;
