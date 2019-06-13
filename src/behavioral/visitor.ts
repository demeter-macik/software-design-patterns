/**
 * Visitor
 * Usage: separate algorithm from objects on which it operates.
 */

export interface Visitor {
  visit(element: Element): void;
}

export interface Element {
  accept(visitor: Visitor): void;
  do(): void;
}

export class ConcreteVisitor implements Visitor {
  public visit(element: Element): void {
    element.do();
  }
}

export class ConcreteElement implements Element {
  public accept(visitor: Visitor): void {
    visitor.visit(this);
  }
  public do(): void {
    // do something
  }
}

const visitor = new ConcreteVisitor();
const element = new ConcreteElement();
element.accept(visitor);