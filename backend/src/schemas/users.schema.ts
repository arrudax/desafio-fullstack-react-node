import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUserRequest,
  IUserUpdateRequest,
} from "../interfaces/users/users.interface";

export const userRequestSchema: SchemaOf<IUserRequest> = yup.object().shape({
  fullName: yup.string().required(),
  password: yup.string().required(),

  contantInformation: yup.object().shape({
    email: yup.string().required(),
    phone: yup.string().required(),
  }),
});

export const userUpdateRequestSchema: SchemaOf<IUserUpdateRequest> = yup
  .object()
  .shape({
    fullName: yup.string(),
    password: yup.string(),

    contantInformation: yup.object().shape({
      contantId: yup.string().required(),
      email: yup.string(),
      phone: yup.string(),
    }),
  });
