export type CharacterStatus = "Alive" | "Dead";
export type CharacterGender = "Male" | "Female";

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  gender: CharacterGender;
}
