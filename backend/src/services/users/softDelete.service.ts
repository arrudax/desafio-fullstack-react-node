import { AppError } from "../../errors";
import { userRepository } from "../../utils/repositories";

const softDeleteService = async (userId: string): Promise<void> => {
  const users = await userRepository.find();
  const userExists = users.find((user) => user.id === userId);

  if (!userExists) {
    throw new AppError(404, "User not found!");
  }

  await userRepository.update(userId, {
    fullName: userExists.fullName,
    password: userExists.password,
    isActive: false,
  });
};

export default softDeleteService;
