/**
 * Chain of responsibility
 * Good example - Logger
 */

export class Request {
  public value: number;
}

export abstract class Handler {
  private next: Handler;
  /**
   * Set next handler
   * @param handler 
   */
  public setNext(handler: Handler): void {
    this.next = handler;
  }
  /**
   * @param {Request} request - request
   */
  public handle(request: Request): void {
    if (this.next) {
      this.next.handle(request);
    }
  }
}

export class ConcreteHandlerA extends Handler {
  /**
   * @override
   */
  public handle(request: Request): void {
    if (request.value < 0) {
      // do something
    } else {
      super.handle(request);
    }
  }
}

export class ConcreteHandlerB extends Handler {
  /**
   * @override
   */
  public handle(request: Request): void {
    if (request.value >= 0) {
      // do something
    } else {
      super.handle(request);
    }
  }
}

export class Client {
  public constructor() {
    const handlerA = new ConcreteHandlerA();
    const handlerB = new ConcreteHandlerB();
    const request = new Request();
    handlerA.setNext(handlerB);
    handlerA.handle(request);
  }
}
