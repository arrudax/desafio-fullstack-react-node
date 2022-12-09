import { Users } from "../../entities/users/user.entity";
import { userRepository } from "../../utils/repositories";

const listUsersService = async (): Promise<Users[]> => {
  const users = userRepository.find();
  return users;
};

export default listUsersService;
