import { Request, Response, NextFunction } from "express";

import { SchemaOf } from "yup";
import { AppError } from "../../errors";
import { IUserRequest } from "../../interfaces/users/users.interface";

export const handleSchemaUserMiddleware =
  (schema: SchemaOf<IUserRequest>) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = req.body;
      const validatedData = await schema.validate(data, {
        abortEarly: false,
        stripUnknown: true,
      });

      req.newUser = validatedData;

      next();
    } catch (err: any) {
      if (err) {
        throw new AppError(400, err.errors?.join(", ") as string);
      }
    }
  };
