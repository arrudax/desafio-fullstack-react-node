import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/users/users.interface";
import { instanceToPlain } from "class-transformer";
import createUserService from "../../services/users/createUser.service";

const createUserController = async (request: Request, response: Response) => {
  const { fullName, password, contacts, contantInformation }: IUserRequest =
    request.newUser;

  const createdUser = await createUserService({
    fullName,
    password,
    contacts,
    contantInformation,
  });
  const removedPassword = instanceToPlain(createdUser);

  return response.status(201).json(removedPassword);
};

export default createUserController;
