import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Mail, Phone, MessageCircle } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white pb-10 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-300 rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4">
        {/* Linha divisória */}
        <div className="mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Studio O Barba | CNPJ: 12.345.678/0001-90
            </p>

            <div>
              <p className="text-sm text-white/50">Desenvolvido por <Link href="https://www.instagram.com/aalisonzz" className="text-white hover:text-cyan-300 transition-colors" target="_blank">
                  Alison Eleotério
                </Link>                
              </p>
              
            </div>

            <div className="flex space-x-6 text-sm text-white/50">
              <Link href="/politica-de-privacidade" className="hover:text-cyan-300 transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos-de-uso" className="hover:text-cyan-300 transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
