"use client"

import { FiTrash2 } from "react-icons/fi"
import CustomerProps from "@/utils/customer.type"
import api from "@/lib/api"
import { useRouter } from "next/navigation"

const Card = ({ customer }: { customer: CustomerProps }) => {
  const router = useRouter()


  const handleDeleteCustomer = async () => {
    try {
      const response = await api.delete("/api/customer", {
        params: {
          id: customer.id,
        },
      })
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <article className="w-full justify-between items-start flex p-3 border rounded-lg hover:bg-gray-50 duration-200">
      <div>
        <h2>
          <span className="font-bold">Nome: </span> {customer.name}
        </h2>

        <p>
          <span className="font-bold">E-mail: </span> {customer.email}
        </p>

        <p>
          <span className="font-bold">Número: </span> {customer.phone}
        </p>
      </div>

      <button
        onClick={handleDeleteCustomer}
        className="w-fit  hover:-translate-y-1 duration-200 rounded-md font-bold"
      >
        <FiTrash2 fill="#F0D6D6" size={24} />
      </button>
    </article>
  )
}

export default Card
