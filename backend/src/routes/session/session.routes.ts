import { Router } from "express";

import sessionUserController from "../../controllers/session/session.controller";
import { handleSchemaSessionMiddleware } from "../../middlewares/schemas/handleSchemaSession.middlewares";
import { sessionRequestSchema } from "../../schemas/session.schema";

const sessionRouter = Router();

sessionRouter.post(
  "",
  handleSchemaSessionMiddleware(sessionRequestSchema),
  sessionUserController
);

export default sessionRouter;
