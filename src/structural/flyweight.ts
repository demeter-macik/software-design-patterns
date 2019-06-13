/**
 * Flyweight
 * Usage: minimizing memory usage by sharing data with other similar objects
 */

interface Component {
  init(data: any): void;
  do(): void;
}

class ConcreteComponentA implements Component {
  private data: any;
  public init(data: any): void {
    this.data = data;
  }
  public do(): void {
    // do something A
  }
}

class ConcreteComponentB implements Component {
  private data: any;
  public init(data: any): void {
    this.data = data;
  }
  public do(): void {
    // do something B
  }
}

class ComponentFactory {
  private components: Map<string, Component>;
  public constructor() {
    this.components = new Map();
  }
  public getComponent(type: string): Component {
    if (this.components.has(type)) {
      return this.components.get(type);
    } else {
      let component;
      switch (type) {
        case 'A':
          component = new ConcreteComponentA();
          break;
        case 'B':
          component = new ConcreteComponentB();
          break;
        default:
          throw new Error(`Type ${type} isn't supported`);
      }
      this.components.set(type, component);
      return component;
    }
  }
}

const factory = new ComponentFactory();
const componentA = factory.getComponent('A');
componentA.init('data');
const componentB = factory.getComponent('B');
componentB.init('data');
componentA.do();
componentB.do();
