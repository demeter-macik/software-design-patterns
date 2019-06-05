export class Product {
  public append(part: any) { }
  public prepend(part: any) { }
}

abstract class Builder {
  public createProduct() { }
  public getProduct(): Product {
    return;
  }
  public build(part: any) { }
}

export class ConcreteBuilder1 extends Builder {
  private product: Product;
  public createProduct() {
    this.product = new Product();
  }
  public getProduct(): Product {
    return this.product;
  }
  public build(part: any) {
    this.product.append(part);
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
  public build(part: any) {
    this.product.prepend(part);
  }
}

export class Client {
  public createProduct(builder: Builder) {
    builder.build(1);
    builder.build(2);
    builder.build(3);
    return builder.getProduct();
  }
}
