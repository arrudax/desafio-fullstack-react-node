import { Request, Response, NextFunction } from "express";

import { SchemaOf } from "yup";
import { AppError } from "../../errors";
import { IContantInformationRequest } from "../../interfaces/contantInformation/contantInformation.interface";

export const handleSchemaContantInformationMiddleware =
  (schema: SchemaOf<IContantInformationRequest>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const validatedData = await schema.validate(data, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.newContantInformation = validatedData;

      next();
    } catch (err: any) {
      if (err) {
        throw new AppError(400, err.errors?.join(", ") as string);
      }
    }
  };
