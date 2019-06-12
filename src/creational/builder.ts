/**
 * Builder
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
    builder.build();
    builder.build();
    return builder.getProduct();
  }
}
