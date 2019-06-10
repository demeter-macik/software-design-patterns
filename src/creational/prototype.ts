/**
 * Prototype
 */
interface Prototype {
  clone(): Prototype;
}

abstract class Product implements Prototype {
  public clone(): Product { }
}

class ConcreteProductA extends Product {
  public clone(): Product {
    // do clone product instance
    return;
  }
}

class ConcreteProductB extends Product {
  public clone(): Product {
    // do clone product instance
    return;
  }
}

class Products {
  private products: any = {};
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

class Client {

  private products: Products;

  public constructor() {
    this.products = new Products();
  }

  public doSomething(): void {
    this.products.getProduct('A');
  }
}