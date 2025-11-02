import { ArrowRight } from 'lucide-react';

const posts = [
  {
    id: 'ceremonial-vs-daily',
    title: 'Ceremonial vs. Daily: kuris matcha tipas jums tinka?',
    excerpt:
      'Supraskite esminius skirtumus tarp ceremonial ir daily matcha: skonis, tekstūra, kilmė ir geriausi paruošimo būdai.',
    date: '2025-02-01',
    tags: ['Gidas', 'Skonis', 'Paruošimas'],
    image:
      'https://images.unsplash.com/photo-1547054722-5d96f2dd1e60?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'uji-kagoshima-origins',
    title: 'Uji ir Kagoshima: dvi kilmės, du charakteriai',
    excerpt:
      'Uji tradicijos ir Kagoshima inovacijos. Kaip terroir formuoja matcha aromatą, saldumą ir umami? ',
    date: '2025-01-18',
    tags: ['Kilmė', 'Ūkiai'],
    image:
      'https://images.unsplash.com/photo-1551106652-a5bcf6b5c19b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'perfect-matcha-latte',
    title: 'Tobulas matcha latte: baristos metodas namuose',
    excerpt:
      'Nuo vandens temperatūros iki pieno tekstūros: žingsnis po žingsnio receptas šilkiniam latte su sodria spalva.',
    date: '2024-12-10',
    tags: ['Receptai', 'Latte', 'Technika'],
    image:
      'https://images.unsplash.com/photo-1542996966-2e31c00bae30?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="relative z-0 w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-widest text-emerald-400/80">Žinios</p>
            <h2 className="mt-2 text-3xl font-semibold leading-tight md:text-4xl">
              Matcha gidas ir istorijos
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-neutral-400">
              Praktiniai patarimai, kilmės paslaptys ir receptai švariam, ryškiam skoniui.
            </p>
          </div>
          <a
            href="#blog"
            className="group inline-flex items-center gap-2 rounded-full border border-emerald-500/30 px-4 py-2 text-sm text-emerald-300 transition hover:border-emerald-400/60 hover:text-emerald-200"
            aria-label="Peržiūrėti visus įrašus"
          >
            Visi įrašai
            <ArrowRight size={16} className="transition group-hover:translate-x-0.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.id}
              className="group relative overflow-hidden rounded-2xl border border-white/5 bg-neutral-900/50 shadow-2xl shadow-emerald-500/5 transition hover:border-emerald-500/30"
            >
              <div className="aspect-[16/10] w-full overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-3 p-5">
                <div className="flex items-center justify-between">
                  <time className="text-xs text-neutral-400" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('lt-LT', {
                      year: 'numeric',
                      month: 'short',
                      day: '2-digit',
                    })}
                  </time>
                  <div className="flex flex-wrap gap-1">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-emerald-400/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300 ring-1 ring-inset ring-emerald-400/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <h3 className="text-lg font-semibold leading-snug">
                  {post.title}
                </h3>
                <p className="line-clamp-3 text-sm text-neutral-300">
                  {post.excerpt}
                </p>
                <div className="mt-1">
                  <a
                    href={`#/blog/${post.id}`}
                    className="inline-flex items-center gap-1 text-sm font-medium text-emerald-300 hover:text-emerald-200"
                    aria-label={`Skaityti įrašą: ${post.title}`}
                  >
                    Skaityti
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
