import express from "express";
import "express-async-errors";
import { handlerErrorMiddleware } from "./middlewares/handlerError.middleware";
import { appRoutes } from "./routes";

const app = express();

app.use(express.json());

appRoutes(app);

app.use(handlerErrorMiddleware);

export default app;
