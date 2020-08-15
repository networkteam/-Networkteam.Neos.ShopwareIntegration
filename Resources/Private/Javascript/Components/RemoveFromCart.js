import { useApiClient } from '../Api/Context';

const removeFromCartOnClick = ({ proxy, lineItemId }) => {
  const apiClient = useApiClient();

  proxy.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await apiClient.removeLineItemFromCart(lineItemId);

    proxy.dispatchEvent(new CustomEvent('remove-from-cart', {
      detail: {
        message: result
      }
    }));
  });

  return [];
};

export default removeFromCartOnClick;
