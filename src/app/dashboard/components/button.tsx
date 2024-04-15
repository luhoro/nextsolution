"use client"
import { useRouter } from "next/navigation"
import { LuRefreshCw } from "react-icons/lu"

const Button = () => {
  const router = useRouter()

  return (
    <button onClick={() => router.refresh()}>
      <LuRefreshCw 
        size={24} 
        color="#5A1BC0" 
        className=" hover:stroke-purpleLight transition-all duration-200"
      />
    </button>
  )
}

export default Button