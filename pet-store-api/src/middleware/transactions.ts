import * as Koa from "koa";

export async function GetTransactions(ctx: Koa.Context, next: () => Promise<any>): Promise<any> {
    ctx.body = {
        type: 'transactions'
    };
    
    await next();
}