import { AppError } from "../../errors";
import { IUserUpdateRequest } from "../../interfaces/users/users.interface";
import {
  contantInformationRepository,
  userRepository,
} from "../../utils/repositories";
import bcryptjs from "bcryptjs";

const updateUserService = async (
  id: string,
  contantId: string,
  { fullName, password, contantInformation }: IUserUpdateRequest
): Promise<void> => {
  const { email, phone } = contantInformation!;

  const users = await userRepository.find();
  const userExists = users.find((user) => user.id === id);

  const contants = await contantInformationRepository.find();
  const contantExists = contants.find((contant) => contant.id === contantId);

  const phoneExists = contants.find((phoneExist) => phoneExist.phone === phone);
  const emailExists = contants.find((emailExist) => emailExist.email === email);
  const fullNameExists = users.find(
    (fullNameExist) => fullNameExist.fullName === fullName
  );

  if (!contantExists || !userExists) {
    throw new AppError(404, "User information not found");
  }

  if (phoneExists || emailExists || fullNameExists) {
    throw new AppError(409, "Request data already exists!");
  }
  if (phone || email) {
    await userRepository.update(id, {
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

  await userRepository.update(id, {
    fullName: fullName ? fullName : userExists.fullName,
    password: password ? bcryptjs.hashSync(password, 10) : userExists.password,
  });
};

export default updateUserService;
