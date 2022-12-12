import { Express } from "express";
import userRouter from "./users/users.routes";
import sessionRouter from "./session/session.routes";
import contantInformationRouter from "./contantInformation/contantInformation.routes";

export const appRoutes = (app: Express) => {
  app.use("/api/users/", userRouter);
  app.use("/api/session/", sessionRouter);
  app.use("/api/contant/", contantInformationRouter);
};
