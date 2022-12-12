import { Response, Request } from "express";
import listAllContantInformationService from "../../services/contantInformation/listAllContantInformation.service";

const listAllContantInformationController = async (
  request: Request,
  response: Response
): Promise<Object> => {
  const { id } = request.user;
  const listContants = await listAllContantInformationService(id);

  return response.status(201).json(listContants);
};

export default listAllContantInformationController;
