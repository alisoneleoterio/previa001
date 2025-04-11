"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md text-white shadow-lg py-3" : "bg-transparent text-white py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo - Substitua pelo logo real da barbearia */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo-white.png"
            alt="Barbearia Logo"
            width={150}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        {/* Menu para desktop */}
        <nav className="hidden lg:flex space-x-8">
          <Link
            href="#home"
            className="text-sm font-medium hover:text-cyan-300 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all hover:after:w-full"
          >
            Home
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium hover:text-cyan-300 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all hover:after:w-full"          >
            Serviços
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-cyan-300 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all hover:after:w-full"          >
            Sobre
          </Link>
          <Link
            href="#testimonials"
            className="text-sm font-medium hover:text-cyan-300 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all hover:after:w-full"          >
            Depoimentos
          </Link>
          <Link
            href="#contact"
            className="text-sm font-medium hover:text-cyan-300 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all hover:after:w-full"          >
            Contato
          </Link>
          <Link
            href="/produtos"
            target="_blank"
            className="text-sm font-medium hover:text-cyan-300 transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan-300 after:transition-all hover:after:w-full"
          >
            Produtos
          </Link>
        </nav>

        {/* Botão de agendamento para desktop */}
        <Link
          href="https://api.whatsapp.com/send?l=pt-BR&text=Ol%C3%A1,++vim+pelo+seu+site+!&phone=5512982769309&fbclid=PAZXh0bgNhZW0CMTEAAadi5Wj3skCbM5nNy9wFsqWVMYTVTRTD--QUHsg9UFzy_eVK-7dUbpMfVdOgWw_aem_fB9oHNYu9BaOT41DoVr4Zg"
          className="hidden lg:flex items-center bg-cyan-300 hover:bg-cyan-400 text-black font-bold py-2.5 px-6 rounded-full transition-all hover:shadow-lg hover:scale-105"
        >
          Fale Conosco
        </Link>

        {/* Botão do menu mobile */}
        <button
          className="lg:hidden text-white bg-black/20 backdrop-blur-md p-2 rounded-full"
          onClick={toggleMenu}
          aria-label="Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md h-screen px-4 pt-20">
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 bg-cyan-300 text-black p-2 rounded-full hover:bg-cyan-400 transition-all"
              aria-label="Fechar menu"
            >
              <X size={24} />
            </button>

            <nav className="flex flex-col space-y-6 py-8">
              <Link
                href="#home"
                className="text-2xl font-medium hover:text-cyan-300 transition-colors py-2 border-b border-white/10"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="#services"
                className="text-2xl font-medium hover:text-cyan-300 transition-colors py-2 border-b border-white/10"
                onClick={toggleMenu}
              >
                Serviços
              </Link>
              <Link 
                href="/produtos"
                className="text-2xl font-medium hover:text-cyan-300 transition-colors py-2 border-b border-white/10"
                onClick={toggleMenu}
              >
                Produtos
              </Link>
              <Link
                href="#about"
                className="text-2xl font-medium hover:text-cyan-300 transition-colors py-2 border-b border-white/10"
                onClick={toggleMenu}
              >
                Sobre
              </Link>
              <Link
                href="#testimonials"
                className="text-2xl font-medium hover:text-cyan-300 transition-colors py-2 border-b border-white/10"
                onClick={toggleMenu}
              >
                Depoimentos
              </Link>
              <Link
                href="#contact"
                className="text-2xl font-medium hover:text-cyan-300 transition-colors py-2 border-b border-white/10"
                onClick={toggleMenu}
              >
                Contato
              </Link>
              <Link
                href="https://api.whatsapp.com/send?l=pt-BR&text=Ol%C3%A1,++vim+pelo+seu+site+!&phone=5512982769309&fbclid=PAZXh0bgNhZW0CMTEAAadi5Wj3skCbM5nNy9wFsqWVMYTVTRTD--QUHsg9UFzy_eVK-7dUbpMfVdOgWw_aem_fB9oHNYu9BaOT41DoVr4Zg"
                className="bg-cyan-300 hover:bg-cyan-400 text-black font-bold py-3 px-6 rounded-full transition-all text-center mt-4 hover:shadow-lg"
                onClick={toggleMenu}
              >
                Fale Conosco
              </Link>
            </nav>
        </div>
      )}
    </header>
  )
}
