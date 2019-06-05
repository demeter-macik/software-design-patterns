namespace Factory {

    enum ProductTypes { Bar, Baz };

    interface Product {
        name: string
    }

    class ProductBar implements Product {
        name: string;
        constructor() {
            this.name = 'Bar';
        }
    }

    class ProductBaz implements Product {
        name: string;
        constructor() {
            this.name = 'Baz';
        }
    }

    class Factory {
        createProduct(type: ProductTypes): Product {
            switch (type) {
                case ProductTypes.Bar:
                    return new ProductBar();
                case ProductTypes.Baz:
                    return new ProductBaz();
                default:
                    throw new Error('Can\'t create product');
            }
        }
    }

    class Client {
        product: Product;
        constructor(type: ProductTypes, factory: Factory) {
            this.product = factory.createProduct(type);
        }
    }
}
