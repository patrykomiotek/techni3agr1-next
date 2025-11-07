import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";
import { LoginUserDto, loginUserSchema } from "../../contracts/users";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/shared/components/Input";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginUserDto>({
    resolver: zodResolver(loginUserSchema),
  });

  const onSubmit: SubmitHandler<LoginUserDto> = (data) => {};

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 w-80 p-6"
    >
      <h2 className="text-xl font-bold text-center">Register</h2>

      <Input label="E-mail" type="email" {...register("email")} />

      {/* <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium">Email</label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="border rounded-lg p-2"
        />
        {errors.email && (
          <span className="text-red-600 text-sm mt-1">
            {errors.email.message}
          </span>
        )}
      </div> */}

      <Input label="Password" type="password" {...register("password")} />

      {/* <div className="flex flex-col">
        <label className="mb-1 text-sm font-medium">Password</label>
        <input
          id="password"
          type="password"
          {...register("password")}
          className="border rounded-lg p-2"
        />
        {errors.password && (
          <span className="text-red-600 text-sm mt-1">
            {errors.password.message}
          </span>
        )}
      </div> */}
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
      >
        Register
      </button>
      <Link
        href="/"
        className="border-blue-500 border-1 text-white p-2 rounded-lg hover:bg-slate-800"
      >
        Go back
      </Link>
    </form>
  );
};
