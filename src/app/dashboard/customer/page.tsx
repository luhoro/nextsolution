import Container from "@/components/container"
import { authOptions } from "@/lib/auth"
import { getServerSession } from "next-auth"
import Link from "next/link"
import { redirect } from "next/navigation"

import React from "react"
import Card from "./components/card"

const Customer = async () => {
  const session = await getServerSession(authOptions)

  if (!session || !session.user) {
    redirect("/")
  }

  return (
    <Container>
      <main>
        <div className="flex items-center justify-between py-4 mb-8 ">
          <h1 className="text-3xl font-bold">Meus clientes</h1>
          <Link
            href="/dashboard/customer/new"
            className="px-3 py-2 rounded-md border bg-purple-50 hover:bg-purple-100 font-bold duration-200"
          >
            Novo cliente
          </Link>
        </div>

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Card />
          <Card />
          <Card />
        </section>
      </main>
    </Container>
  )
}

export default Customer
