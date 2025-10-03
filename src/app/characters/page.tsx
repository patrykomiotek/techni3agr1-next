// import { } from '@prisma/client';

import { CharactersList } from "@/features/characters/components/CharactersList";
import { fetchCharacters } from "@/features/characters/services/fetch-characters";

export default async function CharactersPage() {
  const data = await fetchCharacters();
  const records = 

  return (
    <div>
      <h2>Characters List</h2>
      <CharactersList data={data.results} />
    </div>
  );
}
