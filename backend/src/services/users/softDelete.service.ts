import { AppError } from "../../errors";
import { userRepository } from "../../utils/repositories";

const softDeleteService = async (id: string): Promise<void> => {
  const users = await userRepository.find();
  const userExists = users.find((user) => user.id === id);

  if (!userExists) {
    throw new AppError(404, "User not found!");
  }

  await userRepository.update(id, {
    fullName: userExists.fullName,
    password: userExists.password,
    isActive: false,
  });
};

export default softDeleteService;
