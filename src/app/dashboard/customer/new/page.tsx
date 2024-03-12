import Container from "@/components/container"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import Link from "next/link"
import { redirect } from "next/navigation"
import { FaArrowLeft } from "react-icons/fa"
import Form from "../components/form"


const NewCustomer = async () => {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    redirect("/")
  }

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

          <h1 className="text-3xl font-bold">Novo cliente</h1>
        </div>

        <Form userId={session.user.id}/>
      </main>
    </Container>
  )
}

export default NewCustomer
