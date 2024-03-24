"use client"
import React from "react"

const ModalTicket = () => {
  return (
    <section className="absolute bg-black/40 w-full min-h-full ">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-white shadow-xl w-4/5 md:w-1/2 max-w-2xl p-4 rounded">
          <h1>Detalhes do chamado</h1>
        </div>
      </div>
    </section>
  )
}

export default ModalTicket
