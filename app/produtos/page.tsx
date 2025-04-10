import ProductsHeader from "@/components/products/products-header"
import ProductsHero from "@/components/products/products-hero"
import ProductsFooter from "@/components/products/products-footer"
import CartButton from "@/components/products/cart-button"
import CartPanel from "@/components/products/cart-panel"
import { CartProvider } from "@/contexts/cart-context"

export default function ProductsPage() {
  return (
    <CartProvider>
      <main className="min-h-screen bg-white">
        <ProductsHeader />
        <ProductsHero />
        <ProductsFooter />
        <CartButton />
        <CartPanel />
      </main>
    </CartProvider>
  )
}
