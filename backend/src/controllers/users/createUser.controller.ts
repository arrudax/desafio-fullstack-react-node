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

  return response
    .status(201)
    .json({ message: "Successful user creation", createdUser });
};

export default createUserController;
