import db from "@/shared/lib/db";

// import { CharactersList } from "@/features/characters/components/CharactersList";
// import { fetchCharacters } from "@/features/characters/services/fetch-characters";

export default async function CharactersPage() {
  // const data = await fetchCharacters();
  const records = await db.character.findMany();

  return (
    <div>
      <h2>Characters List</h2>
      {/* <CharactersList data={data.results} /> */}

      {records.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
    </div>
  );
}
