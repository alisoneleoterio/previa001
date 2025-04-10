"use client"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import { Instagram, Scissors, Award } from "lucide-react"

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const team = [
    {
      name: "Rick Silva (O Barba)",
      role: "Barbeiro Fundador",
      description: "[Descrição sobre o membro da equipe]",
      instagram: "ricksilvabarber",
      delay: 100,
    },
    {
      name: "Carol Xavier",
      role: "Barbeira Estilista",
      description: "[Descrição sobre o membro da equipe]",
      instagram: "carolchavie",
      delay: 300,
    },
    {
      name: "Eduardo Chaves",
      role: "Barbeiro Estilista",
      description: "[Descrição sobre o membro da equipe]",
      instagram: "duduchsilva",
      delay: 500,
    },
  ]

  return (
    <section id="about" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-10"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider">Quem somos</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Nossa Equipe</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Conheça os profissionais que fazem da nossa barbearia a melhor da cidade. Experiência, talento e dedicação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${member.delay}ms` }}
            >
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden mb-6 transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(251,191,36,0.3)]">
                {/* Substitua por imagens reais dos profissionais */}
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt={member.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
                  <p className="text-cyan-300 mb-3 font-medium">{member.role}</p>

                  <div className="flex space-x-3 mt-4">
                    <a
                      href={`https://instagram.com/${member.instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white/10 hover:bg-cyan-300 text-white hover:text-black p-2 rounded-full transition-all"
                    >
                      <Instagram size={18} />
                      <span className="sr-only">Instagram</span>
                    </a>
                    <div className="bg-white/10 text-white p-2 rounded-full">
                      <Scissors size={18} />
                    </div>
                    <div className="bg-white/10 text-white p-2 rounded-full">
                      <Award size={18} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-white/70">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
