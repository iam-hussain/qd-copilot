import { z } from 'zod';

import { IdObjectSchema } from './common';
import { date, string } from './helpers';

export type TokenUpdateSchemaType = z.infer<typeof TokenUpdateSchema>;

export const TokenUpdateSchema = z.object({
  completed: z.boolean().optional(),
  completedAt: date,
  printed: z.boolean().optional(),
  printedAt: date,
  orderId: string(),
});

export type TokenUpdateReqSchemaType = z.infer<typeof TokenUpdateReqSchema>;

export const TokenUpdateReqSchema = z.object({
  body: TokenUpdateSchema,
  params: IdObjectSchema,
});
