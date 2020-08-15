import { useApiClient } from '../Api/Context';

const removeFromCartOnClick = ({ proxy, lineItemId }) => {
  const apiClient = useApiClient();

  proxy.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await apiClient.removeLineItemFromCart(lineItemId);

    document.dispatchEvent(new CustomEvent('remove-from-cart', {
      detail: {
        element: proxy,
        message: result
      }
    }));
    document.dispatchEvent(new Event('cart-changed'));
  });

  return [];
};

export default removeFromCartOnClick;
