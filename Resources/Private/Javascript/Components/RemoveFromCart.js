import { useApiClient } from '../Api/Context';

const removeFromCartOnClick = ({ proxy, lineItemId }) => {
  const apiClient = useApiClient();

  proxy.addEventListener('click', async (event) => {
    event.preventDefault();
    apiClient.removeLineItemFromCart(lineItemId);
  });

  return [];
};

export default removeFromCartOnClick;
