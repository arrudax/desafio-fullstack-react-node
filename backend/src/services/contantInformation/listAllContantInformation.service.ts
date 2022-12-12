import { ContantInformation } from "../../entities/contantInformation/contantInformation.entity";
import { Users } from "../../entities/users/user.entity";
import { userRepository } from "../../utils/repositories";

const listAllContantInformationService = async (
  id: string
): Promise<Users[]> => {
  const listContants = await userRepository
    .createQueryBuilder()
    .select("users")
    .relation(Users, "contantInformation")
    .of(id)
    .loadMany();

  return listContants;
};

export default listAllContantInformationService;
