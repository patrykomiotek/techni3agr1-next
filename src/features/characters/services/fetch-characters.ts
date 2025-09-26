import { ApiListResponse } from "@/shared/contracts/api-list-response.dto";
import { API_BASE_URL } from "@/shared/consts";

import { Character } from "../contracts/product.dto";

export const fetchCharacters = async () => {
  const response = await fetch(`${API_BASE_URL}/character`);
  const data = (await response.json()) as ApiListResponse<Character>;

  return data;
};
