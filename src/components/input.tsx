"use client"

import { RegisterOptions, UseFormRegister } from "react-hook-form"

interface InputProps {
  type: string
  placeholder: string
  name: string
  register: UseFormRegister<any>
  error?: string
  rules?: RegisterOptions
}

const Input = ({
  name,
  placeholder,
  type,
  register,
  rules,
  error,
}: InputProps) => {
  return (
    <>
      <input
        className="w-full border rounded-md p-2"
        type={type}
        placeholder={placeholder}
        {...register(name, rules)}
        id={name}
      />
      {error && <p className="my-2 text-red-500">{error}</p>}
    </>
  )
}

export default Input