namespace AbstractFactory {

    interface Product { }

    abstract class ProductBar implements Product { }
    abstract class ProductBaz implements Product { }

    class ProductBarA extends ProductBar { }
    class ProductBazA extends ProductBaz { }

    class ProductBarB extends ProductBar { }
    class ProductBazB extends ProductBaz { }

    abstract class Factory {
        createProductBar() { }
        createProductBaz() { }
    }

    class FactoryA extends Factory {
        createProductBar() {
            return new ProductBarA();
        }
        createProductBaz() {
            return new ProductBazA();
        }
    }

    class FactoryB extends Factory {
        createProductBar() {
            return new ProductBarB();
        }
        createProductBaz() {
            return new ProductBazB();
        }
    }

    class Client {
        factory: Factory;
        constructor() {
            this.factory = new FactoryA();
        }
    }
}
