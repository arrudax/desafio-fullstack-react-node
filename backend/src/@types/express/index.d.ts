import * as express from "express";
import {
  IUserRequest,
  IUserUpdateRequest,
} from "../../interfaces/users/users.interface";

declare global {
  namespace Express {
    interface Request {
      newUser: IUserRequest;
      updateUser: IUserUpdateRequest;
    }
  }
}
