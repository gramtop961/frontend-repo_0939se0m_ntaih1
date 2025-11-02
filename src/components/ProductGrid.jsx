const products = [
  {
    id: 'ceremonial',
    name: 'Ceremonial Grade Uji',
    tagline: 'Švelni, saldoka umami, šilkinė tekstūra',
    price: 32,
    weight: '30g',
    image:
      'https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?q=80&w=1887&auto=format&fit=crop',
    notes: ['Uji, Kyoto', 'Pirmas skynimas', 'Akmeninis malūnas'],
  },
  {
    id: 'daily',
    name: 'Daily Matcha Kagoshima',
    tagline: 'Kasdieniams ritualams ir latte',
    price: 19,
    weight: '50g',
    image:
      'https://images.unsplash.com/photo-1597484662319-8dbb45e32569?q=80&w=1964&auto=format&fit=crop',
    notes: ['Kagoshima', 'Subalansuotas', 'Puikiai tinka su pienu'],
  },
  {
    id: 'blend',
    name: 'Heritage Blend',
    tagline: 'Gilus skonis, ilgai išliekantis saldumas',
    price: 26,
    weight: '40g',
    image:
      'https://images.unsplash.com/photo-1602143407151-7111542de6e8?q=80&w=1974&auto=format&fit=crop',
    notes: ['Shizuoka', 'Umami', 'Ryški žalia'],
  },
];

export default function ProductGrid() {
  return (
    <section id="products" className="bg-black px-4 py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">Mūsų Matcha</h2>
            <p className="mt-2 text-white/70">Aukštos kokybės lapeliai, atsakingas tiekimas ir skaidri kilmė.</p>
          </div>
          <a href="#about" className="hidden rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-white/40 hover:text-white sm:inline-flex">Apie kokybę</a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.id} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="p-5">
                <div className="mb-1 flex items-center justify-between">
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <span className="rounded-full bg-emerald-500/15 px-2 py-1 text-xs text-emerald-300">{p.weight}</span>
                </div>
                <p className="mb-3 text-sm text-white/70">{p.tagline}</p>
                <ul className="mb-4 flex flex-wrap gap-2">
                  {p.notes.map((n) => (
                    <li key={n} className="rounded-full border border-white/10 px-2.5 py-1 text-xs text-white/70">{n}</li>
                  ))}
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-semibold">€{p.price}</span>
                  <div className="flex gap-2">
                    <button className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-black transition hover:bg-emerald-400">Į krepšelį</button>
                    <button className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/90 transition hover:border-white/40 hover:text-white">Daugiau</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
