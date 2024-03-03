"use client"

import Link from "next/link"
import { FiUser, FiLogOut, FiLoader, FiLock } from "react-icons/fi"
import { signIn, signOut, useSession } from "next-auth/react"

const Header = () => {
  const { status, data } = useSession()

  return (
    <header className="flex justify-center bg-purple-50  border-b">
      <div className="w-full flex items-center justify-between max-w-7xl px-5 py-6">
        <Link href="/">
          <h1 className="font-bold text-2xl hover:tracking-widest duration-200">
            <span className="font-medium font-jua text-purpleMain">Next</span>{" "}
            Solution
          </h1>
        </Link>

        {status === "loading" && (
          <button>
            <FiLoader
              size={28}
              color="#763ad8"
              className="animate-spin"
            />
          </button>
        )}

        {status === "unauthenticated" && (
          <button onClick={async () => await signIn()}>
            <FiLock
              size={28}
              color="#763ad8"
              className="hover:opacity-70 duration-300"
            />
          </button>
        )}

        {status === "authenticated" && (
          <div className="flex gap-6">
            <Link href="/dashboard">
              <FiUser
                size={28}
                color="#763ad8"
                className="hover:opacity-70 duration-300"
              />
            </Link>

            <Link href="/" onClick={async () => await signOut()}>
              <FiLogOut
                size={28}
                color="#9A6FDF"
                className="hover:opacity-70 duration-300"
              />
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
