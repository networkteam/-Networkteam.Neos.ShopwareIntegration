import 'core-js';
import 'regenerator-runtime/runtime';
import ReactHabitat from 'react-habitat';
import ApiDomFactory from './Habitat/factory';
import AddToBasket from './Components/AddToBasket';
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
      .register(AddToBasket)
      .as('AddToBasket')
      .withOptions({ replaceDisabled: true });

    builder
      .register(Cart)
      .as('Cart');

    this.setContainer(builder.build());
  }
}

new App();
