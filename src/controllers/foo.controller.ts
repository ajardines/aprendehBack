
import "reflect-metadata";
import { interfaces, controller, httpGet} from "inversify-express-utils";
import { injectable, inject } from "inversify";
import { Request, Response } from "express";
 
@controller("/foo")
export class FooController implements interfaces.Controller {

  @httpGet("/")
  public index (request: Request, response: Response) {
    response.status(200).send("Hola Mundo");
  }
}