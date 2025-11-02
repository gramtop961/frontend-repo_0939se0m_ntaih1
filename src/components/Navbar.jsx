export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/60 bg-black/70 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 rounded-full bg-white flex items-center justify-center">
            <span className="text-black font-bold">b</span>
          </div>
          <span className="text-lg tracking-tight font-semibold">beats.store</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#products" className="hover:text-white transition">Products</a>
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#support" className="hover:text-white transition">Support</a>
        </nav>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition">
            Buy now
          </button>
        </div>
      </div>
    </header>
  );
}
