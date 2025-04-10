"use client"

import type React from "react"
import { useState } from "react"
import { MapPin, Clock, Phone, Send } from "lucide-react"
import { useInView } from "react-intersection-observer"

export default function Contact() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulação de envio
    setTimeout(() => {
      console.log("Formulário enviado:", formData)
      setIsSubmitting(false)
      setSubmitted(true)

      // Reset após 3 segundos
      setTimeout(() => {
        setSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

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
          className={`grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Formulário de contato */}
          <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
            <h3 className="text-2xl font-bold mb-6">Envie uma mensagem</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                  Seu Nome
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 text-white placeholder-white/40 transition-all"
                  placeholder="Seu nome"
                  disabled={isSubmitting || submitted}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 text-white placeholder-white/40 transition-all"
                  placeholder="(00) 00000-0000"
                  disabled={isSubmitting || submitted}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white/80 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-300 text-white placeholder-white/40 transition-all"
                  placeholder="Como podemos ajudar?"
                  disabled={isSubmitting || submitted}
                ></textarea>
              </div>

              <button
                type="submit"
                className={`w-full flex items-center justify-center gap-2 bg-cyan-300 hover:bg-cyan-400 text-black font-bold py-3 px-6 rounded-lg transition-all ${
                  isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                } ${submitted ? "bg-green-500 hover:bg-green-600" : ""}`}
                disabled={isSubmitting || submitted}
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></span>
                    <span>Enviando...</span>
                  </>
                ) : submitted ? (
                  <>Mensagem Enviada!</>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Enviar Mensagem</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Informações de contato e mapa */}
          <div className="space-y-8">
            <div className="space-y-6">
              {/* Endereço - Substitua pelo endereço real */}
              <div className="flex items-start bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-300/30 transition-all">
                <MapPin className="text-cyan-300 mr-4 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-xl mb-2">Endereço</h3>
                  <p className="text-white/70">Av. São Jorge - Cidade Salvador</p>
                  <p className="text-white/70">Jacareí - SP, 12312-000</p>
                </div>
              </div>

              {/* Horário de funcionamento - Substitua pelos horários reais */}
              <div className="flex items-start bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-300/30 transition-all">
                <Clock className="text-cyan-300 mr-4 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-xl mb-2">Horário de Funcionamento</h3>
                  <p className="text-white/70">Segunda a Sexta: 8h30 às 18h30</p>
                  <p className="text-white/70">Sábado: 7h às 15h30</p>
                  <p className="text-white/70">Domingo: Somente com agendamento</p>
                </div>
              </div>

              {/* WhatsApp - Substitua pelo número real */}
              <div className="flex items-start bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:border-cyan-300/30 transition-all">
                <Phone className="text-cyan-300 mr-4 mt-1" size={24} />
                <div>
                  <h3 className="font-bold text-xl mb-2">Contato</h3>
                  <p className="text-white/70">(11) 98765-4321</p>
                  <a
                    href="https://api.whatsapp.com/send?l=pt-BR&text=Ol%C3%A1,++vim+pelo+seu+site+!&phone=5512982769309&fbclid=PAZXh0bgNhZW0CMTEAAadi5Wj3skCbM5nNy9wFsqWVMYTVTRTD--QUHsg9UFzy_eVK-7dUbpMfVdOgWw_aem_fB9oHNYu9BaOT41DoVr4Zg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-4 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-6 rounded-lg transition-all flex items-center gap-2"
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
                    Falar pelo WhatsApp
                  </a>
                </div>
              </div>
            </div>

            {/* Mapa - Substitua pelo embed do Google Maps real */}
            <div className="h-[300px] bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.482955746277!2d-45.929866224677845!3d-23.298229778981558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cdcb4ebc59ae39%3A0xb9e013f19e360104!2sO%20Barba%20Studio!5e0!3m2!1spt-BR!2sbr!4v1744241573061!5m2!1spt-BR!2sbr"
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
      </div>
    </section>
  )
}
