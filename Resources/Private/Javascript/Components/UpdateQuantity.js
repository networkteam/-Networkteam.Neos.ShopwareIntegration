import { useApiClient } from '../Api/Context';
import { debounce } from '../Helper/utilities';

const updateQuantity = ({ proxy, lineItemId }) => {
  const apiClient = useApiClient();

  const update = debounce(async (value) => {
    apiClient.updateLineItem(
      lineItemId,
      { quantity: parseInt(value) }
    );
  }, 500);

  proxy.addEventListener('change', (event) => {
    event.preventDefault();
    update(proxy.value);
  });

  return [];
};

export default updateQuantity;
