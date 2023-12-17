import { FastifyInstance } from "fastify";
import userCreateController from "./controller/userCreate.controller";

export const appRoutes = async (app: FastifyInstance) => {
    app.post('/user', userCreateController.createUser)
}