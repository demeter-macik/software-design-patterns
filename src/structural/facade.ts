/**
 * Facade
 * Usage: is an object that serves as an interface to hide more complex underlying structure
 */

class ComponentA {
  public doA(): void {
    // do something
  }
}

class ComponentB {
  public doB(): void {
    // do something
  }
}

class ComponentC {
  public doC(): void {
    // do something
  }
}

export class Facade {
  private componentA: ComponentA;
  private componentB: ComponentB;
  private componentC: ComponentC;
  public constructor() {
    this.componentA = new ComponentA();
    this.componentB = new ComponentB();
    this.componentC = new ComponentC();
  }
  public do(): void {
    this.componentA.doA();
    this.componentB.doB();
    this.componentC.doC();
  }
}