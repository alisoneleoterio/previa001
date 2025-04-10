"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingCart, Check } from "lucide-react"
import { useInView } from "react-intersection-observer"
import { useCart, type Product } from "@/contexts/cart-context"

// Dados de exemplo dos produtos
const products: Product[] = [
  {
    id: 1,
    name: "Pomada Modeladora",
    description: "Pomada modeladora com fixação forte e acabamento matte. Ideal para penteados estruturados.",
    price: 45.9,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 2,
    name: "Óleo para Barba",
    description: "Óleo hidratante para barba com fragrância amadeirada. Amacia e dá brilho aos fios.",
    price: 39.9,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 3,
    name: "Shampoo Especializado",
    description: "Shampoo para cabelos masculinos com propriedades fortalecedoras e revitalizantes.",
    price: 35.5,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 4,
    name: "Pente de Madeira",
    description: "Pente artesanal feito em madeira de alta qualidade. Antiestático e resistente.",
    price: 28.9,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 5,
    name: "Balm Pós-Barba",
    description: "Balm calmante pós-barba com aloe vera e mentol. Hidrata e refresca a pele.",
    price: 32.9,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    id: 6,
    name: "Kit Barbear Clássico",
    description: "Kit completo com navalha, pincel e suporte. O essencial para um barbear tradicional.",
    price: 129.9,
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function ProductsHero() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const { addItem, items } = useCart()
  const [addedAnimation, setAddedAnimation] = useState<number | null>(null)

  const handleAddToCart = (product: Product) => {
    addItem(product)

    // Mostrar animação de adicionado
    setAddedAnimation(product.id)
    setTimeout(() => {
      setAddedAnimation(null)
    }, 1500)
  }

  // Verificar se o produto está no carrinho
  const isInCart = (productId: number) => {
    return items.some((item) => item.id === productId)
  }

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Nossa Loja</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4 text-black">Produtos Exclusivos</h1>
          <p className="text-black/60 max-w-2xl mx-auto text-lg">
            Conheça nossa linha de produtos profissionais para cuidados masculinos. Qualidade garantida para manter seu
            estilo impecável.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative h-64 w-full bg-black/5">
                <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">{product.name}</h3>
                <p className="text-black/60 mb-4 min-h-[80px]">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-cyan-400">
                    R$ {product.price.toFixed(2).replace(".", ",")}
                  </span>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`flex items-center gap-2 py-2 px-4 rounded-full transition-all ${
                      addedAnimation === product.id
                        ? "bg-green-600 text-white"
                        : isInCart(product.id)
                          ? "bg-black/10 text-black border border-black/20"
                          : "bg-black hover:bg-cyan-400 text-white hover:text-black"
                    }`}
                  >
                    {addedAnimation === product.id ? (
                      <>
                        <Check size={18} />
                        <span>Adicionado</span>
                      </>
                    ) : isInCart(product.id) ? (
                      <>
                        <ShoppingCart size={18} />
                        <span>No Carrinho</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart size={18} />
                        <span>Comprar</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
