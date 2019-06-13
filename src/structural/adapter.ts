/**
 * Adapter
 * Usage: when you have object with same features but with different interface, you can create
 * adapter to provide required interface.
 */

/* eslint "@typescript-eslint/no-unused-vars": "off" */

/**
 * Target
 */
export interface AbsolutePositionShape {
  draw(x1: number, y1: number, x2: number, y2: number): void;
}

export class Line implements AbsolutePositionShape {
  public draw(x1: number, y1: number, x2: number, y2: number): void {
    // draw
  }
}

export class Rectangle {
  public draw(x1: number, y1: number, w: number, h: number): void {
    // draw
  }
}

/**
 * Adapter
 */
export class AbsoluteRectangle implements AbsolutePositionShape {
  private rectangle: Rectangle;
  public constructor(rectangle: Rectangle) {
    this.rectangle = rectangle;
  }
  public draw(x1: number, y1: number, x2: number, y2: number): void {
    this.rectangle.draw(x1, y1, x2 - x1, y2 - y1);
  }
}

const line = new Line();
const rectangle = new AbsoluteRectangle(new Rectangle);
line.draw(5, 5, 10, 10);
rectangle.draw(5, 5, 10, 10);