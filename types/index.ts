import { z } from "zod";

export const productSchema = z.object({
   title: z.string().min(3),
   description: z.string().min(10),
});

export type TproductData = z.infer<typeof productSchema>;

export type TlogoMarqueeProps = {
   children: React.ReactNode;
   baseVelocity: number;
};
export type TperspectiveTextProps = {
   children: React.ReactNode;
};