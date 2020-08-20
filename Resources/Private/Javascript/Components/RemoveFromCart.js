import { useApiClient } from '../Api/Context';

const removeFromCartOnClick = ({ proxy, lineItemId }) => {
  const apiClient = useApiClient();

  proxy.addEventListener('click', async (event) => {
    event.preventDefault();
    proxy.classList.add('u-loading');
    await apiClient.removeLineItemFromCart(lineItemId);
    proxy.classList.remove('u-loading');
  });

  return [];
};

export default removeFromCartOnClick;
