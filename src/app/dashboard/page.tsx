import Container from "@/components/container"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import Link from "next/link"
import { redirect } from "next/navigation"
import Ticket from "./components/ticket"

import prismaClient from "@/lib/prisma"
import Button from "./components/button"

const Dashboard = async () => {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    redirect("/")
  }

  const tickets = await prismaClient.ticket.findMany({
    where: {
      status: "ABERTO",
      customer: {
        userId: session.user.id,
      },
    },
    include: {
      customer: true,
    },
    orderBy: {
      created_at: "asc",
    },
  })

  return (
    <Container>
      <main>
        <div className="flex items-center justify-between py-4 mb-8 ">
          <h1 className="text-3xl font-bold">Tickets</h1>

          <div className="flex gap-3">
            <Button />
            <Link
              href="/dashboard/new"
              className="px-3 py-2  rounded-md border bg-purple-50 hover:bg-purple-100 font-bold duration-200"
            >
              Abrir ticket
            </Link>
          </div>
        </div>

        <table className="min-w-full text-left">
          <thead>
            <tr className="h-12 border-b border-black">
              <th className="text-bold">Cliente</th>
              <th className="text-bold hidden sm:table-cell">Cadastro</th>
              <th className="text-bold">Status</th>
              <th className="text-bold">#</th>
            </tr>
          </thead>

          <tbody>
            {tickets.map(ticket => (
              <Ticket
                key={ticket.id}
                customer={ticket.customer}
                ticket={ticket}
              />
            ))}
          </tbody>
        </table>

        {tickets.length === 0 && (
          <h2 className="text-lg mt-8 bg-gray-100 p-4 text-gray-700">
            Nenhum ticket aberto foi encontrado!
          </h2>
        )}
      </main>
    </Container>
  )
}

export default Dashboard
