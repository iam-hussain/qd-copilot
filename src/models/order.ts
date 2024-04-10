import { z } from "zod";

import { ORDER_STATUS, ORDER_TYPE } from "./common";
import { ItemCreateSchema } from "./items";
import { FeesSchema, TableSchema } from "./store";
import { number, string } from "./helpers";

export type OrderUpsertSchemaType = z.infer<typeof OrderUpsertSchema>;

export const OrderUpsertSchema = z.object({
  shortId: string({ optional: true }),
  type: ORDER_TYPE.optional(),
  status: ORDER_STATUS.optional(),
  note: string({ optional: true }),
  customerId: string({ optional: true }),
  items: z.array(ItemCreateSchema).optional(),
  completedAt: string({ optional: true }),
  deliveredAt: string({ optional: true }),
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
  date: string({ optional: true }),
  skip: number({ min: 0, max: 10000, optional: true }),
  take: number({ min: 0, max: 10000, optional: true }),
  cursor: string({ optional: true }),
  type: ORDER_TYPE.optional(),
  status: ORDER_STATUS.optional(),
  types: z.array(ORDER_TYPE).optional(),
  statuses: z.array(ORDER_STATUS).optional(),
});

export type GetOrdersReqSchemaType = z.infer<typeof GetOrdersReqSchema>;

export const GetOrdersReqSchema = z.object({
  body: GetOrdersSchema,
});
