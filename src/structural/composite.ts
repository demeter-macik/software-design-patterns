/**
 * Composite
 * Usage: describes group of objects that is treated the same way as a single instance 
 * of same type of object.
 */

export interface Component {
  operation(): void;
}

export class Leaf implements Component {
  public operation(): void {
    // do something
  }
}

export class Composite implements Component {
  private components: Component[];
  public add(component: Component): void {
    this.components.push(component);
  }
  public remove(component: Component): void {
    /* eslint "@typescript-eslint/explicit-function-return-type": "off" */
    this.components = this.components.filter(comp => comp !== component);
  }
  public operation(): void {
    /* eslint "@typescript-eslint/explicit-function-return-type": "off" */
    this.components.forEach(component => component.operation());
  }
}

const leaf1 = new Leaf();
const leaf2 = new Leaf();
const leaf3 = new Leaf();
const composite1 = new Composite();
composite1.add(leaf1);
composite1.add(leaf2);
composite1.add(leaf3);
const composite2 = new Composite();
composite2.add(composite1);