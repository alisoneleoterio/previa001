"use client"

import { useState } from "react"
import Image from "next/image"
import { X, Plus, Minus, ShoppingBag, Trash2 } from "lucide-react"
import { useCart, type CartItem } from "@/contexts/cart-context"

export default function CartPanel() {
  const { items, isCartOpen, closeCart, updateQuantity, removeItem, totalPrice } = useCart()
  const [isCheckingOut, setIsCheckingOut] = useState(false)

  // Formatar preço para exibição
  const formatPrice = (price: number) => {
    return price.toFixed(2).replace(".", ",")
  }

  // Função para criar a mensagem do WhatsApp
  const createWhatsAppMessage = () => {
    const phoneNumber = "5512982769309"

    let message = "Olá! Gostaria de fazer o seguinte pedido:\n\n"

    items.forEach((item) => {
      message += `• ${item.quantity}x ${item.name} - R$ ${formatPrice(item.price * item.quantity)}\n`
    })

    message += `\nTotal: R$ ${formatPrice(totalPrice)}\n\nPor favor, confirme a disponibilidade dos produtos.`

    // Codificar a mensagem para URL
    const encodedMessage = encodeURIComponent(message)

    // Retornar a URL do WhatsApp
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
  }

  // Função para finalizar a compra
  const handleCheckout = () => {
    setIsCheckingOut(true)

    // Simular um pequeno delay antes de redirecionar
    setTimeout(() => {
      window.open(createWhatsAppMessage(), "_blank")
      setIsCheckingOut(false)
    }, 1000)
  }

  if (!isCartOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex justify-end">
      <div className="bg-white text-black w-full max-w-md h-full flex flex-col shadow-xl animate-slideInRight">
        <div className="p-4 bg-black text-white flex justify-between items-center">
          <h2 className="text-xl font-bold flex items-center gap-2">
            <ShoppingBag size={20} />
            Seu Carrinho
          </h2>
          <button
            onClick={closeCart}
            className="p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label="Fechar carrinho"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex-1 overflow-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center p-6">
              <ShoppingBag size={64} className="text-gray-300 mb-4" />
              <h3 className="text-xl font-bold mb-2">Seu carrinho está vazio</h3>
              <p className="text-gray-500">Adicione alguns produtos para começar suas compras.</p>
              <button
                onClick={closeCart}
                className="mt-6 bg-cyan-300 hover:bg-cyan-400 text-black font-bold py-2 px-6 rounded-full transition-all"
              >
                Continuar Comprando
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <CartItemComponent key={item.id} item={item} updateQuantity={updateQuantity} removeItem={removeItem} />
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="p-4 border-t border-gray-200">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg">Subtotal:</span>
              <span className="text-2xl font-bold">R$ {formatPrice(totalPrice)}</span>
            </div>
            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className={`w-full bg-cyan-300 hover:bg-cyan-400 text-black font-bold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2 ${
                isCheckingOut ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isCheckingOut ? (
                <>
                  <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-black"></span>
                  <span>Processando...</span>
                </>
              ) : (
                <>Finalizar Pedido via WhatsApp</>
              )}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

// Componente para cada item do carrinho
function CartItemComponent({
  item,
  updateQuantity,
  removeItem,
}: {
  item: CartItem
  updateQuantity: (id: number, quantity: number) => void
  removeItem: (id: number) => void
}) {
  return (
    <div className="flex gap-4 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors">
      <div className="relative h-20 w-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
      </div>

      <div className="flex-1">
        <h3 className="font-medium">{item.name}</h3>
        <p className="text-sm text-gray-500 mb-2">R$ {item.price.toFixed(2).replace(".", ",")}</p>

        <div className="flex justify-between items-center">
          <div className="flex items-center border border-gray-200 rounded-md">
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="px-2 py-1 hover:bg-gray-100 transition-colors"
              aria-label="Diminuir quantidade"
            >
              <Minus size={14} />
            </button>
            <span className="px-3 py-1 text-center min-w-[40px]">{item.quantity}</span>
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="px-2 py-1 hover:bg-gray-100 transition-colors"
              aria-label="Aumentar quantidade"
            >
              <Plus size={14} />
            </button>
          </div>

          <button
            onClick={() => removeItem(item.id)}
            className="text-red-500 hover:text-red-700 p-1 transition-colors"
            aria-label="Remover item"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </div>
    </div>
  )
}
