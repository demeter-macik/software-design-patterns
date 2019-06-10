/**
 * Builder
 */
export class Product {
  public append() { }
  public prepend() { }
}

abstract class Builder {
  public createProduct() { }
  public getProduct(): Product {
    return;
  }
  public build() { }
}

export class ConcreteBuilder1 extends Builder {
  private product: Product;
  public createProduct() {
    this.product = new Product();
  }
  public getProduct(): Product {
    return this.product;
  }
  public build() {
    this.product.append();
  }
}

export class ConcreteBuilder2 extends Builder {
  private product: Product;
  public createProduct() {
    this.product = new Product();
  }
  public getProduct(): Product {
    return this.product;
  }
  public build() {
    this.product.prepend();
  }
}

export class Director {
  public createProduct(builder: Builder) {
    builder.createProduct();
    builder.build();
    builder.build();
    builder.build();
    return builder.getProduct();
  }
}
