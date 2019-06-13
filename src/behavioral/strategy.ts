/**
 * Strategy
 * Usage: isolate algorithm in the separate classes from classes
 */

export interface Strategy {
  do(): void;
}

export class ConcreteStrategyA implements Strategy {
  public do(): void {
    // algorithm
  }
}

export class ConcreteStrategyB implements Strategy {
  public do(): void {
    // algorithm
  }
}

export class Context {
  private strategy: Strategy;
  public constructor(strategy: Strategy) {
    this.strategy = strategy;
  }
  public do(): void {
    this.strategy.do();
  }
}

const contextA = new Context(new ConcreteStrategyA());
const contextB = new Context(new ConcreteStrategyB());
contextA.do();
contextB.do();
