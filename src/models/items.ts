import { z } from 'zod';

import { IdObjectSchema, PRODUCT_TYPE } from './common';
import { date, number, string } from './helpers';

export type ItemCreateSchemaType = z.infer<typeof ItemCreateSchema>;

export const ItemCreateSchema = z.object({
  // id: string({ optional: true }),
  title: string({ optional: true }),
  note: string({ optional: true }),
  price: number({ min: 0, max: 10000, optional: true }),
  type: PRODUCT_TYPE.optional(),
  quantity: number({ min: 0, max: 10000 }),
  position: number({ min: 0, max: 10000, optional: true }),
  productId: string(),
  status: z.enum(['DRAFT', 'SCHEDULED', 'PLACED', 'ACCEPTED', 'PROGRESS', 'PREPARED']).optional(),
});

export type ItemUpdateSchemaType = z.infer<typeof ItemUpdateSchema>;

export const ItemUpdateSchema = z.object({
  title: z.string().optional(),
  note: z.string().optional(),
  type: z.enum(['NON_VEG', 'VEG']).optional(), // Assuming PRODUCT_TYPE is an enum with these values
  price: z.number().optional(),
  quantity: z.number().optional(),
  total: z.number().optional(),
  position: z.number().optional(),
  placeAt: date,
  placedAt: date,
  acceptedAt: date,
  preparedAt: date,
  status: z.enum(['DRAFT', 'SCHEDULED', 'PLACED', 'ACCEPTED', 'PROGRESS', 'PREPARED']).optional(),
  productId: z.string().optional(),
  orderId: z.string().optional(),
  billId: z.string().optional(),
});

export type ItemUpdateReqSchemaType = z.infer<typeof ItemUpdateReqSchema>;

export const ItemUpdateReqSchema = z.object({
  body: ItemUpdateSchema,
  params: IdObjectSchema,
});
