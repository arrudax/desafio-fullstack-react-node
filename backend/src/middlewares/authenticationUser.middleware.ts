import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import "dotenv/config";
import { AppError } from "../errors";

const handleAuthMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  let token = request.headers.authorization;

  if (!token) {
    throw new AppError(401, "Missing Authentication Token");
  }

  token = token.split(" ")[1];

  jwt.verify(
    token,
    process.env.SECRET_KEY as string,
    (error: any, decoded: any) => {
      if (error) {
       throw new AppError(401, 'Invalid token')
      }

      request.user = {
        id: decoded.sub,
        isAdmin: decoded.isAdmin,
        isActive: decoded.isActive,
      };

      next();
    }
  );
};

export default handleAuthMiddleware;
