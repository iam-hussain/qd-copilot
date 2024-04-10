import { z } from "zod";
import { PRODUCT_TYPE } from "./common";

export type ItemCreateSchemaType = z.infer<typeof ItemCreateSchema>;

export const ItemCreateSchema = z.object({
  id: z.string().optional(),
  title: z.string().optional(),
  note: z.string().optional(),
  price: z.number().optional(),
  type: PRODUCT_TYPE.optional(),
  quantity: z.number(),
  position: z.number().optional(),
  productId: z.string(),
});
