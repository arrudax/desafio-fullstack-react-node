import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import retrieveUserService from "../../services/users/retrieveUser.service";

const retrieveUserController = async (
  request: Request,
  response: Response
): Promise<Object> => {
  const { id } = request.user;
  const retrieveUser = await retrieveUserService(id);

  return response.status(200).json(instanceToPlain(retrieveUser));
};

export default retrieveUserController;
