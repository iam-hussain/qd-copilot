import { z } from "zod";
import { IdObjectSchema } from "./common";

export type CategoryCreateSchemaType = z.infer<typeof CategoryCreateSchema>;

export const CategoryCreateSchema = z.object({
  name: z.string(),
  deck: z.string().optional(),
  position: z.number().optional(),
});

export type CategoryUpdateSchemaType = z.infer<typeof CategoryUpdateSchema>;

export const CategoryUpdateSchema = z.object({
  name: z.string().optional(),
  deck: z.string().optional(),
  position: z.number().optional(),
});

export type CategoryCreateReqSchemaType = z.infer<
  typeof CategoryCreateReqSchema
>;

export const CategoryCreateReqSchema = z.object({
  body: CategoryCreateSchema,
});

export type CategoryUpdateReqSchemaType = z.infer<
  typeof CategoryUpdateReqSchema
>;

export const CategoryUpdateReqSchema = z.object({
  body: CategoryUpdateSchema,
  params: IdObjectSchema,
});
