import { ContantInformation } from "../../entities/contantInformation/contantInformation.entity";
import { AppError } from "../../errors";
import { IContantInformationRequest } from "../../interfaces/contantInformation/contantInformation.interface";
import {
  contantInformationRepository,
  userRepository,
} from "../../utils/repositories";

const createContantInformationService = async (
  id: string,
  { email, phone }: IContantInformationRequest
): Promise<ContantInformation> => {
  const users = await userRepository.find();
  const userExists = users.find((user) => user.id === id);

  if (!userExists) {
    throw new AppError(404, "User not found!");
  }

  const newContantInformation = contantInformationRepository.create({
    phone,
    email,
    users: userExists,
  });

  await contantInformationRepository.save(newContantInformation);

  return newContantInformation;
};

export default createContantInformationService;
