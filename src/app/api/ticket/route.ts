import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import prismaClient from "@/lib/prisma"

export const PATCH = async (request: Request) => {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    return NextResponse.json({ error: "Not Authorized" }, { status: 401 })
  }

  const { id } = await request.json()

  const findTicket = await prismaClient.ticket.findFirst({
    where: {
      id: id as string,
    },
  })

  if (!findTicket) {
    return NextResponse.json({ error: "Fail to close ticket" }, { status: 400 })
  }

  try {
    await prismaClient.ticket.update({
      where: {
        id: id as string,
      },
      data: {
        status: "FECHADO",
      },
    })

    return NextResponse.json({ message: "Ticket succesfully updated" })
  } catch (error) {
    console.log(error)
  }
}

export const POST = async (request: Request) => {
  const { customerId, name, description } = await request.json()

  if (!customerId || !name || !description) {
    return NextResponse.json({ error: "Fail to close ticket" }, { status: 400 })
  }

  try {
    await prismaClient.ticket.create({
      data: {
        name: name,
        description: description,
        status: "ABERTO",
        customerId: customerId,
      },
    })
    
    return NextResponse.json({ message: "Ticket succesfully opened" })
  } catch (error) {
    return NextResponse.json({ error: "Fail to open ticket" }, { status: 400 })
  }
}
