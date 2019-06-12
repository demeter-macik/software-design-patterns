/**
 * Prototype
 */

export interface Prototype {
  clone(): Prototype;
}

export abstract class Product implements Prototype {
  public clone(): Product {
    return;
  }
}

export class ConcreteProductA extends Product {
  public clone(): Product {
    // do clone product instance
    return;
  }
}

export class ConcreteProductB extends Product {
  public clone(): Product {
    // do clone product instance
    return;
  }
}

export class Products {
  private products: Map<string, Product>;
  public constructor() {
    this.products.set('A', new ConcreteProductA());
    this.products.set('B', new ConcreteProductB());
  }
  public getProduct(name: string): Product | undefined {
    return this.products.get(name);
  }
}

export class Client {

  private products: Products;

  public constructor() {
    this.products = new Products();
  }

  public doSomething(): void {
    this.products.getProduct('A');
  }
}