/**
 * Command
 * Usage: switch, calculator commands, placing orders
 */

interface Command {
  execute(): void;
}

interface Target {
  doA(): void;
  doB(): void;
}

export class ConcreteTarget implements Target {
  public doA(): void { }
  public doB(): void { }
}

export class ConcreteCommandA implements Command {
  private target: Target;
  public constructor(target: Target) {
    this.target = target;
  }
  public execute(): void {
    return this.target.doA();
  }
}

export class ConcreteCommandB implements Command {
  private target: Target;
  public constructor(target: Target) {
    this.target = target;
  }
  public execute(): void {
    return this.target.doB();
  }
}

export class Executor {
  private commands: Map<string, Command>;
  /**
   * Register new command
   * @param name - command name
   * @param command  - command
   */
  public register(name: string, command: Command): void {
    this.commands.set(name, command);
  }
  /**
   * Execute command by name
   * @param {string} name - command name
   * @throws {Error} error
   */
  public execute(name: string): void {
    const command = this.commands.get(name);
    if (command) {
      command.execute();
    } else {
      throw new Error(`Command ${name} not found`);
    }
  }
}

export class Client {
  public constructor() {
    const target = new ConcreteTarget();
    const commandA = new ConcreteCommandA(target);
    const commandB = new ConcreteCommandB(target);
    const executor = new Executor();
    executor.register('a', commandA);
    executor.register('b', commandB);
    executor.execute('a');
    executor.execute('b');
  }
}
