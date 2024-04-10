import { z } from "zod";
import { IdObjectSchema, PRODUCT_TYPE } from "./common";

export type ProductCreateSchemaType = z.infer<typeof ProductCreateSchema>;

export const ProductCreateSchema = z.object({
  name: z.string(),
  deck: z.string().optional(),
  type: PRODUCT_TYPE.optional(),
  price: z.number(),
  categoryId: z.string(),
});

export type ProductCreateReqSchemaType = z.infer<typeof ProductCreateReqSchema>;

export const ProductCreateReqSchema = z.object({
  body: ProductCreateSchema,
});

export type ProductUpdateSchemaType = z.infer<typeof ProductUpdateSchema>;

export const ProductUpdateSchema = z.object({
  name: z.string().optional(),
  deck: z.string().optional(),
  price: z.number().optional(),
  type: PRODUCT_TYPE.optional(),
  categoryId: z.string().optional(),
});
export type ProductUpdateReqSchemaType = z.infer<typeof ProductUpdateReqSchema>;

export const ProductUpdateReqSchema = z.object({
  body: ProductUpdateSchema,
  params: IdObjectSchema,
});
