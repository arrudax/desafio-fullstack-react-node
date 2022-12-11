import { Users } from "../../entities/users/user.entity";
import { IContantInformationResponse } from "../../interfaces/contantInformation/contantInformation.interface";

import { IUserResponse } from "../../interfaces/users/users.interface";

export function returnedUserData(
  user: Users,
  contantInformation: IContantInformationResponse
) {
  const data: IUserResponse = {
    id: user!.id,
    fullName: user!.fullName,
    isActive: user!.isActive,
    createdAt: user!.createdAt,
    updatedAt: user!.updatedAt,
    contantInformation: {
      id: contantInformation!.id,
      email: contantInformation!.email,
      phone: contantInformation!.phone,
      createdAt: contantInformation!.createdAt,
      updatedAt: contantInformation!.updatedAt,
    },
  };
  
  return data;
}
