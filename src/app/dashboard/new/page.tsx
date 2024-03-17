import Container from "@/components/container"
import Link from "next/link"
import React from "react"
import { FaArrowLeft } from "react-icons/fa"

import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { redirect } from "next/navigation"
import prismaClient from "@/lib/prisma"

const NewTicket = async () => {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect("/")
  }

  const customers = await prismaClient.customer.findMany({
    where: {
      userId: session.user.id,
    },
  })

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

            {customers.length !== 0 && (
              <select name="client" className="w-full border rounded-md p-2">
                {customers.map(customer => (
                  <option key={customer.id} value={customer.id}>
                    {customer.name}
                  </option>
                ))}
              </select>
            )}

            {customers.length === 0 && (
              <div className="w-full border rounded-md p-2">
                <p className="text-gray-500">
                  Você não possui um cliente cadastrado! Acesse{" "}
                  <Link
                    className="text-purpleMain underline hover:text-black"
                    href="/dashboard/customer/new"
                  >
                    aqui
                  </Link>{" "}
                  para cadastrar.
                </p>
              </div>
            )}
          </div>

          <button
            type="submit"
            className="font-bold bg-purple-100 rounded-md mt-4 py-2 px-24 sm:self-center hover:bg-purple-200 duration-200 disabled:opacity-60 hover:disabled:bg-purple-100 disabled:cursor-not-allowed"
            disabled={customers.length === 0 ? true : false}
          >
            Cadastrar
          </button>
        </form>
      </main>
    </Container>
  )
}

export default NewTicket