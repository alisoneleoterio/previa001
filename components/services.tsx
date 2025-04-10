"use client"
import { Scissors, BeakerIcon as Beard, Ruler, Package } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function Services() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const services = [
    {
      icon: <Scissors size={28} />,
      title: "Corte de Cabelo",
      description: "Cortes modernos ou clássicos realizados com técnica e precisão.",
      price: "R$ 35,00",
      delay: 50,
    },
    {
      icon: <Beard size={28} />,
      title: "Barba",
      description: "Modelagem completa com toalha quente e produtos especiais.",
      price: "R$ 25,00",
      delay: 50,
    },
    {
      icon: <Ruler size={28} />,
      title: "Sobrancelha",
      description: "Design e alinhamento para destacar o seu olhar.",
      price: "R$ 20,00",
      delay: 50,
    },
    {
      icon: <Package size={28} />,
      title: "Combo Completo",
      description: "Corte + barba + sobrancelha com desconto especial.",
      price: "R$ 70,00",
      delay: 50,
    },
  ]

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-cyan-500 font-semibold text-sm uppercase tracking-wider">O que oferecemos</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Nossos Serviços</h2>
          <p className="text-black/60 max-w-2xl mx-auto text-lg">
            Oferecemos uma variedade de serviços para atender todas as suas necessidades. Nossos barbeiros são
            especializados em diversos estilos e técnicas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl shadow-xl p-8 transition-all duration-700 hover:shadow-2xl hover:-translate-y-2 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${service.delay}ms` }}
            >
              <div className="bg-cyan-300 text-black p-4 rounded-2xl w-16 h-16 flex items-center justify-center mb-6 shadow-lg">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="text-black/60 mb-6 min-h-[60px]">{service.description}</p>
              <div className="flex items-center justify-between">
                <p className="text-3xl font-bold text-cyan-500">{service.price}</p>
                <span className="text-xs text-black/40">45 min</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-black/50 italic">
            * Entre em contato para mais serviços. Estamos sempre prontos para atender suas necessidades.
          </p>
        </div>
      </div>
    </section>
  )
}
