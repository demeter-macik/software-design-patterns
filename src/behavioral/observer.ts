/**
 * Observer aka Publisher/Subscriber
 * Usage: event handling system
 */

export interface Observer {
  update(message: string): void;
}

export class ConcreteObserver implements Observer {
  /* eslint "@typescript-eslint/no-unused-vars": "off" */
  public update(message: string): void {
  }
}

export class Subject {
  private subscribers: Set<Observer>;
  public subscribe(observer: Observer): void {
    this.subscribers.add(observer);
  }
  public unsubscribe(observer: Observer): void {
    this.subscribers.delete(observer);
  }
  public notify(message: string): void {
    /* eslint "@typescript-eslint/explicit-function-return-type": "off" */
    this.subscribers.forEach(subscriber => subscriber.update(message));
  }
}

const subject = new Subject();
subject.subscribe(new ConcreteObserver());
subject.subscribe(new ConcreteObserver());
subject.subscribe(new ConcreteObserver());
subject.notify('update');