/**
 * Template method
 */

export abstract class AbstractClass {
  public abstract doA(): void
  public abstract doB(): void
  public abstract doC(): void
}

export class ConcreteClassA extends AbstractClass {
  public doA(): void {
    // do
  }
  public doB(): void {
    // do
  }
  public doC(): void {
    // do
  }
}

export class ConcreteClassB extends AbstractClass {
  public doA(): void {
    // do
  }
  public doB(): void {
    // do
  }
  public doC(): void {
    // do
  }
}