import * as z from "zod";
import { validationMessages } from "./handler";

const number = (options?: { min?: number; max?: number }) => {
  let numberSchema = z.number({
    required_error: validationMessages.required,
  });

  if (typeof options?.min === "number" && options?.min >= 0) {
    numberSchema = numberSchema.min(options.min);
  }

  if (typeof options?.max === "number" && options?.max >= 0) {
    numberSchema = numberSchema.max(options.max);
  }

  return z.preprocess((val) => {
    if (typeof val === "string") return Number(val);
    return val;
  }, numberSchema);
};

const string = (options?: {
  type?: "email" | "username" | "";
  length?: "2-20" | "4-20" | "2-40" | "6-20";
  optional?: boolean;
}) => {
  let stringSchema = z.string({
    required_error: validationMessages.required,
  });

  if (!options || !Object.keys(options).length) {
    return stringSchema;
  }

  if (options.type === "email") {
    stringSchema = stringSchema.email({
      message: validationMessages.valid_email,
    });
  }

  if (options.optional) {
    stringSchema = stringSchema.optional() as any;
  }

  if (options.length === "4-20") {
    stringSchema = stringSchema
      .min(4, {
        message: validationMessages.length4to20,
      })
      .max(20, {
        message: validationMessages.length4to20,
      });
  }

  if (options.length === "2-20") {
    stringSchema = stringSchema
      .min(2, {
        message: validationMessages.length2to20,
      })
      .max(20, {
        message: validationMessages.length2to20,
      });
  }

  if (options.length === "2-40") {
    stringSchema = stringSchema
      .min(2, {
        message: validationMessages.length2to40,
      })
      .max(40, {
        message: validationMessages.length2to40,
      });
  }

  if (options.length === "6-20") {
    stringSchema = stringSchema
      .min(6, {
        message: validationMessages.length6to20,
      })
      .max(20, {
        message: validationMessages.length6to20,
      });
  }

  if (options.type === "username") {
    stringSchema = stringSchema.regex(
      new RegExp(/^(?!-*\-\-)(?!-*\-$)[^\W][\w-]{0,20}$/),
      validationMessages.username_regex
    );
  }

  return stringSchema;
};

export default {
  number,
  string,
};
