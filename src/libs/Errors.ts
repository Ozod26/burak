export enum HttpCode {
  OK = 200,
  CREATED = 201,
  NOT_MODIFIED = 304,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 404,
  FORBIDDEM = 403,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
}

export enum Message {
  SOMETHING_WENT_WRONG = "Somthing went wrong!",
  NO_DATA_FOUND = "No data is found!",
  CREATED_FAILED = "Create is failed!",
  UPDATE_FAILED = "Updata is failed!",
}

class Errors extends Error {
  public code: HttpCode;
  public  message: Message;

  constructor(statusCode: HttpCode, statusMessage: Message) {
    super();
    this.code = statusCode;
    this.message = statusMessage;
  }
}

export default Errors;