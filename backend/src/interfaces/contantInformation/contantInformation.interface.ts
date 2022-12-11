export interface IContantInformationResponse {
  id: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IContantInformationRequest {
  email: string;
  phone: string;
}

export interface IContantInformationUpdateRequest {
  email?: string;
  phone?: string;
  contantId: string;
}
