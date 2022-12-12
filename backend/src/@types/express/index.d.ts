import * as express from "express";
import {
  IUserRequest,
  IUserSession,
  IUserUpdateRequest,
} from "../../interfaces/users/users.interface";

declare global {
  namespace Express {
    interface Request {
      user: {
        id: string;
        isAdmin: boolean;
        isActive: boolean;
      };
      newUser: IUserRequest;
      updateUser: IUserUpdateRequest;
      session: IUserSession;
    }
  }
}
