import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] w-full overflow-hidden">
      {/* Background image fallback */}
      <div
        className="absolute inset-0 bg-center bg-cover"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIwNzE5NTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
        }}
        aria-hidden
      />

      {/* Spline 3D scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4JFCLsE5jz72cZzw/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradients and vignette overlays (do not block interaction) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-28 sm:py-32 flex flex-col md:flex-row items-center gap-10">
          <div className="max-w-xl">
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-tight">
              Feel the beat. Shape the sound.
            </h1>
            <p className="mt-5 text-lg text-white/80">
              Premium wireless headphones engineered for pure immersion. Spatial audio,
              adaptive noise cancellation, and all‑day comfort in a sleek, modern design.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#products"
                className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition"
              >
                Shop headphones
              </a>
              <a
                href="#features"
                className="px-6 py-3 rounded-full border border-white/20 hover:border-white/40 text-white/90 hover:text-white transition"
              >
                Learn more
              </a>
            </div>
            <div className="mt-6 flex items-center gap-4 text-sm text-white/70">
              <span>Active Noise Cancelling</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span>Spatial Audio</span>
              <span className="h-1 w-1 rounded-full bg-white/40" />
              <span>Up to 40h battery</span>
            </div>
          </div>

          {/* Feature badge panel */}
          <div className="w-full md:w-auto md:ml-auto">
            <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 md:p-8">
              <p className="text-sm text-white/70">New</p>
              <p className="mt-1 text-2xl font-bold">Studio Pro</p>
              <p className="mt-2 text-sm text-white/70 max-w-xs">
                Our most powerful headphones ever with upgraded drivers and adaptive ANC.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <button className="px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-white/90 transition">
                  Buy
                </button>
                <button className="px-5 py-2.5 rounded-full border border-white/20 text-white/90 hover:border-white/40 transition">
                  Configure
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
