import { Router } from "express";
import createUserController from "../../controllers/users/createUser.controller";
import listAllUsersController from "../../controllers/users/listAllUsers.controller";
import retrieveUserController from "../../controllers/users/retrieveUser.controller";
import updateUserController from "../../controllers/users/updateUser.controller";
import { handleSchemaUpdateUserMiddleware } from "../../middlewares/schemas/handleSchemaUpdateUser.middlewares";
import { handleSchemaUserMiddleware } from "../../middlewares/schemas/handleSchemaUser.middlewares";
import {
  userRequestSchema,
  userUpdateRequestSchema,
} from "../../schemas/users.schema";

const userRouter = Router();

userRouter.post(
  "/create/",
  handleSchemaUserMiddleware(userRequestSchema),
  createUserController
);

userRouter.get("", listAllUsersController);

userRouter.get("/:userId", retrieveUserController);
userRouter.patch(
  "/:userId",
  handleSchemaUpdateUserMiddleware(userUpdateRequestSchema),
  updateUserController
);

export default userRouter;
