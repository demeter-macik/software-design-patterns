/**
 * Proxy
 * Usage: to control access to an object, ot additional functionality during accessing an object.
 */

export interface Subject {
  operation(): void;
}

export class RealSubject implements Subject {
  public operation(): void {
    // do something
  }
}

export class Proxy implements Subject {
  private subject: Subject;
  public operation(): void {
    if (!this.subject) {
      this.subject = new RealSubject();
    }
    this.subject.operation();
  }
}

const subject = new Proxy();
subject.operation();
subject.operation();