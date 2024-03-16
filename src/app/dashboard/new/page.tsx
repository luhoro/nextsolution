import Container from "@/components/container"
import Link from "next/link"
import React from "react"
import { FaArrowLeft } from "react-icons/fa"

const NewTicket = () => {
  return (
    <Container>
      <main>
        <div className="flex gap-4 py-4 mb-8">
          <Link
            href="/dashboard/customer"
            className="hover:-translate-x-1 duration-200"
          >
            <FaArrowLeft size={24} color="#763ad8" />
          </Link>

          <h1 className="text-3xl font-bold">Novo ticket</h1>
        </div>

        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="name" className="mb-1 text-lg">
              Nome do ticket
            </label>

            <input
              name="name"
              type="text"
              placeholder="Digite o nome do chamado"
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label htmlFor="description" className="mb-1 text-lg">
              Descrição do problema
            </label>

            <textarea
              name="description"
              placeholder="Descreva o problema"
              className="w-full border rounded-md p-2 h-24 resize-none"
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="client" className="mb-1 text-lg">
              Selecione o cliente
            </label>

            <select name="client" className="w-full border rounded-md p-2">
              <option value="cliente1">Cliente 1</option>
              <option value="cliente2">Cliente 2</option>
            </select>
          </div>
        </form>
      </main>
    </Container>
  )
}

export default NewTicket
