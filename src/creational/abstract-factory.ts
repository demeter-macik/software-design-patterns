/**
 * Abstract Factory aka Kit
 */

interface Product { }

abstract class ProductA implements Product { }
abstract class ProductB implements Product { }

class ProductA1 extends ProductA { }
class ProductB1 extends ProductB { }

class ProductA2 extends ProductA { }
class ProductB2 extends ProductB { }

export abstract class AbstractFactory {
  createProductA() { }
  createProductB() { }
}

// Usually ConcreteFactory implementing as Singleton
class ConcreteFactory1 extends AbstractFactory {
  createProductA() {
    return new ProductA1();
  }
  createProductB() {
    return new ProductB1();
  }
}

class ConcreteFactory2 extends AbstractFactory {
  createProductA() {
    return new ProductA2();
  }
  createProductB() {
    return new ProductB2();
  }
}

class Client {
  factory: AbstractFactory;
  constructor() {
    this.factory = new ConcreteFactory1();
  }
}

