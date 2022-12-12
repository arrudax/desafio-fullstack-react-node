import { Express } from "express";
import userRouter from "./users/users.routes";
import sessionRouter from "./session/session.routes";

export const appRoutes = (app: Express) => {
  app.use("/api/users/", userRouter);
  app.use("/api/session/", sessionRouter);
};
