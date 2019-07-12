import ReactHabitat from 'react-habitat';

class App extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    const builder = new ReactHabitat.ContainerBuilder();

    this.setContainer(builder.build());
  }
}

new App();