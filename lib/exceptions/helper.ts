export const createHttpExceptionBody = (
  msg: any,
  error: string,
  status: number,
  code?: string,
  data?: object
) =>
  msg
    ? { msg, error, code, data }
    : { error }
