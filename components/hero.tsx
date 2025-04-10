"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 pb-16 bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/background-black.jpg"
          alt="Barbearia Background"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
      </div>

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[300px] md:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/logo.jpg"
                alt="Logo da Barbearia"
                fill
                className="object-cover"
                priority
              />
          </div>
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Studio <span className="text-cyan-300">O BARBA</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/80 max-w-xl">
              Desde 2015 renovando seu visual com estilo e qualidade. Venha conhecer!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/produtos"
                className="bg-cyan-300 hover:bg-cyan-400 text-black font-bold py-4 px-8 rounded-full text-lg transition-all hover:shadow-lg hover:scale-105 text-center"
              >
                Nossos produtos
              </Link>
              <Link
                href="#services"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white/20 font-bold py-4 px-8 rounded-full text-lg transition-all hover:border-white/40 text-center"
              >
                Nossos serviços
              </Link>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
          >
            
          </div>
        </div>

        {/* Destaques rápidos */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-24 transition-all duration-1000 delay-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-cyan-300/30 transition-all hover:bg-white/10">
            <h3 className="text-3xl font-bold mb-2 text-cyan-300">+12.000</h3>
            <p className="text-white/80">Clientes Satisfeitos</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-cyan-300/30 transition-all hover:bg-white/10">
            <h3 className="text-3xl font-bold mb-2 text-cyan-300">10 Anos</h3>
            <p className="text-white/80">De Experiência</p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:border-cyan-300/30 transition-all hover:bg-white/10">
            <h3 className="text-3xl font-bold mb-2 text-cyan-300">Equipe Premiada</h3>
            <p className="text-white/80">Profissionais Certificados</p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  )
}
