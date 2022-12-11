import { Request, Response, NextFunction } from "express";

import { SchemaOf } from "yup";
import { AppError } from "../../errors";
import { IUserUpdateRequest } from "../../interfaces/users/users.interface";

export const handleSchemaUpdateUserMiddleware =
  (schema: SchemaOf<IUserUpdateRequest>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const validatedData = await schema.validate(data, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.updateUser = validatedData;

      next();
    } catch (err: any) {
      if (err) {
        throw new AppError(400, err.errors?.join(", ") as string);
      }
    }
  };
