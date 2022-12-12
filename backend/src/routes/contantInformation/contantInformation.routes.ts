import { Router } from "express";
import createContantInformationController from "../../controllers/contantInformation/createContantInformation.controller";
import handleAuthMiddleware from "../../middlewares/authenticationUser.middleware";
import { handleSchemaContantInformationMiddleware } from "../../middlewares/schemas/handleSchemaContantInformation.middlewares";
import softDeleteVerificationMiddleware from "../../middlewares/softDeleteVerification.middleware";
import { contantInformationRequestSchema } from "../../schemas/contantInformation.schema";

const contantInformationRouter = Router();

contantInformationRouter.post(
  "/create/",
  handleSchemaContantInformationMiddleware(contantInformationRequestSchema),
  handleAuthMiddleware,
  softDeleteVerificationMiddleware,
  createContantInformationController
);

export default contantInformationRouter;
