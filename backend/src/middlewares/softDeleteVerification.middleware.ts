import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import { AppError } from "../errors";

const softDeleteVerificationMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const { isActive } = request.user;

  if (!isActive) {
    throw new AppError(401, "User does not exist or has been deleted");
  }
  next();
};

export default softDeleteVerificationMiddleware;
