"use client"

import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Input from "@/components/input"

const schema = z.object({
  name: z.string().min(1, "O campo nome é obrigatório"),
  email: z
    .string()
    .email("digite um email válido")
    .min(1, "O email é obrigatório"),
  phone: z.string().refine(
    value => {
      return (
        /^(?:\(\d{2}\)\s?)?\d{9}$/.test(value) ||
        /^\d{2}\s\d{9}$/.test(value) ||
        /^\d{11}$/.test(value)
      )
    },
    {
      message: "O número de telefone deve estar (DD) 9 9999-9999",
    }
  ),
  adress: z.string(),
})

type FormData = z.infer<typeof schema>

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const handleRegisterCustomer = (data: FormData) => {
    console.log(data)
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleRegisterCustomer)}>
      <div>
        <label className="mb-1 text-lg" htmlFor="name">
          Nome completo
        </label>

        <Input
          type="text"
          name="name"
          placeholder="Digite o nome completo"
          error={errors.name?.message}
          register={register}
        />
      </div>

      <section className="flex flex-col sm:flex-row gap-3 ">
        <div className="flex-1">
          <label className="mb-1 text-lg" htmlFor="phone">
            Telefone
          </label>

          <Input
            type="tel"
            name="phone"
            placeholder="(DD) 9 9999-9999"
            error={errors.phone?.message}
            register={register}
          />
        </div>

        <div className="flex-1">
          <label className="mb-1 text-lg" htmlFor="email">
            E-Mail
          </label>

          <Input
            type="email"
            name="email"
            placeholder="exemplo@email.com"
            error={errors.email?.message}
            register={register}
          />
        </div>
      </section>

      <div>
        <label className="mb-1 text-lg" htmlFor="adress">
          Endereço
        </label>

        <Input
          type="text"
          name="adress"
          placeholder="Digita o endereço"
          error={errors.adress?.message}
          register={register}
        />
      </div>

      <button
        type="submit"
        className="font-bold bg-purple-100 rounded-md mt-4 py-2 px-24 sm:self-center hover:bg-purple-200 duration-200"
      >
        Cadastrar
      </button>
    </form>
  )
}

export default Form
