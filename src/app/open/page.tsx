"use client"
import { useState } from "react"
import Input from "@/components/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { FiSearch } from "react-icons/fi"
import { FaRegTimesCircle } from "react-icons/fa"
import FormTicket from "./components/formTicket"
import api from "@/lib/api"

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
    setError,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const handleClearCustomer = () => {
    setCustomer(null)
    setValue("email", "")
  }

  const handleSearchCustomer = async (data: FormData) => {
    const response = await api.get("/api/customer", {
      params: {
        email: data.email,
      },
    })

    if (response.data === null) {
      setError("email", {
        type: "custom",
        message: "Ops, o cliente não foi encontrado!",
      })
      return
    }

    setCustomer({
      id: response.data.id,
      name: response.data.name,
    })
  }

  return (
    <main className="mt-24 mb-8 max-w-2xl mx-auto px-8 py-11 bg-gray-10 rounded-xl shadow-thin">
      <h1 className="font-bold text-3xl text-center mb-8">Abrir ticket</h1>

      {customer ? (
        <div className="flex items-center justify-between gap-6 border p-2 rounded-md bg-gray-50">
          <p className="text-lg">
            <strong>Cliente selecionado:</strong> {customer.name}
          </p>

          <button
            onClick={handleClearCustomer}
            className="hover:-translate-y-1 duration-200"
          >
            <FaRegTimesCircle size={24} color="#763ad8" />
          </button>
        </div>
      ) : (
        <form
          className="flex flex-col gap-6"
          onSubmit={handleSubmit(handleSearchCustomer)}
        >
          <Input
            name="email"
            placeholder="Digite o e-mail do cliente..."
            type="text"
            error={errors.email?.message}
            register={register}
          />

          <button
            type="submit"
            className="w-full flex gap-4 items-center justify-center font-bold bg-purple-100 rounded-md py-3 sm:self-center hover:bg-purple-200 duration-200"
          >
            Procurar cliente
            <FiSearch size={24} />
          </button>
        </form>
      )}

      {customer !== null && <FormTicket />}
    </main>
  )
}

export default OpenTicket
