import { z } from 'zod';

import { PRODUCT_TYPE } from './common';
import { number, string } from './helpers';

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
});
