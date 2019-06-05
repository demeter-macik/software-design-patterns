namespace AbstractFactory {

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
        doSomethingWithProduct(){
            const product = this.factoryMethod();
        }
        factoryMethod() {
            return new ProductBar();
        }
    }

    class ConcreteFactory extends Factory {
        factoryMethod() {
            // you have more control on how product is creating
            return new ProductBaz();
        }
    }    

    class Client {
        factory: Factory;
        constructor() {
            this.factory = new ConcreteFactory();            
        }
    }
}
