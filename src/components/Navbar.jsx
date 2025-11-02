import { ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/60 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:py-4">
        <a href="#" className="flex items-center gap-2 text-white">
          <span className="inline-block h-8 w-8 rounded-full bg-emerald-500" />
          <span className="text-lg font-semibold tracking-tight">Matcha Mono</span>
        </a>
        <nav className="hidden items-center gap-8 text-sm text-white/80 sm:flex">
          <a href="#products" className="hover:text-white transition">Produktai</a>
          <a href="#about" className="hover:text-white transition">Apie</a>
          <a href="#support" className="hover:text-white transition">Pagalba</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-400 transition">
          <ShoppingBag className="h-4 w-4" /> Pirkti dabar
        </button>
      </div>
    </header>
  );
}
