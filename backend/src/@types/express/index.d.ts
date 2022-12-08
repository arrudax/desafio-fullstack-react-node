import * as express from "express";
import { IUserRequest } from "../../interfaces/users/users.interface";

declare global {
  namespace Express {
    interface Request {
      newUser: IUserRequest;
    }
  }
}
