"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

export default function CartButton() {
  const { toggleCart, totalItems } = useCart()

  return (
    <button
      onClick={toggleCart}
      className="fixed bottom-6 right-6 z-50 bg-cyan-400 text-black p-4 rounded-full shadow-lg hover:bg-cyan-500 transition-all hover:scale-105 flex items-center justify-center"
      aria-label="Abrir carrinho"
    >
      <ShoppingCart size={24} />
      {totalItems > 0 && (
        <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
          {totalItems}
        </span>
      )}
    </button>
  )
}
