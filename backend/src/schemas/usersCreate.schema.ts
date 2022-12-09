import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserRequest } from "../interfaces/users/users.interface";

export const userRequestSchema: SchemaOf<IUserRequest> = yup.object().shape({
  fullName: yup.string().required(),
  password: yup.string().required(),
  contacts: yup.string(),

  contantInformation: yup.object().shape({
    email: yup.string().required().email(),
    phone: yup.string().required(),
  }),
});
