import { instanceToPlain } from "class-transformer";
import { Request, Response } from "express";
import updateUserService from "../../services/users/updateUser.service";

const updateUserController = async (
  request: Request,
  response: Response
): Promise<Object> => {
  const { userId } = request.params;
  const { fullName, password, contantInformation } = request.updateUser;

  await updateUserService(userId, {
    fullName,
    password,
    contantInformation,
  });

  return response.status(200).json({
    message: "Successful user information update",
  });
};

export default updateUserController;
