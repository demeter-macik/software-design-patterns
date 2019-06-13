/**
 * Decorator
 * Usage: to add additional responsibility dynamically to an object
 */

export interface Component {
  do(): void;
}

export class ConcreteComponent implements Component {
  public do(): void {
    // do something
  }
}

export abstract class Decorator implements Component {
  protected component: Component;
  public constructor(component: Component) {
    this.component = component;
  }
  public do(): void {
    this.component.do();
  }
}

export class ConcreteDecorator extends Decorator {
  public constructor(component: Component) {
    super(component);
  }
  /**
   * @override
   */
  public do(): void {
    this.component.do();
    // do something more...
  }
}

const component = new ConcreteComponent();
const decorator = new ConcreteDecorator(component);
decorator.do();