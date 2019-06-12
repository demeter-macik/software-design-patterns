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
  private products = {};
  public constructor() {
    this.addProduct('A', new ConcreteProductA());
    this.addProduct('B', new ConcreteProductB());
  }
  public addProduct(name: string, product: Product): void {
    this.products[name] = product;
  }
  public getProduct(name: string): Product | undefined {
    return this.products[name];
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