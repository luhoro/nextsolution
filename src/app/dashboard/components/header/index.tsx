import Container from "@/components/container"
import Link from "next/link"

const DashboardHeader = () => {
  return (
    <Container>
      <header className="bg-purple-900 font-bold text-white my-6 p-3 flex gap-4 rounded-tl-2xl rounded-br-2xl items-center">
        <Link 
          className="hover:-translate-y-1 duration-200" 
          href="/dashboard"
        >
          Tickets
        </Link>
        <Link 
          className="hover:-translate-y-1 duration-200" 
          href="/dashboard/customer"
        >
          Clientes
        </Link>
      </header>
    </Container>
  )
}

export default DashboardHeader
