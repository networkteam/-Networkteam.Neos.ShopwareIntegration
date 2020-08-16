import 'core-js';
import 'regenerator-runtime/runtime';
import ReactHabitat from 'react-habitat';
import ApiDomFactory from './Habitat/factory';
import AddToCart from './Components/AddToCart';
import RemoveFromCart from './Components/RemoveFromCart';
import UpdateQuantity from './Components/UpdateQuantity';
import Cart from './Components/Cart';
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
      .register(UpdateQuantity)
      .as('UpdateQuantity')
      .withOptions({ replaceDisabled: true });

    builder
      .register(Cart)
      .as('Cart');

    this.setContainer(builder.build());
  }
}

new App();
