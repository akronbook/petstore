import * as Koa from "koa";
import Transaction from "../model/transaction";
import uuid from "../keycloak-koa-connect/uuid";

export async function GetTransactions(ctx: Koa.Context, next: () => Promise<any>): Promise<any> {
    const transactions: Array<Transaction> = new Array<Transaction>();
    transactions.push(new Transaction(12.56, new Date().toISOString(), uuid(), `Cash`));
    transactions.push(new Transaction(56.16, new Date().toISOString(), uuid(), `Credit card`));
    transactions.push(new Transaction(88.99, new Date().toISOString(), uuid(), `Bitcoin`));
    ctx.body = transactions;
    
    await next();
}