/**
 * Bridge
 * Usage: decouple abstraction from implementation.
 */

export interface Implementor {
  implementation(): void;
}

export class ConcreteImplementor implements Implementor {
  public implementation(): void {
  }
}

/**
 * Bridge
 */
export interface Abstraction {
  operation(): void;
}

export class RefinedAbstraction implements Abstraction {
  private implementor: Implementor;
  public constructor(implementor: Implementor) {
    this.implementor = implementor;
  }
  public operation(): void {
    this.implementor.implementation();
  }
}