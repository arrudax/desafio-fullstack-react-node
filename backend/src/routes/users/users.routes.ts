import { Router } from "express";
import createUserController from "../../controllers/users/createUser.controller";
import { handleSchemaUserMiddleware } from "../../middlewares/schemas/handleSchemaUser.middlewares";
import { userRequestSchema } from "../../schemas/usersCreate.schema";

const userRouter = Router();

userRouter.post(
  "/create/",
  handleSchemaUserMiddleware(userRequestSchema),
  createUserController
);

export default userRouter;
