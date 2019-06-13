/**
 * Builder
 * Usage: separate construction of complex object from its representation.
 */

export class Product {
  public append(): void { }
  public prepend(): void { }
}

abstract class Builder {
  public createProduct(): void { }
  public getProduct(): Product {
    return;
  }
  public build(): void { }
}

export class ConcreteBuilder1 extends Builder {
  private product: Product;
  public createProduct(): void {
    this.product = new Product();
  }
  public getProduct(): Product {
    return this.product;
  }
  public build(): void {
    this.product.append();
    this.product.append();
    this.product.append();
    this.product.prepend();
  }
}

export class ConcreteBuilder2 extends Builder {
  private product: Product;
  public createProduct(): void {
    this.product = new Product();
  }
  public getProduct(): Product {
    return this.product;
  }
  public build(): void {
    this.product.prepend();
  }
}

export class Director {
  public createProduct(builder: Builder): Product {
    builder.createProduct();
    builder.build();
    return builder.getProduct();
  }
}
