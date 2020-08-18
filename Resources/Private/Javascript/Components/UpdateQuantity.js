import { useApiClient } from '../Api/Context';
import { debounce } from '../Helper/utilities';

const updateQuantity = ({ proxy, lineItemId }) => {
  const apiClient = useApiClient();

  const update = debounce(async (value) => {
    const result = await apiClient.updateLineItemInCart(
      lineItemId,
      {
        quantity: parseInt(value)
      }
    );

    document.dispatchEvent(new CustomEvent('updating-line-item', {
      detail: {
        element: proxy,
        message: result
      }
    }));
    document.dispatchEvent(new Event('cart-changed'));
  }, 500);

  proxy.addEventListener('change', (event) => {
    event.preventDefault();
    update(proxy.value);
  });

  return [];
};

export default updateQuantity;
