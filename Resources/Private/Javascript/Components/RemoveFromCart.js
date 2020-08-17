import { useApiClient } from '../Api/Context';

const removeFromCartOnClick = ({ proxy, lineItemId }) => {
  const apiClient = useApiClient();

  proxy.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await apiClient.removeLineItemFromCart(lineItemId);

    document.dispatchEvent(new CustomEvent('removed-from-cart', {
      detail: {
        message: result
      }
    }));
  });

  return [];
};

export default removeFromCartOnClick;
