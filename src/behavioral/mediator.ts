/**
 * Mediator
 * Usage: define an object that encapsulate how set of objects interact.
 */

export interface Colleague {
  send(): void;
  receive(): void;
}

export class ConcreteColleagueA implements Colleague {
  public send(): void { }
  public receive(): void { }
}

export class ConcreteColleagueB implements Colleague {
  public send(): void { }
  public receive(): void { }
}

export class Mediator {

  private a: ConcreteColleagueA;
  private b: ConcreteColleagueB;

  public constructor(a: ConcreteColleagueA, b: ConcreteColleagueB) {
    this.a = a;
    this.b = b;
  }

  public doSomething1(): void {
    this.a.send();
    this.a.receive();
  }

  public doSomething2(): void {
    this.a.receive();
    this.a.send();
  }
}