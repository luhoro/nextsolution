import Container from "@/components/container";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import React from 'react'

const Customer = async () => {
  const session = await getServerSession(authOptions) 

  if (!session || !session.user) {
    redirect("/")
  }

  return (
    <Container>
      <main>
        <h1>Meus clientes</h1>
      </main>
    </Container>
  )
}

export default Customer