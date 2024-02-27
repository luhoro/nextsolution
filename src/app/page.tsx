import Image from "next/image"
import hero from "@/assets/hero.svg"

export default function Home() {
  return (
    <main className="flex items-center flex-col justify-center min-h-[calc(100vh-84px)] text-center">
      <h2 className="text-2xl mb-3">Gerencie sua empresa</h2>
      <h1 className="font-bold text-3xl mb-8 text-purple-700">
        Solucione os problemas
      </h1>

      <Image
        src={hero}
        width={500}
        alt="Imagem hero do next Solution"
        className="w-full max-w-sm md:max-w-xl "
      />
    </main>
  )
}
