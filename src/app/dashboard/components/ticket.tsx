import { FiTrash2, FiFile } from "react-icons/fi"

const Ticket = () => {
  return (
    <>
      <tr className="h-14 border-b last:border-b-0 hover:bg-gray-50 duration-200">
        <td>Fulano da Silva</td>

        <td className="hidden sm:table-cell">07/09/1998</td>

        <td>
          <span className="px-2 py-1 bg-green-100 rounded-md"> Aberto </span>
        </td>

        <td className="table-cell">
          <button className="hover:scale-125 duration-200">
            <FiTrash2 fill="#F0D6D6" size={24} />
          </button>

          <button className="hover:scale-125 duration-200 ml-2">
            <FiFile fill="#D6E0F1" size={24} />
          </button>
        </td>
      </tr>
    </>
  )
}

export default Ticket
