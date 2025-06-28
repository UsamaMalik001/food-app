// lib/schemas/task.ts
import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(3, "Title is required"),
  description: z.string().min(5, "Description is required"),
  image: z
    .custom<File>()
    .refine(
      (file) => file instanceof File && file.size > 0,
      "Image is required"
    ),
});

export type TaskFormData = z.infer<typeof taskSchema>;
