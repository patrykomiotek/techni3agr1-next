"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import {
  CreateCharacterDto,
  createCharacterSchema,
} from "../contracts/character.dto";
import { zodResolver } from "@hookform/resolvers/zod";

export const CreateCharacterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateCharacterDto>({
    resolver: zodResolver(createCharacterSchema),
  });

  const onCreate: SubmitHandler<CreateCharacterDto> = (data) => {
    console.log({ data });
  };

  return (
    <form onSubmit={handleSubmit(onCreate)}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name")} />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
      </div>
      <div>
        <label htmlFor="status">Status</label>
        <select id="status" {...register("status")}>
          <option>-- select status --</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
        </select>
        {errors.status && (
          <p style={{ color: "red" }}>{errors.status.message}</p>
        )}
      </div>
      <div>
        <label htmlFor="species">Species</label>
        <input id="species" {...register("species")} />
        {errors.species && (
          <p style={{ color: "red" }}>{errors.species.message}</p>
        )}
      </div>
      <div>
        <button type="submit">Create</button>
      </div>
    </form>
  );
};
