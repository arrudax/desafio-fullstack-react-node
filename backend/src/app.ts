import express from "express";
import "express-async-errors";

import { appRoutes } from "./routes";
import { handlerErrorMiddleware } from "./middlewares/handlerError.middleware";

const app = express();

app.use(express.json());

appRoutes(app);

app.use(handlerErrorMiddleware);

export default app;
