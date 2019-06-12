/**
 * Object pool
 * In other languages this pattern should be implemented in thread-safe manner
 */

export interface Connection { }

export class ConcreteConnection implements Connection { }

export class ConnectionPool {

  private available: Connection[];
  private inUse: Connection[];

  /**
   * getConnection
   * @returns {Connection} connection
   */
  public getConnection(): Connection {
    // check if exists available connection
    if (this.available.length > 0) {
      const connection = this.available.pop();
      this.inUse.push(connection);
      return connection;
    }
    const connection = new ConcreteConnection();
    this.inUse.push(connection);
    return connection;
  }

  /**
   * Release connection
   * @param {Connection} connection - connection
   */
  public release(connection: Connection): void {
    // remove from `inUse` array
    /* eslint "@typescript-eslint/explicit-function-return-type": "off" */
    this.inUse = this.inUse.filter(conn => conn !== connection);
    // add to `available` array
    this.available.push(connection);
  }
}