import { Router } from "express";
import createUserController from "../../controllers/users/createUser.controller";
import listAllUsersController from "../../controllers/users/listAllUsers.controller";
import retrieveUserController from "../../controllers/users/retrieveUser.controller";
import softDeleteController from "../../controllers/users/softDelete.controller";
import updateUserController from "../../controllers/users/updateUser.controller";
import adminVerificationMiddleware from "../../middlewares/adminVerification.middleware";
import handleAuthMiddleware from "../../middlewares/authenticationUser.middleware";
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
  "/:contantId",
  handleSchemaUpdateUserMiddleware(userUpdateRequestSchema),
  handleAuthMiddleware,
  updateUserController
);

userRouter.delete(
  "/:targetUserId",
  handleAuthMiddleware,
  adminVerificationMiddleware,
  softDeleteController
);

export default userRouter;
