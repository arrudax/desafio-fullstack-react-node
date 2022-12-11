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
import { returnedUserData } from "../../utils/returnedData";

const createUserService = async ({
  fullName,
  password,
  isAdmin,
  contantInformation,
}: IUserRequest): Promise<IUserResponse> => {
  const { email, phone } = contantInformation;

  const users = await userRepository.find();
  const userExists = users.find((user) => user.fullName === fullName);

  if (userExists) {
    throw new AppError(400, "Request data already exists!");
  }

  const hashPassword = bcryptjs.hashSync(password, 10);

  const newUser = userRepository.create({
    fullName,
    password: hashPassword,
    isAdmin: isAdmin ? isAdmin : false,
  });

  await userRepository.save(newUser);

  const newContantInformation = contantInformationRepository.create({
    phone,
    email,
    users: newUser,
  });

  await contantInformationRepository.save(newContantInformation);

  const returnCreatedUser = returnedUserData(newUser, newContantInformation);

  return returnCreatedUser;
};

export default createUserService;
