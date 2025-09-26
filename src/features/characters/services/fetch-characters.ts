import { ApiListResponse } from "@/shared/contracts/api-list-response.dto";
import { Character } from "../contracts/product.dto";

export const fetchCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = (await response.json()) as ApiListResponse<Character>;

  return data;
};
