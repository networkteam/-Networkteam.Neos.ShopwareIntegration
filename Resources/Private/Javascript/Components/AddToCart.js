import { useApiClient } from '../Api/Context';

const addToCartOnClick = ({ proxy, productId }) => {
  const apiClient = useApiClient();

  proxy.addEventListener('click', (event) => {
    event.preventDefault();
    apiClient.addProductToCart(productId);
  });

  return [];
};

export default addToCartOnClick;
