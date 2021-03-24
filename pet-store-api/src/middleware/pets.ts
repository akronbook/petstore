import * as Koa from "koa";
import Pet from "../model/pet";

export async function GetPets(ctx: Koa.Context, next: () => Promise<any>): Promise<any> {
    const pets: Array<Pet> = new Array<Pet>();
    pets.push(new Pet(1, `Dog`, 'Oliver', 6));
    pets.push(new Pet(2, `Cat`, 'Buster', 1));
    pets.push(new Pet(3, `Bird`, 'Violet', 2));
    ctx.body = pets;
    
    await next();
}