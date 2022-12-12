import { Response, Request } from "express";
import createContantInformationService from "../../services/contantInformation/createContantInformation.service";
import { instanceToPlain } from "class-transformer";

const createContantInformationController = async (
  request: Request,
  response: Response
): Promise<Object> => {
  const { id } = request.user;
  const { email, phone } = request.newContantInformation;
  const createdContant = await createContantInformationService(id, {
    email,
    phone,
  });

  return response.status(201).json({
    message: "Successful contant Information creation",
    contantInformation: instanceToPlain(createdContant),
  });
};

export default createContantInformationController;
