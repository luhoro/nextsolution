import type { Metadata } from "next"
import { Khula } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { AuthProvider } from "@/providers/auth"
import { ModalProvider } from "@/providers/modal"

const khula = Khula({
  weight: ["300", "400", "600", "700", "800"],
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Next Solution - A solução para se gerenciar",
  description: "Sua solução para gerenciar sua empresa de forma eficaz",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={khula.className}>
        <AuthProvider>
          <ModalProvider>
            <Header />
            {children}
          </ModalProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
