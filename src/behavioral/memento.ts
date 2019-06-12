/**
 * Memento pattern
 * Usage: to save/restore internal state of an object
 */

export class Memento {
  public a: string;
  public b: number;
  public constructor(a: string, b: number) {
    this.a = a;
    this.b = b;
  }
}

export class Originator {
  private a: string;
  private b: number;
  public save(): Memento {
    return new Memento(this.a, this.b);
  }
  public restore(memento: Memento): void {
    this.a = memento.a;
    this.b = memento.b;
  }
  public set(a: string, b: number): void {
    this.a = a;
    this.b = b;
  }
}

export class Caretaker {
  private mementos: Memento[];
  public push(memento: Memento): void {
    this.mementos.push(memento);
  }
  public pop(): Memento {
    return this.mementos.pop();
  }
}

export class Client {

  private caretaker: Caretaker;
  private originator: Originator;

  public constructor() {
    this.caretaker = new Caretaker();
    this.originator = new Originator();
  }

  public doSomething(): void {
    this.originator.set('one', 1);
    // save state
    this.caretaker.push(this.originator.save());
    this.originator.set('two', 2);
    // restore state
    this.originator.restore(this.caretaker.pop());
  }
}
