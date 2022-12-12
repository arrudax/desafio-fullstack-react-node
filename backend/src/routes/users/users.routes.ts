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
import softDeleteVerificationMiddleware from "../../middlewares/softDeleteVerification.middleware";
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

userRouter.get(
  "",
  handleAuthMiddleware,
  adminVerificationMiddleware,
  softDeleteVerificationMiddleware,
  listAllUsersController
);

userRouter.get(
  "/myaccount/",
  handleAuthMiddleware,
  softDeleteVerificationMiddleware,
  retrieveUserController
);
userRouter.patch(
  "/:contantId",
  handleSchemaUpdateUserMiddleware(userUpdateRequestSchema),
  handleAuthMiddleware,
  softDeleteVerificationMiddleware,
  updateUserController
);

userRouter.delete(
  "/:targetUserId",
  handleAuthMiddleware,
  softDeleteVerificationMiddleware,
  adminVerificationMiddleware,
  softDeleteController
);

export default userRouter;
