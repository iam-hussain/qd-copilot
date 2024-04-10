import { z } from "zod";
import { string } from "./helpers";

export const IdObjectSchema = z.object({ id: string() });

export const ParamIdReqSchema = z.object({
  params: IdObjectSchema,
});

export const PRODUCT_TYPE = z.enum(["VEG", "NON_VEG", "VEGAN"]);

export const ORDER_TYPE = z.enum([
  "DINING",
  "TAKE_AWAY",
  "PICK_UP",
  "DELIVERY",
  "PLATFORM",
]);

export const ORDER_STATUS = z.enum([
  "DRAFT",
  "PLACED",
  "ACCEPTED",
  "PROGRESS",
  "READY",
  "OUT_FOR_DELIVERY",
  "COMPLETED",
]);

export const CALC_VALUE_TYPE = z.enum(["VALUE", "PERCENTAGE", "VALUE_COUNT"]);
