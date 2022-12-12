import * as yup from "yup";
import { SchemaOf } from "yup";
import { IContantInformationRequest } from "../interfaces/contantInformation/contantInformation.interface";

export const contantInformationRequestSchema: SchemaOf<IContantInformationRequest> =
  yup.object().shape({
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
  });
