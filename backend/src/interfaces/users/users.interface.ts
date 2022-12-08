import {
  IContantInformationRequest,
  IContantInformationResponse,
} from "../contantInformation/contantInformation.interface";

export interface IUserRequest {
  fullName: string;
  password: string;
  contantInformation: IContantInformationRequest;
  contacts?: string;
}

export interface IUserResponse {
  id: string
  fullName: string;
  contantInformation: IContantInformationResponse;
  contacts?: string;
  isActive: boolean
  createdAt: Date
  updatedAt: Date
}
