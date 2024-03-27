"use client"
import CustomerProps from "@/utils/customer.type"
import TicketProps from "@/utils/ticket.type"
import { FiCheckCircle, FiFile } from "react-icons/fi"
import {api} from '@/lib/api'
import { useRouter } from "next/navigation"

import { useContext } from "react"
import { ModalContext } from "@/providers/modal"

interface TicketCardProps {
  ticket: TicketProps
  customer: CustomerProps | null
}

const Ticket = ({ customer, ticket }: TicketCardProps) => {
  const router = useRouter()
  const {handleModalVisible, setDetailTicket} = useContext(ModalContext)

  const handleChangeStatus = async () => {
    try {
      const response = await api.patch("/api/ticket", {
        id: ticket.id
      })
      
      router.refresh()
      
    } catch (error) {
      console.log(error)
    }
  }

  const handleOpenModal = () => {
    handleModalVisible()
    setDetailTicket({
      customer: customer,
      ticket: ticket
    })
  }

  return (
    <>
      <tr className="h-14 border-b last:border-b-0 hover:bg-gray-50 duration-200">
        <td>{customer?.name}</td>

        <td className="hidden sm:table-cell">
          {ticket.created_at?.toLocaleDateString("pt-br")}
        </td>

        <td>
            <span className={`px-2 py-1 rounded-md 
              ${ticket.status === "ABERTO" ? "bg-green-100" : "bg-red-100"}`
            }>
              {ticket.status}
            </span>

        </td>

        <td className="table-cell">
          <button className="hover:-translate-y-1 duration-200" onClick={handleChangeStatus}>
            <FiCheckCircle fill="#D6E7F1" size={24} />
          </button>

          <button onClick={handleOpenModal} className="hover:-translate-y-1 duration-200 ml-2">
            <FiFile fill="#F1E2D6" size={24} />
          </button>
        </td>
      </tr>
    </>
  )
}

export default Ticket