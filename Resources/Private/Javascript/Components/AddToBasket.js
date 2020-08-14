const addToBasketOnClick = ({proxy, productId}) => {
  proxy.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('clicked');
  });
  console.log(connector);
  return [];
};

export default addToBasketOnClick;
