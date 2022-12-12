import { compare } from "bcryptjs";
import { AppError } from "../../errors";

import { userRepository } from "../../utils/repositories";
import { IUserSession } from "../../interfaces/users/users.interface";

import jwt from "jsonwebtoken";
import "dotenv/config";

const sessionUserService = async ({
  fullName,
  password,
}: IUserSession): Promise<string> => {
  const users = await userRepository.find();
  const userExists = users.find((user) => user.fullName === fullName);

  if (!userExists) {
    throw new AppError(403, "Invalid fullName or password");
  }

  const matchPassword = await compare(password, userExists.password);

  if (!matchPassword) {
    throw new AppError(403, "Invalid fullName or password");
  }

  const token = jwt.sign(
    { isAdmin: userExists.isAdmin, isActive: userExists.isActive },
    process.env.SECRET_KEY as string,
    {
      subject: userExists.id,
      expiresIn: "2h",
    }
  );

  return token;
};

export default sessionUserService;
