/* eslint "@typescript-eslint/no-explicit-any": "off" */
/**
 * Iterator
 * Usage: access content of a collection
 */

export interface Iterable {
  next(): any;
  hasNext(): boolean;
  reset(): void;
}

export class ArrayIterator implements Iterable {
  private array: any[];
  private index: number;

  public constructor(array: any[]) {
    this.array = array;
    this.index = 0;
  }
  public next(): any {
    if (this.index < this.array.length) {
      return { done: false, value: this.array[this.index++] };
    } else {
      return { done: true };
    }
  }
  public hasNext(): boolean {
    return this.index < this.array.length;
  }
  public reset(): void {
    this.index = 0;
  }
}

export class Aggregate extends Array {
  public getIterator(): Iterable {
    return new ArrayIterator(this);
  }
}

const aggregator = new Aggregate();
aggregator.push(1);
aggregator.push(2);
aggregator.push(3);
const iArray = aggregator.getIterator();
iArray.next(); // { done: false, value: 1 }
iArray.next(); // { done: false, value: 2 }
iArray.next(); // { done: false, value: 3 }
iArray.next(); // { done: true }
