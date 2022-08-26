import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import { resolve } from "node:path";

const app = Fastify();

app.register(fastifyStatic, {
  root: resolve(__dirname, "tests"),
});

app.listen({
  port: 8080,
});
