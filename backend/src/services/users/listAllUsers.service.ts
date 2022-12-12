import { Users } from "../../entities/users/user.entity";
import { userRepository } from "../../utils/repositories";

const listAllUsersService = async (): Promise<Users[]> => {
  const users = await userRepository.find();
  return users;
};

export default listAllUsersService;
