/**
 * Factory
 */
enum ProductTypes { A, B };

interface Product { }

class ProductA implements Product { }

class ProductB implements Product { }

export class Factory {
  public createProduct(type: ProductTypes): Product {
    switch (type) {
      case ProductTypes.A:
        return new ProductA();
      case ProductTypes.B:
        return new ProductB();
      default:
        throw new Error('Can\'t create product');
    }
  }
}

export class Client {
  private product: Product;
  public constructor(type: ProductTypes, factory: Factory) {
    this.product = factory.createProduct(type);
  }
}
