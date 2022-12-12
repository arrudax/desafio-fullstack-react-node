import { Request, Response, NextFunction } from "express";
import "dotenv/config";
import { AppError } from "../errors";

const adminVerificationMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const userAdmin = request.user.isAdmin;

  if (!userAdmin) {
    throw new AppError(401, "Unauthorized user");
  }
  next();
};

export default adminVerificationMiddleware;
