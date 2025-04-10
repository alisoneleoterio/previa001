"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function Testimonials() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const testimonials = [
    {
      text: "Lugar top, atendimento e qualidade 100% ... Recomendo sem dúvida",
      name: "Rafael Zago",
      status: "Cliente há 1 ano",
      rating: 5,
    },
    {
      text: "Ótimo atendimento com barbeiros de primeira linha, top mesmo. Equipamentos de qualidade!",
      name: "Edson Bebiano",
      status: "Cliente há 2 anos",
      rating: 5,
    },
    {
      text: "Atendimento top. Um dos melhores Studios de Jacareí, isso se não for o melhor. Excelentes profissionais!",
      name: "Josimar William",
      status: "Cliente há 2 anos",
      rating: 5,
    },
    {
      text: "Ótimo atendimento, organizado e limpo.",
      name: "Haroldo Santos",
      status: "Cliente há 2 anos",
      rating: 5,
    },
    {
      text: "Venha conhecer essa linda barbearia em Jacareí. Ótimo atendimento.",
      name: "Raquel Moura",
      status: "Cliente há 2 anos",
      rating: 5,
    },
    {
      text: "Meu marido e meus filhos adoram",
      name: "Ivete Melo",
      status: "Cliente há 2 anos",
      rating: 4,
    },
    {
      text: "Muito bom, ambiente excelente",
      name: "Benedito Mota",
      status: "Cliente há 4 anos",
      rating: 5,
    },
    {
      text: "Ótimo atendimento, muito atencioso com meu filho de 1 ano! Parabéns pelo ótimo trabalho!",
      name: "Larissa Pereira",
      status: "Cliente há 1 ano",
      rating: 5,
    },
    {
      text: "Excelentes profissionais.",
      name: "Gabriel Martins",
      status: "Cliente há 1 ano",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / getItemsPerView()))
      }, 5000)
    }
    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const getItemsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3
      if (window.innerWidth >= 640) return 2
    }
    return 1
  }

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(testimonials.length / getItemsPerView()) - 1 : prevIndex - 1,
    )
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(testimonials.length / getItemsPerView()))
  }

  return (
    <section id="testimonials" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full opacity-5 blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyan-300 rounded-full opacity-5 blur-3xl"></div>

      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">Depoimentos</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">O Que Nossos Clientes Dizem</h2>
          <p className="text-black/60 max-w-2xl mx-auto text-lg">
            A satisfação dos nossos clientes é o nosso maior orgulho. Confira abaixo:
          </p>
        </div>

        <div className="relative">
          <div
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${currentIndex * 100}%)`,
                }}
              >
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="min-w-full sm:min-w-[50%] lg:min-w-[33.333%] px-4">
                    <div className="bg-black text-white p-8 rounded-2xl shadow-xl h-full flex flex-col">
                      <div className="flex text-cyan-400 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} size={20} fill="#f59e0b" />
                        ))}
                      </div>
                      <p className="text-white/80 mb-6 flex-grow text-lg italic">"{testimonial.text}"</p>
                      <div className="flex items-center mt-auto">
                        <div className="w-12 h-12 bg-cyan-500/20 rounded-full mr-4 flex items-center justify-center text-cyan-300 font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-sm text-white/60">{testimonial.status}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center mt-10 space-x-2">
              <button
                onClick={handlePrev}
                className="bg-black text-white p-3 rounded-full hover:bg-cyan-300 hover:text-black transition-all"
                aria-label="Anterior"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNext}
                className="bg-black text-white p-3 rounded-full hover:bg-cyan-300 hover:text-black transition-all"
                aria-label="Próximo"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
