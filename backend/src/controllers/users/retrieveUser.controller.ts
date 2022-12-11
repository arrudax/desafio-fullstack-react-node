import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import retrieveUserService from "../../services/users/retrieveUser.service";

const retrieveUserController = async (request: Request, response: Response) => {
  const { userId } = request.params;
  const retrieveUser = await retrieveUserService(userId);

  return response.status(200).json(instanceToPlain(retrieveUser));
};

export default retrieveUserController;
