import { IController } from "../protocols/IController";
import { IHttpRequest, IHttpResponse } from "../protocols/IHttp";

export class RegisterUserController implements IController {
  handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    throw new Error("Method not implemented.");
  }
}
