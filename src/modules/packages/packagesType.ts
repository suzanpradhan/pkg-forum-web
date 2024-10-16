import { nonempty } from "@/core/utils/formUtils";
import { z } from "zod";

//images
const imageFile = z.instanceof(File).refine(
  (file) => {
    const acceptedImageTypes = [
      'image/jpeg',
      'image/png',
      'image/gif',
      'image/bmp',
      'image/webp',
      'image/svg',
    ];
    return acceptedImageTypes.includes(file.type);
  },
  {
    message: 'Invalid file type. Only image files are allowed.',
  }
);

export interface Social {
  id: number;
  link: string;
  social: string;
}
export interface PackageType {
  id: number;
  registry: number;
  socials: Social[];
  title: string;
  description: string;
  version: string;
  packageId: string; 
  githubUrl?: string;
  websiteUrl?: string;
  cover_image:string;
  image:string;
}
const socialSchema = z.object({
  id: z.number(),
  link: z.string(),
  social: z.string()
});
export const packageTypeSchema = z.object({
  id: z.number(),
  registry: z.number(),
  socials: z.array(socialSchema),
  title: z.string(),
  description: z.string(),
  version: z.string().pipe(nonempty),
  githubUrl: z.string().optional(),
  websiteUrl: z.string().optional(),
  cover_image:imageFile.optional().nullable(),
  image:imageFile.optional().nullable(),
});
export type PackageTypeValidation = z.infer<typeof packageTypeSchema>;


