import { Request, Response } from "express";
import { instanceToPlain } from "class-transformer";
import listAllUsersService from "../../services/users/listAllUsers.service";

const listAllUsersController = async (
  request: Request,
  response: Response
): Promise<Object> => {
  const listUsers = await listAllUsersService();

  return response.status(200).json(instanceToPlain(listUsers));
};

export default listAllUsersController;
