import * as KoaRouter from "koa-router";
import { PetRouter } from "./route/petRoute";
import { TransactionRouter } from "./route/transactionRoute";
export const AppRouter: KoaRouter = new KoaRouter();
AppRouter.use(PetRouter.routes(), PetRouter.allowedMethods());
AppRouter.use(TransactionRouter.routes(), TransactionRouter.allowedMethods());