import { NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import prismaClient from "@/lib/prisma"

export const POST = async (request: Request) => {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 })
  }

  const { name, email, phone, address, userId } = await request.json()

  try {
    await prismaClient.customer.create({
      data: {
        name,
        phone,
        email,
        address: address ? address : "",
        userId,
      },
    })

    return NextResponse.json({ message: "Cliente cadastrado com sucesso!" })
  } catch (err) {
    return NextResponse.json(
      { error: "Failed create new customer" },
      { status: 400 }
    )
  }
}

export const DELETE = async (request: Request) => {
  const session = await getServerSession(authOptions)
  if (!session || !session.user) {
    return NextResponse.json({ error: "Not authorized" }, { status: 401 })
  }

  const { searchParams } = new URL(request.url)
  const userId = searchParams.get("id")

  if (!userId) {
    return NextResponse.json({ error: "Fail delete customer" }, { status: 401 })
  }

  try {
    await prismaClient.customer.delete({
      where: {
        id: userId as string,
      },
    })
    return NextResponse.json({ message: "Sucess delete customer" })

  } catch (error) {
    console.log(error)
    return NextResponse.json({ error: "Fail delete customer" }, { status: 401 })
  }
}
