import { z } from 'zod';

export const CreateUserSchema = z
  .object({
    name: z.string(),
    password: z.string(),
    phone: z.string(),
    gender: z.string(),
  })
  .required();

export type CreateUserDto = z.infer<typeof CreateUserSchema>;
