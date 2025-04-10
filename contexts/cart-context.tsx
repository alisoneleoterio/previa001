"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

// Tipo para os produtos
export interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
}

// Tipo para os itens do carrinho
export interface CartItem extends Product {
  quantity: number
}

// Interface do contexto do carrinho
interface CartContextType {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  isCartOpen: boolean
  toggleCart: () => void
  closeCart: () => void
  openCart: () => void
  totalItems: number
  totalPrice: number
}

// Criando o contexto
const CartContext = createContext<CartContextType | undefined>(undefined)

// Hook personalizado para usar o contexto
export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

// Provider do contexto
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([])
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [totalItems, setTotalItems] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  // Carregar carrinho do localStorage quando o componente montar (apenas no cliente)
  useEffect(() => {
    const savedCart = localStorage.getItem("barbershopCart")
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart))
      } catch (error) {
        console.error("Error parsing cart from localStorage:", error)
      }
    }
  }, [])

  // Salvar carrinho no localStorage quando mudar
  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("barbershopCart", JSON.stringify(items))
    }
  }, [items])

  // Calcular totais quando os itens mudarem
  useEffect(() => {
    setTotalItems(items.reduce((total, item) => total + item.quantity, 0))
    setTotalPrice(items.reduce((total, item) => total + item.price * item.quantity, 0))
  }, [items])

  // Adicionar item ao carrinho
  const addItem = (product: Product) => {
    setItems((prevItems) => {
      // Verificar se o produto já está no carrinho
      const existingItemIndex = prevItems.findIndex((item) => item.id === product.id)

      if (existingItemIndex >= 0) {
        // Se já existe, incrementar a quantidade
        const updatedItems = [...prevItems]
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        }
        return updatedItems
      } else {
        // Se não existe, adicionar como novo item
        return [...prevItems, { ...product, quantity: 1 }]
      }
    })

    // Abrir o carrinho automaticamente quando um item é adicionado
    setIsCartOpen(true)

    // Fechar o carrinho após 3 segundos
    setTimeout(() => {
      setIsCartOpen(false)
    }, 3000)
  }

  // Remover item do carrinho
  const removeItem = (productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== productId))
  }

  // Atualizar quantidade de um item
  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeItem(productId)
      return
    }

    setItems((prevItems) => prevItems.map((item) => (item.id === productId ? { ...item, quantity } : item)))
  }

  // Limpar o carrinho
  const clearCart = () => {
    setItems([])
    localStorage.removeItem("barbershopCart")
  }

  // Alternar visibilidade do carrinho
  const toggleCart = () => {
    setIsCartOpen((prev) => !prev)
  }

  // Fechar o carrinho
  const closeCart = () => {
    setIsCartOpen(false)
  }

  // Abrir o carrinho
  const openCart = () => {
    setIsCartOpen(true)
  }

  const value = {
    items,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    isCartOpen,
    toggleCart,
    closeCart,
    openCart,
    totalItems,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}
