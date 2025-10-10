import { z } from "zod";

export const createCharacterSchema = z.object({
  name: z.string().min(1, { error: "Name is required" }),
  status: z.enum(["Dead", "Alive"], { error: "Invalid status" }),
  species: z.string().min(1, { error: "Species is required" }),
});
