const products = [
  {
    name: 'Studio Pro',
    tagline: 'Immersive over‑ear with adaptive ANC',
    price: '$349',
    image:
      'https://images.unsplash.com/photo-1518441902111-a2e3d2da43b3?q=80&w=2069&auto=format&fit=crop',
    colors: ['#111111', '#e5e7eb', '#dc2626', '#4f46e5'],
  },
  {
    name: 'Solo 4',
    tagline: 'Iconic on‑ear with vibrant sound',
    price: '$229',
    image:
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?q=80&w=2068&auto=format&fit=crop',
    colors: ['#111111', '#0ea5e9', '#84cc16', '#f59e0b'],
  },
  {
    name: 'Fit Pro',
    tagline: 'Secure fit earbuds for movement',
    price: '$199',
    image:
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=2070&auto=format&fit=crop',
    colors: ['#111111', '#22c55e', '#a855f7', '#fb7185'],
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="relative py-20 bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Explore the lineup</h2>
          <a href="#" className="text-sm text-white/70 hover:text-white">View all</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((p) => (
            <article key={p.name} className="group rounded-3xl overflow-hidden bg-white/5 border border-white/10">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{p.name}</h3>
                  <span className="text-white/80 text-sm">{p.price}</span>
                </div>
                <p className="mt-1 text-sm text-white/70">{p.tagline}</p>
                <div className="mt-4 flex items-center gap-2">
                  {p.colors.map((c, i) => (
                    <span
                      key={i}
                      className="h-5 w-5 rounded-full border border-white/20"
                      style={{ backgroundColor: c }}
                      aria-hidden
                    />
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3">
                  <button className="px-4 py-2 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition">
                    Buy
                  </button>
                  <button className="px-4 py-2 rounded-full border border-white/20 text-white/90 hover:border-white/40 transition">
                    Learn more
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
