import { z } from "zod";

import { ORDER_STATUS, ORDER_TYPE } from "./common";
import { ItemCreateSchema } from "./items";
import { FeesSchema, TableSchema } from "./store";

export type OrderUpsertSchemaType = z.infer<typeof OrderUpsertSchema>;

export const OrderUpsertSchema = z.object({
  shortId: z.string().optional(),
  type: ORDER_TYPE.optional(),
  status: ORDER_STATUS.optional(),
  note: z.string().optional(),
  customerId: z.string().optional(),
  items: z.array(ItemCreateSchema).optional(),
  completedAt: z.string().optional(),
  deliveredAt: z.string().optional(),
  fees: FeesSchema,
  table: TableSchema,
  taxes: FeesSchema,
});

export type OrderUpsertReqSchemaType = z.infer<typeof OrderUpsertReqSchema>;

export const OrderUpsertReqSchema = z.object({
  body: OrderUpsertSchema,
});

export type GetOrdersSchemaType = z.infer<typeof GetOrdersSchema>;

export const GetOrdersSchema = z.object({
  date: z.string().optional(),
  skip: z.number().optional(),
  take: z.number().optional(),
  cursor: z.string().optional(),
  type: ORDER_TYPE.optional(),
  status: ORDER_STATUS.optional(),
  types: z.array(ORDER_TYPE).optional(),
  statuses: z.array(ORDER_STATUS).optional(),
});

export type GetOrdersReqSchemaType = z.infer<typeof GetOrdersReqSchema>;

export const GetOrdersReqSchema = z.object({
  body: GetOrdersSchema,
});
