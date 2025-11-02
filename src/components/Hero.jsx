import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative isolate min-h-[80vh] w-full overflow-hidden bg-black text-white">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/9v0A3m0mZtq9j0eZ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradients that don't block interaction */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-black/80 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent" />
        <div className="absolute right-0 top-1/4 h-48 w-48 rounded-full bg-emerald-500/20 blur-3xl" />
      </div>

      {/* Content overlay */}
      <div className="relative mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-24 sm:py-32">
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
          Nauja kolekcija • 2025
        </span>
        <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
          Autentiška japoniška Matcha iš Uji ir Kagoshima regionų
        </h1>
        <p className="max-w-2xl text-base text-white/80 sm:text-lg">
          Kruopščiai atrinkti pirmojo skynimo lapeliai, malti akmeniniais malūnais. Švarus skonis, gyva žalia spalva ir natūralus energijos pliūpsnis be staigaus kritimo.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <a href="#products" className="rounded-full bg-emerald-500 px-5 py-3 text-sm font-medium text-black shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-400">
            Peržiūrėti arbatą
          </a>
          <a href="#about" className="rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white/90 transition hover:border-white/40 hover:text-white">
            Sužinoti daugiau
          </a>
        </div>
      </div>

      {/* Image fallback for environments without WebGL */}
      <noscript>
        <img
          src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=1976&auto=format&fit=crop"
          alt="Matcha arbata dubenėlyje"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </noscript>
    </section>
  );
}
