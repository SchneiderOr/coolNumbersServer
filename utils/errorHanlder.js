export default class GenericeError extends Error {
  constructor({ status, code, error, next, ...params }) {
    super();

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, GenericeError);
    }

    this.name = "GenericeError";
    this.timestemp = new Date().toUTCString();

    return {
      status,
      success: false,
      code,
      name: this.name,
      message: error.message,
      stack: error.stack,
      timestemp: this.timestemp,
    };
  }
}
