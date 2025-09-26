import { Character } from "../contracts/product.dto";

type Props = {
  data: Character[];
};

export const CharactersList = ({ data }: Props) => {
  return (
    <>
      {data.map((elem) => (
        <div key={elem.id}>{elem.name}</div>
      ))}
    </>
  );
};
