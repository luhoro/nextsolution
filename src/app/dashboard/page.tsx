import Container from "@/components/container"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import Link from "next/link"
import { redirect } from "next/navigation"
import Ticket from "./components/ticket"

const Dashboard = async () => {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    redirect("/")
  }

  return (
    <Container>
      <main>
        <div className="flex items-center justify-between py-4 mb-8 ">
          <h1 className="text-3xl font-bold">Tickets</h1>
          <Link
            href="/dashboard/new"
            className="px-2 py-1 rounded-md border bg-purple-50 hover:bg-purple-100 font-bold duration-200"
          >
            Abrir ticket
          </Link>
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
            <Ticket />
            <Ticket />
          </tbody>
        </table>
      </main>
    </Container>
  )
}

export default Dashboard
