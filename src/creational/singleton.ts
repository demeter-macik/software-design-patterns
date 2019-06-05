namespace Singleton {
    
    class Bar { }

    class Singleton {
        private instance: Bar;
        getInstance(): Bar {
            if (!this.instance) {
                this.instance = new Bar();
            }
            return this.instance;
        }
    }
}
