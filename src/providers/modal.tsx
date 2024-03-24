"use client"
import { createContext, ReactNode, useState } from "react"
import TicketProps from "@/utils/ticket.type"
import CustomerProps from "@/utils/customer.type"
import ModalTicket from "@/components/modal"

interface ModalContextData {
  visible: boolean
  handleModalVisible: () => void
  ticket: TicketInfo | undefined
}

interface TicketInfo {
  ticket: TicketProps
  customer: CustomerProps
}

export const ModalContext = createContext({} as ModalContextData)

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [visible, setVisible] = useState(false)
  const [ticket, setTicket] = useState<TicketInfo>()

  const handleModalVisible = () => {
    setVisible(!visible)
  }

  return (
    <ModalContext.Provider value={{ visible, handleModalVisible, ticket }}>
      {visible && (
        <ModalTicket />
      )}
      {children}
    </ModalContext.Provider>
  )
}
