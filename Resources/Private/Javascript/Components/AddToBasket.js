import { useApiClient } from '../Api/Context';

const addToBasketOnClick = ({ proxy, productId }) => {
  const apiClient = useApiClient();

  proxy.addEventListener('click', async (event) => {
    event.preventDefault();
    proxy.classList.add('loading');
    const result = await apiClient.addProductToCart(productId);
    console.log(result);
    proxy.classList.remove('loading');
  });

  return [];
};

export default addToBasketOnClick;
