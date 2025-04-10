import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function ProductsHeader() {
  return (
    <header className="bg-black text-white py-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.jpg"
            alt="Logo da Barbearia"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <Link
          href="/"
          className="flex items-center gap-2 bg-white/10 hover:bg-cyan-300 text-white hover:text-black py-2 px-4 rounded-full transition-all"
        >
          <ArrowLeft size={18} />
          <span>Voltar</span>
        </Link>
      </div>
    </header>
  )
}
