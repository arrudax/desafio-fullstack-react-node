import {
  IContantInformationRequest,
  IContantInformationResponse,
  IContantInformationUpdateRequest,
} from "../contantInformation/contantInformation.interface";

export interface IUserRequest {
  fullName: string;
  password: string;
  isAdmin?: boolean;
  contantInformation: IContantInformationRequest;
}

export interface IUserResponse {
  id: string;
  fullName: string;
  contantInformation: IContantInformationResponse;
  isActive: boolean;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface IUserUpdateRequest {
  fullName?: string;
  password?: string;
  contantInformation: IContantInformationUpdateRequest;
}

export interface IUserSession {
  fullName: string;
  password: string;
}
