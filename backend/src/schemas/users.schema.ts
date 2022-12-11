import * as yup from "yup";
import { SchemaOf } from "yup";
import {
  IUserRequest,
  IUserUpdateRequest,
} from "../interfaces/users/users.interface";

export const userRequestSchema: SchemaOf<IUserRequest> = yup.object().shape({
  fullName: yup.string().required(),
  password: yup.string().required(),
  isAdmin: yup.boolean(),

  contantInformation: yup.object().shape({
    email: yup
      .string()
      .required()
      .email("your email must contain example domain: email@email.com"),
    phone: yup
      .string()
      .min(11)
      .max(14)
      .required()
      .matches(
        /(^([+]?\d{1,3}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$)/,
        "example: +CCDD9XXX-YYYY or DD9XXX-YYY"
      ),
  }),
});

export const userUpdateRequestSchema: SchemaOf<IUserUpdateRequest> = yup
  .object()
  .shape({
    fullName: yup.string(),
    password: yup.string(),

    contantInformation: yup.object().shape({
      contantId: yup.string().required(),
      email: yup
        .string()
        .email("your email must contain example domain: email@email.com"),
      phone: yup
        .string()
        .min(11)
        .max(14)
        .matches(
          /(^([+]?\d{1,3}[-\s]?|)\d{3}[-\s]?\d{3}[-\s]?\d{4}$)/,
          "example: +CCDD9XXX-YYYY or DD9XXX-YYY"
        ),
    }),
  });
