/* eslint "@typescript-eslint/no-explicit-any": "off" */
/**
 * Interpreter
 * Usage: represent sentence with AST, compiler, transpiler
 * Expressions could be organized in linear or hierarchical manner
 */

export class Context {
  private data: any;
  private results: any[];
  /**
   * @param data data
   */
  public constructor(data: any) {
    this.data = data;
  }
  /**
   * Get next part
   */
  public next(): any {
    // process data and return next part
  }
  /**
   * Set result
   * @param {any} result
   */
  public set(result: any): void {
    this.results.push(result);
  }
  /**
   * Returns result
   * @returns {any} results
   */
  public get(): any {
    return this.results;
  }
}

export abstract class Expression {
  public interpret(context: Context): void { }
}

export class ConcreteExpression extends Expression {
  private expression: Expression;

  public constructor(expression: Expression) {
    super();
    this.expression = expression;
  }

  public interpret(context: Context): void {
    let data = context.next();
    // do something with `data`
    context.set(data);
    // next expression
    this.expression.interpret(context);
  }
}

export class TerminalExpression extends Expression {
  public interpret(context: Context): void {
    // terminate process
    context.get();
  }
}

export class Client {
  public constructor() {
    const context = new Context('some data');
    const expression = new ConcreteExpression(new TerminalExpression());
    expression.interpret(context);
  }
}