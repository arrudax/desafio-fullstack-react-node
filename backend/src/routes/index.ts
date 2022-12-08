import { Express } from "express";
import userRouter from "./users/users.routes";

export const appRoutes = (app: Express) => {
  app.use("/api/users/", userRouter);
};
