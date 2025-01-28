import { nonempty } from "@/core/utils/formUtils";
import { z } from "zod";
export interface PostType {
  id: number;
  title: string;
  tags: string;
  content: string;
  author: number;
  package?: number;
}
export const postSchema = z.object({
  id: z.number().optional().nullable(),
  title: z.string().pipe(nonempty),
  tags: z.string().pipe(nonempty),
  content: z.string().pipe(nonempty),
  author: z.number().optional(),
  package: z.number().optional(),
});
export type PostFormInputs = z.infer<typeof postSchema>;
