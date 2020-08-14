import { useApiClient } from '../Api/Context';

const addToBasketOnClick = ({ proxy, productId }) => {
  const apiClient = useApiClient();

  proxy.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(productId);
    apiClient.addProductToCart(productId);
  });

  return [];
};

export default addToBasketOnClick;
