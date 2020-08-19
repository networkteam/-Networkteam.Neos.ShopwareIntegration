import { useApiClient } from '../Api/Context';

const removeFromCartOnClick = ({ proxy, lineItemId }) => {
  const apiClient = useApiClient();

  proxy.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await apiClient.removeLineItemFromCart(lineItemId);

    if(result === 'success') {
      document.dispatchEvent(new Event('cart-changed'));
      document.dispatchEvent(new CustomEvent('removed-from-cart', {
        detail: {
          element: proxy,
          message: result
        }
      }));
    }
  });

  return [];
};

export default removeFromCartOnClick;
