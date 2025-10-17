/**
 * Logs things
 */
class Logger {
  constructor(
    /** The name to apply */
    public readonly name?: string,
  ) {
    console.log(`INITIALISING LOGGER ${name ?? ""} NOW!`);
  }

  public log(
    /** The message to log */
    message: string,
  ) {
    console.log(`${this.name} says "${message}"`);
  }
}

/**
 * it's the logger!
 */
export const logger = new Logger(Date.now().toString());
