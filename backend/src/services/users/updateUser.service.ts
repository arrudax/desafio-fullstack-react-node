import { AppError } from "../../errors";
import {
  IUserUpdateRequest,
  IUserResponse,
} from "../../interfaces/users/users.interface";
import {
  contantInformationRepository,
  userRepository,
} from "../../utils/repositories";
import bcryptjs from "bcryptjs";
import { returnedUserData } from "../../utils/returnedData";

const updateUserService = async (
  userId: string,
  { fullName, password, contantInformation }: IUserUpdateRequest
): Promise<void> => {
  const { email, phone, contantId } = contantInformation!;

  const users = await userRepository.find();
  const userExists = users.find((user) => user.id === userId);

  const contants = await contantInformationRepository.find();
  const contantExists = contants.find((contant) => contant.id === contantId);

  if (!contantExists || !userExists) {
    throw new AppError(404, "User information not found");
  }

  if (phone || email) {
    await userRepository.update(userId, {
      fullName: fullName ? fullName : userExists.fullName,
      password: password
        ? bcryptjs.hashSync(password, 10)
        : userExists.password,
    });

    await contantInformationRepository.update(contantId, {
      phone: phone ? phone : contantExists.phone,
      email: email ? email : contantExists.email,
    });
  }

  await userRepository.update(userId, {
    fullName: fullName ? fullName : userExists.fullName,
    password: password ? bcryptjs.hashSync(password, 10) : userExists.password,
  });
};

export default updateUserService;
