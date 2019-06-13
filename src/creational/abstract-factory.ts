/**
 * Abstract Factory aka Kit
 * Usage: provide interface for creating families of related objects without specifying concrete 
 * classes.
 */

interface Product { }

abstract class ProductA implements Product { }
abstract class ProductB implements Product { }

class ProductA1 extends ProductA { }
class ProductB1 extends ProductB { }

class ProductA2 extends ProductA { }
class ProductB2 extends ProductB { }

export abstract class AbstractFactory {
  public createProductA(): ProductA {
    return;
  }
  public createProductB(): ProductB {
    return;
  }
}

// Usually ConcreteFactory implementing as Singleton
export class ConcreteFactory1 extends AbstractFactory {
  public createProductA(): ProductA {
    return new ProductA1();
  }
  public createProductB(): ProductB {
    return new ProductB1();
  }
}

export class ConcreteFactory2 extends AbstractFactory {
  public createProductA(): ProductA {
    return new ProductA2();
  }
  public createProductB(): ProductB {
    return new ProductB2();
  }
}

export class Client {
  private factory: AbstractFactory;
  public constructor() {
    this.factory = new ConcreteFactory1();
  }
}
