import * as KoaRouter from "koa-router";
import { GetPets } from "../middleware/pets";
import {keycloak} from "../config/keycloak-config";

export const PetRouter: KoaRouter = new KoaRouter({prefix: "/api/pets"});  
PetRouter.get("/", GetPets);