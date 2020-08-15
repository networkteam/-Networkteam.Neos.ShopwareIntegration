import 'core-js';
import 'regenerator-runtime/runtime';
import ReactHabitat from 'react-habitat';
import ApiDomFactory from './Habitat/factory';
import AddToCart from './Components/AddToCart';
import RemoveFromCart from './Components/RemoveFromCart';
import CartItems from './Components/CartItems';
import CartSummary from './Components/CartSummary';
import Connector from 'shopware-connector';

class App extends ReactHabitat.Bootstrapper {
  constructor() {
    super();
    const configJson = document.querySelector(
      'script#shopware-connector-config'
    )?.innerHTML;

    const client = new Connector(JSON.parse(configJson));
    const builder = new ReactHabitat.ContainerBuilder();
    builder.factory = new ApiDomFactory(client);

    builder
      .register(AddToCart)
      .as('AddToCart')
      .withOptions({ replaceDisabled: true });

    builder
      .register(RemoveFromCart)
      .as('RemoveFromCart')
      .withOptions({ replaceDisabled: true });

    builder
      .register(CartItems)
      .as('CartItems');

    builder
      .register(CartSummary)
      .as('CartSummary')
      .withOptions({ replaceDisabled: true });

    this.setContainer(builder.build());
  }
}

new App();
