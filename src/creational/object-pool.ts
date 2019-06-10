/**
 * Object pool
 * In other languages this pattern should be implemented in thread-safe manner
 */
interface Connection { }

class ConcreteConnection implements Connection { }

class ConnectionPool {

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
  public release(connection: Connection) {
    // remove from `inUse` array
    this.inUse = this.inUse.filter(conn => conn !== connection);
    // add to `available` array
    this.available.push(connection);
  }
}