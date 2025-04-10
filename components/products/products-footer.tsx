import Link from "next/link"
import { Facebook, Instagram, Twitter, MessageCircle } from "lucide-react"

export default function ProductsFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2">Produtos - O Barba</h3>
            <p className="text-white/70">Produtos de qualidade para cuidados masculinos</p>
          </div>

          <div className="flex space-x-4 mb-6 md:mb-0">
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-cyan-300 text-white hover:text-black p-2.5 rounded-full transition-all"
              aria-label="Facebook"
            >
              <MessageCircle size={18} />
            </a>
            <a
              href="https://instagram.com/obarbastudio/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-cyan-300 text-white hover:text-black p-2.5 rounded-full transition-all"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>

          <div>
            <Link href="/" className="text-white/70 hover:text-cyan-300 transition-colors">
              Voltar para a página inicial
            </Link>
          </div>
        </div>

        <div className="border-t border-white/10 mt-6 pt-6 text-center">
          <p className="text-white/50 text-sm">&copy; {currentYear} Studio O Barba | Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  )
}
