import { ServerError } from "../errors";
import { IHttpResponse } from "../protocols/IHttp";

export function badRequest(error: Error): IHttpResponse {
  return {
    statusCode: 400,
    body: error,
  };
}

export function ok(data: any): IHttpResponse {
  return {
    statusCode: 200,
    body: data,
  };
}
export function serverError(): IHttpResponse {
  return {
    statusCode: 500,
    body: new ServerError(),
  };
}
