import * as yup from "yup";
import { SchemaOf } from "yup";
import { IUserSession } from "../interfaces/users/users.interface";

export const sessionRequestSchema: SchemaOf<IUserSession> = yup.object().shape({
  fullName: yup.string().required(),
  password: yup.string().required(),
});
