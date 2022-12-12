import { Response, Request } from "express";
import sessionUserService from "../../services/session/session.service";

const sessionUserController = async (
  request: Request,
  response: Response
): Promise<Object> => {
  const { fullName, password } = request.session;

  const token = await sessionUserService({ fullName, password });

  return response.status(200).json({ token });
};

export default sessionUserController;
