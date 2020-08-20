import { useApiClient } from '../Api/Context';
import { debounce } from '../Helper/utilities';

const updateQuantity = ({ proxy, lineItemId }) => {
  const apiClient = useApiClient();

  const update = debounce(async (value) => {
    proxy.classList.add('u-loading');
    await apiClient.updateLineItem(
      lineItemId,
      { quantity: parseInt(value) }
    );
    proxy.classList.remove('u-loading');
  }, 500);

  proxy.addEventListener('change', (event) => {
    event.preventDefault();
    update(proxy.value);
  });

  return [];
};

export default updateQuantity;
