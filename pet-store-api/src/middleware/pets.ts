import * as Koa from "koa";

export async function GetPets(ctx: Koa.Context, next: () => Promise<any>): Promise<any> {
    ctx.body = {
        type: 'pets'
    };
    
    await next();
}