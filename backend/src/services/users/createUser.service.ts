import bcryptjs from "bcryptjs";

import { AppError } from "../../errors";

import {
  contantInformationRepository,
  userRepository,
} from "../../utils/repositories";

import {
  IUserRequest,
  IUserResponse,
} from "../../interfaces/users/users.interface";

const createUserService = async ({
  fullName,
  password,
  contacts,
  contantInformation,
}: IUserRequest): Promise<IUserResponse> => {
  const { email, phone } = contantInformation;

  const users = await userRepository.find();
  const userExists = users.find((user) => user.fullName === fullName);

  const contantInformations = await contantInformationRepository.find();
  const contantInformationExists = contantInformations.find(
    (ele) => ele.phone === phone || ele.email === email
  );

  if (userExists || contantInformationExists) {
    throw new AppError(400, "Request data already exists!");
  }

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = userRepository.create({
    contacts,
    fullName,
    password: hashPassword,
  });

  await userRepository.save(newUser);

  const newContantInformation = contantInformationRepository.create({
    email,
    phone,
    users: newUser,
  });

  await contantInformationRepository.save(newContantInformation);

  const returnedUser: IUserResponse = {
    id: newUser!.id,
    fullName: newUser!.fullName,
    contacts: newUser!.contacts,
    isActive: newUser!.isActive,
    createdAt: newUser!.createdAt,
    updatedAt: newUser!.updatedAt,
    contantInformation: {
      id: newContantInformation.id,
      email: newContantInformation!.email,
      phone: newContantInformation!.phone,
      createdAt: newContantInformation!.createdAt,
      updatedAt: newContantInformation!.updatedAt,
    },
  };

  return returnedUser;
};

export default createUserService;
