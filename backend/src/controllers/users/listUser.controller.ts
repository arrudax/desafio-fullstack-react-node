import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import listUsersService from "../../services/users/listUsers.service";

const listUserController = async (request: Request, response: Response) => {
  const listUsers = await listUsersService();

  return response.status(201).json(instanceToPlain(listUsers));
};

export default listUserController;
