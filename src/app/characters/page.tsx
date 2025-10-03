import db from "@/shared/lib/db";

// import { CharactersList } from "@/features/characters/components/CharactersList";
// import { fetchCharacters } from "@/features/characters/services/fetch-characters";

export default async function CharactersPage() {
  // const data = await fetchCharacters();
  const records = await db.character.findMany();

  // await db.character.create({
  //   data: {
  //     name: "Test 3",
  //     species: "human",
  //     status: "alive",
  //   },
  // });

  // await db.character.update({
  //   data: {},
  //   where: {
  //     id:
  //   }
  // })

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
