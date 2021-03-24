import * as Koa from "koa";
import * as Router from "koa-router";
import * as cors from "koa2-cors";
import * as logger from "koa-logger";
import * as json from "koa-json";
import * as bodyParser from "koa-bodyparser";
import { config } from "./config/configManager";
import { AppRouter } from "./routes";
import { keycloak } from "./config/keycloak-config";

const app: Koa = new Koa();
const router: Router = new Router();

keycloak.middleware()
  .map(item => {
    app.use(item)
  });

// Middlewares
app.use(cors());
app.use(json());
app.use(bodyParser());
app.use(logger());
app.use(AppRouter.routes());
app.use(router.allowedMethods());

const port: string | number = config.Port;
app.listen(port, (): void => {
  console.log("Koa started at port " + port);
});