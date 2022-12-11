import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import listAllUsersService from "../../services/users/listAllUsers.service";

const listAllUsersController = async (request: Request, response: Response) => {
  const listUsers = await listAllUsersService();

  return response.status(201).json(instanceToPlain(listUsers));
};

export default listAllUsersController;
