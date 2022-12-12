import { Request, Response } from "express";
import destroyContantInformationService from "../../services/contantInformation/destroyContantInformation.service";

const destroyContantInformationController = async (
  request: Request,
  response: Response
): Promise<Object> => {
  const { id } = request.user;
  const { targetContantId } = request.params;

  await destroyContantInformationService(id, targetContantId);

  return response
    .status(200)
    .json({ message: "Successful deletion of user's contant information" });
};

export default destroyContantInformationController;
