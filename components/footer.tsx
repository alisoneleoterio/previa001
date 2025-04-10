import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, MapPin, Mail, Phone, MessageCircle } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white pt-20 pb-10 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-300 rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          {/* Logo e descrição */}
          <div className="md:col-span-4">
            {/* Substitua pelo logo real da barbearia */}
            <Image
              src="/logo-white.png"
              alt="Barbearia Logo"
              width={150}
              height={40}
              className="h-10 w-auto mb-6"
            />
            <p className="text-white/70 mb-6 text-lg">
              Oferecendo serviços de barbearia de alta qualidade desde 2015. Nosso compromisso é com a excelência e
              satisfação dos clientes.
            </p>
            <div className="flex space-x-4">
              {/* Substitua pelos links reais das redes sociais */}
              <a
                href="https://www.instagram.com/obarbastudio/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-cyan-300 text-white hover:text-black p-2.5 rounded-full transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://api.whatsapp.com/send?l=pt-BR&text=Olá,++vim+pelo+seu+site+!&phone=5512982769309&fbclid=PAZXh0bgNhZW0CMTEAAadi5Wj3skCbM5nNy9wFsqWVMYTVTRTD--QUHsg9UFzy_eVK-7dUbpMfVdOgWw_aem_fB9oHNYu9BaOT41DoVr4Zg"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-cyan-300 text-white hover:text-black p-2.5 rounded-full transition-all"
                aria-label="Facebook"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-6">Links Rápidos</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="#home" className="text-white/70 hover:text-cyan-300 transition-colors">
                Home
              </Link>
              <Link href="#services" className="text-white/70 hover:text-cyan-300 transition-colors">
                Serviços
              </Link>
              <Link href="#about" className="text-white/70 hover:text-cyan-300 transition-colors">
                Sobre
              </Link>
              <Link href="#testimonials" className="text-white/70 hover:text-cyan-300 transition-colors">
                Depoimentos
              </Link>
              <Link href="#contact" className="text-white/70 hover:text-cyan-300 transition-colors">
                Contato
              </Link>
            </nav>
          </div>

          {/* Serviços */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-6">Serviços</h3>
            <nav className="flex flex-col space-y-3">
              <Link href="#services" className="text-white/70 hover:text-cyan-300 transition-colors">
                Corte de Cabelo
              </Link>
              <Link href="#services" className="text-white/70 hover:text-cyan-300 transition-colors">
                Barba
              </Link>
              <Link href="#services" className="text-white/70 hover:text-cyan-300 transition-colors">
                Sobrancelha
              </Link>
              <Link href="#services" className="text-white/70 hover:text-cyan-300 transition-colors">
                Combo Completo
              </Link>
              <Link href="#contact" className="text-white/70 hover:text-cyan-300 transition-colors">
                Agendamento
              </Link>
            </nav>
          </div>

          {/* Contato */}
          <div className="md:col-span-4">
            <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="text-cyan-300 mr-3 mt-1" size={20} />
                <p className="text-white/70">
                  Av. São Jorge - Cidade Salvador
                  <br />
                  Jacareí - SP, 12312-000
                </p>
              </div>
              <div className="flex items-start">
                <Phone className="text-cyan-300 mr-3 mt-1" size={20} />
                <p className="text-white/70">(12) 98276-9309</p>
              </div>
              <div className="flex items-start">
                <Mail className="text-cyan-300 mr-3 mt-1" size={20} />
                <p className="text-white/70">contato@barbearia.com</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="font-bold mb-2">Horário de Funcionamento</h4>
              <p className="text-white/70">Segunda a Sexta: 8h30 às 18h30</p>
              <p className="text-white/70">Sábado: 7h às 15h30</p>
              <p className="text-white/70">Domingo: Somente com agendamento</p>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/50 text-sm mb-4 md:mb-0">
              {/* Substitua pelo CNPJ real */}
              &copy; {currentYear} Studio O Barba | CNPJ: 12.345.678/0001-90
            </p>
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
