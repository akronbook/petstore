import * as KoaRouter from "koa-router";
import { GetTransactions } from "../middleware/transactions";
import {keycloak} from "../config/keycloak-config";

export const TransactionRouter: KoaRouter = new KoaRouter({prefix: "/api/transactions"});  
TransactionRouter.get("/", keycloak.protect('api-employee'), GetTransactions);