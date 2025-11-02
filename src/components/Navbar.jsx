import { ShoppingCart, Leaf } from "lucide-react";

export default function Navbar({ onCartOpen, cartCount }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-green-100">
      <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 rounded-full bg-green-600 text-white items-center justify-center">
            <Leaf className="h-5 w-5" />
          </span>
          <span className="font-semibold text-lg">Matcha Mistras</span>
        </a>
        <div className="flex items-center gap-6">
          <a href="#apie" className="text-sm text-gray-600 hover:text-gray-900">Apie</a>
          <a href="#produktai" className="text-sm text-gray-600 hover:text-gray-900">Produktai</a>
          <a href="#kontaktai" className="text-sm text-gray-600 hover:text-gray-900">Kontaktai</a>
          <button
            onClick={onCartOpen}
            className="relative inline-flex items-center gap-2 rounded-full bg-green-600 text-white px-4 py-2 hover:bg-green-700 transition"
            aria-label="Krepšelis"
          >
            <ShoppingCart className="h-5 w-5" />
            <span className="text-sm">Krepšelis</span>
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 h-5 min-w-[20px] px-1 rounded-full bg-emerald-500 text-xs flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
}
