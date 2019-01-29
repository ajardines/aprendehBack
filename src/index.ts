import "reflect-metadata";
import * as bodyParser from 'body-parser'; 
import { winstonLog as log } from "./config/winston";
import { Container } from 'inversify';
import { interfaces, InversifyExpressServer, TYPE } from 'inversify-express-utils';
 
// declare metadata by @controller annotation
import "./controllers/foo.controller";
 
// set up container
let container = new Container();
 
// set up bindings
// container.bind<FooService>('FooService').to(FooService);
 
// create server
let server = new InversifyExpressServer(container);
server.setConfig((app) => {
  // add body parser
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());
});
 
let app = server.build();
app.listen(3000);
log.info("App server listening on port "+ process.env.SERVERPORT +" in %s mode", process.env.SERVERPORT, process.env.NODE_ENV);
