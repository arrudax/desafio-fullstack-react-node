import { Users } from "../../entities/users/user.entity";
import { AppError } from "../../errors";
import {
  contantInformationRepository,
  userRepository,
} from "../../utils/repositories";

const destroyContantInformationService = async (
  id: string,
  targetContantId: string
): Promise<void> => {
  const listContants = await userRepository
    .createQueryBuilder()
    .select("users")
    .relation(Users, "contantInformation")
    .of(id)
    .loadMany();

  const contantExists = listContants.find(
    ({ id: contantId }) => contantId === targetContantId
  );

  if (!contantExists) {
    throw new AppError(404, "ContantInformation not found!");
  }

  await contantInformationRepository.delete(targetContantId);
};

export default destroyContantInformationService;
