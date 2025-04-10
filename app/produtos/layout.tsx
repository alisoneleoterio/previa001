import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Produtos - Barbearia",
  description: "Conheça nossa linha exclusiva de produtos para cuidados masculinos.",
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
