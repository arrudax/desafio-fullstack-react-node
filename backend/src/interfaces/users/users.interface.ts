import {
  IContantInformationRequest,
  IContantInformationResponse,
  IContantInformationUpdateRequest,
} from "../contantInformation/contantInformation.interface";

export interface IUserRequest {
  fullName: string;
  password: string;
  contantInformation: IContantInformationRequest;
}

export interface IUserResponse {
  id: string;
  fullName: string;
  contantInformation: IContantInformationResponse;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserUpdateRequest {
  fullName?: string;
  password?: string;
  contantInformation: IContantInformationUpdateRequest;
}
