// type Options = ('a' | 'b' | 'c') & 'd';

type CharacterStatus = "Alive" | "Dead";
type CharacterGender = "Male" | "Female";

interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  gender: CharacterGender;
}

interface ApiListResponse<T> {
  info: {
    count: number;
    pages: number;
    next: string;
    prev: number | null;
  };
  results: T[];
}

export default async function CharactersPage() {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = (await response.json()) as ApiListResponse<Character>;

  return (
    <div>
      <h2>Characters List</h2>
      {data.results.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
    </div>
  );
}
