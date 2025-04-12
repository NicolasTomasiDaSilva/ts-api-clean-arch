import { ok, serverError } from "../helpers/HttpHelper";
import { IController } from "../protocols/IController";
import { IHttpRequest, IHttpResponse } from "../protocols/IHttp";

export class RegisterUserController implements IController {
  async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      return ok({ message: "User registered successfully" });
    } catch (error) {
      return serverError();
    }
  }
}
