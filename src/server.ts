import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt from "@fastify/jwt";

import { poolRoutes } from "./routers/pool";
import { userRoutes } from "./routers/user";
import { authRoutes } from "./routers/auth";
import { gameRoutes } from "./routers/game";
import { guessRoutes } from "./routers/guess";

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  // Em produção isso precisa ficar em variável ambiente
  await fastify.register(jwt, {
    secret: "nlwcopa",
  });

  await fastify.register(poolRoutes);
  await fastify.register(userRoutes);
  await fastify.register(authRoutes);
  await fastify.register(gameRoutes);
  await fastify.register(guessRoutes);

  await fastify.listen({ port: 3001, host: "0.0.0.0" });
}

bootstrap();
