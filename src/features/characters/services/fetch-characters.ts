import { ApiListResponse } from "@/shared/contracts/api-list-response.dto";
import { api } from "@/shared/api";

import { Character } from "../contracts/product.dto";

// export const fetchCharacters = async () => {
//   const response = await fetch(`${API_BASE_URL}/character`);
//   const data = (await response.json()) as ApiListResponse<Character>;

//   return data;
// };

export const fetchCharacters = async () => {
  const response = await api.get<ApiListResponse<Character[]>>("/character");

  return response.data;
};

// export const createCharacters = async () => {
//   const response = await api.post<ApiListResponse<Character[]>>("/character", {

//   });

//   return response.data;
// };
