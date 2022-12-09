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

  const userData = returnedUserData(newUser, newContantInformation);

  return userData;
};

export default createUserService;
