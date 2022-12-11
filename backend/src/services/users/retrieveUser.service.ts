import { Users } from "../../entities/users/user.entity";
import { AppError } from "../../errors";
import { userRepository } from "../../utils/repositories";

const retrieveUserService = async (userId: string): Promise<Users> => {
  const users = await userRepository.find();
  const userFind = users.find((user) => user.id === userId);

  if (!userFind) {
    throw new AppError(404, "User not found!");
  }

  return userFind;
};

export default retrieveUserService;
