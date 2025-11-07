"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";

import { CreateUserDto, createUserSchema } from "../../contracts/users";
import { authClient } from "@/shared/lib/auth-client";

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateUserDto>({
    resolver: zodResolver(createUserSchema),
  });

  const handleUserSignUp: SubmitHandler<CreateUserDto> = async (formData) => {
    const { data, error } = await authClient.signUp.email({
      name: formData.name, // required
      email: formData.email, // required
      password: formData.password, // required
      image: "https://example.com/image.png",
      // callbackURL: "https://example.com/callback",
      callbackURL: "/",
    });
  };

  return (
    <form onSubmit={handleSubmit(handleUserSignUp)}>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" {...register("name")} className="outline" />
      </div>
      <div>
        <label htmlFor="email">E-mail</label>
        <input id="email" {...register("email")} className="outline" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password")}
          className="outline"
        />
      </div>
      <div>
        <button type="submit" className="outline">
          Register
        </button>
      </div>
    </form>
  );
};
