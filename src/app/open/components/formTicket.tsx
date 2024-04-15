"use client"
import Input from "@/components/input"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import api from "@/lib/api"
import { CustomerDataInfo } from "../page"
import { useState } from "react"

const schema = z.object({
  name: z.string().min(1, "O nome do chamado é obrigatório"),
  description: z.string().min(1, "Escreva um pouo sobre o seu problema"),
})

type FormData = z.infer<typeof schema>

interface FormTicketProps {
  customer: CustomerDataInfo
}

const FormTicket = ({ customer }: FormTicketProps) => {
  const [popUp, setPopUp] = useState(false)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const handleRegister = async (data: FormData) => {
    const response = await api.post("/api/ticket", {
      name: data.name,
      description: data.description,
      customerId: customer.id,
    })

    setValue("name", "")
    setValue("description", "")
    setPopUp(true)

    setInterval(() => (setPopUp(false)), 3000)
  }

  return (
    <form
      className="flex flex-col gap-4 mt-6 relative"
      onSubmit={handleSubmit(handleRegister)}
    >
      <div>
        <label className="text-lg">Nome do chamado</label>
        <Input
          register={register}
          type="text"
          placeholder="Digte o nome do chamado"
          name="name"
          error={errors.name?.message}
        />
      </div>

      <div>
        <label className="text-lg">Descrição do problema</label>
        <textarea
          className="w-full border rounded-md h-24 resize-none p-2"
          placeholder="Descreva o seu problema"
          id="description"
          {...register("description")}
        ></textarea>
        {errors.description?.message && (
          <p className="text-red-400">{errors.description.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full font-bold bg-purple-100 rounded-md py-3 hover:bg-purple-200 duration-200"
      >
        Criar ticket
      </button>

      {popUp && (
        <div
          id="popUp"
          className="absolute -bottom-28 bg-green-100 p-2 px-8 rounded-lg self-center"
        >
          <h4 className="text-lg font-bold text-center ">
            Ticket cadastrado com sucesso!
          </h4>
        </div>
      )}
    </form>
  )
}

export default FormTicket
