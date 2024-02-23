import Link from "next/link"
import { FiUser, FiLogIn, FiLogOut } from "react-icons/fi"

const Header = () => {
  return (
    <header className="flex justify-center px-4 py-6 bg-slate-200 shadow-xl">
      <div className="w-full flex items-center justify-between max-w-7xl">
        <Link href="/">
          <h1 className="font-bold text-2xl hover:tracking-widest duration-200">
            <span className="font-medium font-jua text-purpleMain">Next</span>{" "}
            Solution
          </h1>
        </Link>

        <div className="flex gap-6">
          <Link href="/dashboard">
            <FiUser size={28} color="#763ad8" className="hover:opacity-70 duration-300"/>
          </Link>

          <Link href="/">
            <FiLogOut size={28} color="#763ad8" className="hover:opacity-70 duration-300"/>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header