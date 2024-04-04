"use client"
import { useState } from "react"
import Input from "@/components/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FiSearch } from "react-icons/fi"

const schema = z.object({
  email: z
    .string()
    .email("Digite o e-mail do cliente para lozalizar")
    .min(1, "O campo e-mail é obrigatório!"),
})

type FormData = z.infer<typeof schema>

interface CustomerDataInfo {
  id: string
  name: string
}

const OpenTicket = () => {
  const [customer, setCustomer] = useState<CustomerDataInfo | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  return (
    <div className="mt-24 mb-8 max-w-2xl mx-auto px-8 py-11 bg-gray-10 rounded-xl shadow-thin">
      <h1 className="font-bold text-3xl text-center mb-8">Abrit ticket</h1>

      {
        customer? (
          <div>

          </div>
        ) : (
          <form className="flex flex-col gap-6">
          <Input
            name="email"
            placeholder="Digite o e-mail do cliente..."
            type="text"
            error={errors.email?.message}
            register={register}
          />
  
          <button className="w-full flex gap-4 items-center justify-center font-bold bg-purple-100 rounded-md py-3 sm:self-center hover:bg-purple-200 duration-200">
            Procurar cliente
            <FiSearch size={24} />
          </button>
        </form>
        )
      }
    </div>
  )
}

export default OpenTicket
