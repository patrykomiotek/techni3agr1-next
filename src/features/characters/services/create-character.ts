"use server";

import db from "@/shared/lib/db";

import {
  CreateCharacterDto,
  createCharacterSchema,
} from "../contracts/character.dto";

export async function createCharacter(data: CreateCharacterDto) {
  // createCharacterSchema.parse(data)
  const validationResult = createCharacterSchema.safeParse(data);

  if (!validationResult.success) {
  } else {
    await db.character.create({
      data: data,
    });
  }

  // save to db
}
