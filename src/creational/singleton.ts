/**
 * Singleton
 * Usage: if exactly one object is needed to coordinate actions across the system.
 */

class ProductBar { }

export class Singleton {
  private instance: ProductBar;
  public getInstance(): ProductBar {
    if (!this.instance) {
      this.instance = new ProductBar();
    }
    return this.instance;
  }
}
