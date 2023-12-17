import fastify from "fastify";
import { appRoutes } from "./http/router";

const app = fastify();

app.register(appRoutes);

export { app };