"use client"

import { MapPin, Clock, Phone } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="contact" className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-300 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-300 rounded-full opacity-10 blur-3xl"></div>

      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-cyan-300 font-semibold text-sm uppercase tracking-wider">Contato</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Entre em Contato</h2>
          <p className="text-white/70 max-w-2xl mx-auto text-lg">
            Estamos prontos para atendê-lo. Entre em contato conosco para agendar um horário ou tirar suas dúvidas.
          </p>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex flex-col items-center bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-cyan-300/30 transition-all h-full">
              <MapPin className="text-cyan-300 mb-4" size={36} />
              <h3 className="font-bold text-xl mb-3 text-center">Endereço</h3>
              <p className="text-white/70 text-center">Av. São Jorge</p>
              <p className="text-white/70 text-center">Cidade Salvador</p>
              <p className="text-white/70 text-center">Jacareí, SP - 12312-000</p>
              <br /><br />
              <p className="text-white/70 text-center">Veja no mapa abaixo:</p>
            </div>

            <div className="flex flex-col items-center bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-cyan-300/30 transition-all h-full">
              <Clock className="text-cyan-300 mb-4" size={36} />
              <h3 className="font-bold text-xl mb-3 text-center">Horário de Funcionamento</h3>
              <p className="text-white/70 text-center">Segunda a Sexta: 8h30 às 18h30</p>
              <p className="text-white/70 text-center">Sábado: 7h às 15h30</p>
              <p className="text-white/70 text-center">Domingo: Somente com agendamento</p>
            </div>

            <div className="flex flex-col items-center bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10 hover:border-cyan-300/30 transition-all h-full">
              <Phone className="text-cyan-300 mb-4" size={36} />
              <h3 className="font-bold text-xl mb-3 text-center">Contato</h3>
              <p className="text-white/70 text-center">(12) 982769309</p>
              <a
                href="https://api.whatsapp.com/send?l=pt-BR&text=Ol%C3%A1,++vim+pelo+seu+site!&phone=5512982769309&fbclid=PAZXh0bgNhZW0CMTEAAadi5Wj3skCbM5nNy9wFsqWVMYTVTRTD--QUHsg9UFzy_eVK-7dUbpMfVdOgWw_aem_fB9oHNYu9BaOT41DoVr4Zg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 bg-green-600 hover:bg-green-700 text-white font-medium py-4 px-4 rounded-lg transition-all flex items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="white"
                  stroke="currentColor"
                  strokeWidth="0"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Falar pelo Whatsapp
              </a>
            </div>
          </div>

          {/* Mapa - Substitua pelo embed do Google Maps real */}
          <div className="h-[400px] bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975886075113!2d-46.65390548502264!3d-23.56507478468041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1650000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Barbearia"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
