interface Logger {
  info: (message: unknown) => void;
  warn: (message: unknown) => void;
  error: (message: unknown) => void;
  debug: (message: unknown) => void;
}

class LoggerFactory {
  public static createLogger() {
    if (process.env.NODE_ENV === "production") {
      return new ProductionLogger();
    } else {
      return new DevLogger();
    }
  }
}

class DevLogger implements Logger {
  info(message: unknown) {
    console.log(message);
  }
  warn(message: unknown) {
    console.warn(message);
  }
  debug(message: unknown) {
    console.debug(message);
  }
  error(message: unknown) {
    console.error(message);
  }
}

class ProductionLogger implements Logger {
  info(message: unknown) {}
  warn(message: unknown) {
    console.warn(message);
  }
  debug(message: unknown) {}
  error(message: unknown) {
    console.error(message);
  }
}

const logger = LoggerFactory.createLogger();
logger.info("[INFO]: Works only in development");
logger.warn("[WARN]: Works in development and production");
logger.debug("[DEBUG]: Works only in development");
logger.error("[ERROR]: Works in development and production");
