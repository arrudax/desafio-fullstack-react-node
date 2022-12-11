import { Request, Response } from "express";
import { IUserRequest } from "../../interfaces/users/users.interface";
import createUserService from "../../services/users/createUser.service";
import { instanceToPlain } from "class-transformer";

const createUserController = async (request: Request, response: Response) => {
  const { fullName, password, contantInformation }: IUserRequest =
    request.newUser;

  const createdUser = await createUserService({
    fullName,
    password,
    contantInformation,
  });

  return response.status(201).json({
    message: "Successful user creation",
    user: instanceToPlain(createdUser),
  });
};

export default createUserController;
