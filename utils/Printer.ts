interface PrinterType {

  log(message?: any, ...optionalParams: any[]): void

  info(message?: any, ...optionalParams: any[]): void

  error(message?: any, ...optionalParams: any[]): void

  table(tabularData: any, properties?: ReadonlyArray<string>): void

}

const IS_DEBUG = true;

export const Printer: PrinterType = {
  error(message?: any, ...optionalParams: any[]): void {
    if (IS_DEBUG) {
      console.error(message, optionalParams)
    }
  },

  info(message?: any, ...optionalParams: any[]): void {
    if (IS_DEBUG) {
      console.info(message, optionalParams)
    }
  },

  log(message?: any, ...optionalParams: any[]): void {
    if (IS_DEBUG) {
      console.log(message, optionalParams)
    }
  },

  table(tabularData: any, properties?: ReadonlyArray<string>): void {
    if (IS_DEBUG) {
      console.table(tabularData, properties)
    }
  }

}

