import { Request, Response } from "express";
import softDeleteService from "../../services/users/softDelete.service";

const softDeleteController = async (request: Request, response: Response) => {
  const { userId } = request.params;

  await softDeleteService(userId);

  response.status(200).json({ message: "Successful in deactivate user" });
};

export default softDeleteController;
