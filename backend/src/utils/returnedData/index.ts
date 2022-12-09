import { ContantInformation } from "../../entities/contantInformation/contantInformation.entity";
import { Users } from "../../entities/users/user.entity";

import { IUserResponse } from "../../interfaces/users/users.interface";

export function returnedUserData(
  newUser: Users,
  newContantInformation: ContantInformation
) {
  const data: IUserResponse = {
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
  return data;
}
