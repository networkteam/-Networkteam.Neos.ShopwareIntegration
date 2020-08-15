import { useApiClient } from '../Api/Context';
import { debounce } from '../Helper/utilities';

const updateQuantity = ({ proxy, lineItemId }) => {
  const apiClient = useApiClient();

  proxy.addEventListener('change', debounce(async (event) => {
    event.preventDefault();
    const result = await apiClient.updateLineItemInCart(
      lineItemId,
      {
        quantity: parseInt(proxy.value)
      }
    );

    document.dispatchEvent(new CustomEvent('update-line-item', {
      detail: {
        element: proxy,
        message: result
      }
    }));
    document.dispatchEvent(new Event('cart-changed'));
  }, 500));

  return [];
};

export default updateQuantity;
