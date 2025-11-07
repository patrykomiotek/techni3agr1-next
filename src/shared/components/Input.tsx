"use client";

import { useId, type ComponentProps } from "react";
import { FieldError } from "react-hook-form";

type Props = {
  label?: string;
  error?: FieldError;
} & ComponentProps<"input">;

export const Input = ({ label, id, error, ...rest }: Props) => {
  const reactId = useId();
  const elemId = id ? id : reactId;

  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={elemId} className="mb-1 text-sm font-medium">
          {label}
        </label>
      )}
      <input id={elemId} className="border rounded-lg p-2" {...rest} />
      {error && (
        <span className="text-red-600 text-sm mt-1">{error.message}</span>
      )}
    </div>
  );
};
