/**
 * Null object
 * Usage: avoid null references by providing default object.
 */

export abstract class Operation {
  abstract do(): void;
}

export class ConcreteOperation extends Operation {
  public do(): void {
    // do something
  }
}

export class NullOperation extends Operation {
  public do(): void {
    // do nothing
  }
}

export class Client {
  private operation: Operation;
  public constructor(operation: Operation) {
    this.operation = operation;
  }
  public do(): void {
    this.operation.do();
  }
}

