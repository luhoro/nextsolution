"use client"
import { MouseEvent, useContext, useRef } from "react"
import { ModalContext } from "@/providers/modal"
import { FaRegTimesCircle } from "react-icons/fa"

const ModalTicket = () => {
  const { handleModalVisible, ticket } = useContext(ModalContext)
  const modalRef = useRef<HTMLDivElement | null>(null)

  const handleModalClick = (event: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      handleModalVisible()
    }
  }

  return (
    <section
      onClick={handleModalClick}
      className="absolute bg-black/50 w-full min-h-full "
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          ref={modalRef}
          className="bg-white shadow-xl w-4/5 max-w-2xl p-4 rounded-lg"
        >
          <div className="flex items-center justify-between mb-3">
            <h2 className="font-bold text-lg md:text-2xl">
              Detalhes do chamado
            </h2>

            <button
              onClick={handleModalVisible}
              className="bg-purple-100 rounded-full hover:-translate-y-1 duration-200"
            >
              <FaRegTimesCircle size={24} color="#444444" />
            </button>
          </div>

          <div className="flex flex-col gap-2 mb-5">
            <div className="flex flex-wrap gap-1 ">
              <h3 className="font-bold">Nome:</h3>
              <p>{ticket?.ticket.name}</p>
            </div>

            <div className="flex flex-wrap  gap-1">
              <h3 className="font-bold">Descrição:</h3>
              <p>{ticket?.ticket.description}</p>
            </div>
          </div>

          <div className="w-full border-b border-gray-500" />

          <div className="flex flex-col gap-2 mt-5">
            <h2 className="font-bold text-lg md:text-2xl mb-1">
              Detalhes do cliente
            </h2>

            <div className="flex flex-wrap gap-1 ">
              <h3 className="font-bold">Nome:</h3>
              <p>{ticket?.customer?.name}</p>
            </div>

            <div className="flex flex-wrap gap-1 ">
              <h3 className="font-bold">Telefone:</h3>
              <p>{ticket?.customer?.phone}</p>
            </div>

            <div className="flex flex-wrap gap-1 ">
              <h3 className="font-bold">E-mail:</h3>
              <p>{ticket?.customer?.email}</p>
            </div>

            {ticket?.customer?.address && (
              <div className="flex flex-wrap gap-1 ">
                <h3 className="font-bold">Endereço:</h3>
                <p>{ticket?.customer?.address}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModalTicket
