import { AppDataSource } from "../../data-source";
import { Users } from "../../entities/users/user.entity";
import { ContantInformation } from "../../entities/contantInformation/contantInformation.entity";

const userRepository = AppDataSource.getRepository(Users);
const contantInformationRepository =
  AppDataSource.getRepository(ContantInformation);

export { userRepository, contantInformationRepository };
