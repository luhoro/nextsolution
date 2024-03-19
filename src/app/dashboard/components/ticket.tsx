import CustomerProps from "@/utils/customer.type"
import { TicketProps } from "@/utils/ticket.type"
import { FiTrash2, FiFile } from "react-icons/fi"

interface TicketCardProps {
  ticket: TicketProps
  customer: CustomerProps | null
}

const Ticket = ({ customer, ticket }: TicketCardProps) => {
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
          <button className="hover:-translate-y-1 duration-200">
            <FiTrash2 fill="#F0D6D6" size={24} />
          </button>

          <button className="hover:-translate-y-1 duration-200 ml-2">
            <FiFile fill="#D6E0F1" size={24} />
          </button>
        </td>
      </tr>
    </>
  )
}

export default Ticket