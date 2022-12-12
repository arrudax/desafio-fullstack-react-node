import { AppError } from "../../errors";
import { userRepository } from "../../utils/repositories";

const softDeleteService = async (targetUserId: string): Promise<void> => {
  const users = await userRepository.find();
  const targetUserExists = users.find((user) => user.id === targetUserId);

  if (!targetUserExists) {
    throw new AppError(404, "User not found!");
  }

  await userRepository.update(targetUserId, {
    fullName: targetUserExists.fullName,
    password: targetUserExists.password,
    isActive: false,
  });
};

export default softDeleteService;
