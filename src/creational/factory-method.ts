/**
 * Factory method aka Virtual Constructor
 */

interface Product { }

class ProductA implements Product { }
class ProductB implements Product { }

class FactoryMethod {
  public doSomethingWithProduct(): void {
    this.factoryMethod();
  }
  public factoryMethod(): Product {
    return new ProductA();
  }
}

class ConcreteFactory extends FactoryMethod {
  public factoryMethod(): Product {
    // you have more control on how product is creating
    return new ProductB();
  }
}

export class Client {
  private factory: FactoryMethod;
  public constructor() {
    this.factory = new ConcreteFactory();
  }
}
