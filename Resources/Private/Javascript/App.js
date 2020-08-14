import ReactHabitat from 'react-habitat';
import ApiDomFactory from "./Habitat/factory";
import AddToBasket from './Components/AddToBasket';
import Connector from 'shopware-connector';

class App extends ReactHabitat.Bootstrapper {
  constructor() {
    super();
    const client = new Connector()
    const builder = new ReactHabitat.ContainerBuilder();
    builder.factory = new ApiDomFactory(client)

    builder.register(AddToBasket).as('AddToBasket').withOptions({replaceDisabled: true});
    this.setContainer(builder.build());

  }
}

new App();
