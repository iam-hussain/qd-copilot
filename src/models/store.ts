import { z } from "zod";
import { CALC_VALUE_TYPE } from "./common";

export type FeeSchemaType = z.infer<typeof FeeSchema>;
export const FeeSchema = z.object({
  key: z.string(),
  name: z.string(),
  rate: z.number(),
  printName: z.string().optional(),
  position: z.number().optional(),
  type: CALC_VALUE_TYPE.optional(),
});

export type FeesSchemaType = z.infer<typeof FeesSchema>;
export const FeesSchema = z.array(FeeSchema).optional();

export type TableSchemaType = z.infer<typeof TableSchema>;
export const TableSchema = z.object({
  key: z.string(),
  name: z.string(),
  printName: z.string().optional(),
  position: z.number().optional(),
});

export type TablesSchemaType = z.infer<typeof TablesSchema>;
export const TablesSchema = z.array(TableSchema).optional();

export type AdditionalReqSchemaType = z.infer<typeof TablesSchema>;

export const AdditionalReqSchema = z.object({
  body: z.object({
    fees: FeesSchema,
    taxes: FeesSchema,
    tables: TablesSchema,
  }),
});
