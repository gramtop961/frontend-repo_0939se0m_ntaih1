import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Full-bleed visual background: image + Spline 3D */}
      <div className="absolute inset-0">
        {/* Fallback/background image */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIwNzE5NTh8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')",
          }}
          aria-hidden
        />
        {/* Subtle tint to ensure text readability, doesn't block interaction */}
        <div className="absolute inset-0 bg-white/70 md:bg-white/60 pointer-events-none" />
        {/* 3D scene layer */}
        <div className="absolute inset-0 opacity-70">
          <Spline
            scene="https://prod.spline.design/0YJ7k4h9mAQrWcno/scene.splinecode"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900"
            >
              Tikra japoniška matcha – kasdieniam ritualui
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-4 text-lg text-gray-700"
            >
              Aukščiausios kokybės, šešėlyje augintos arbatos lapeliai, malti į ryškiai
              žalią miltelius. Skonis, energija ir ramybė vienoje taurėje.
            </motion.p>
            <div className="mt-6 flex gap-3">
              <a
                href="#produktai"
                className="inline-flex items-center justify-center rounded-full bg-green-600 text-white px-6 py-3 text-sm font-medium hover:bg-green-700 transition"
              >
                Pirkti dabar
              </a>
              <a
                href="#apie"
                className="inline-flex items-center justify-center rounded-full border border-green-200 text-green-700 px-6 py-3 text-sm font-medium hover:bg-green-50 transition"
              >
                Sužinokite daugiau
              </a>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="p-3 rounded-lg bg-white/90 backdrop-blur shadow-sm">
                <dt className="text-xs text-gray-500">Kilmė</dt>
                <dd className="text-sm font-semibold text-gray-900">Uji, Japonija</dd>
              </div>
              <div className="p-3 rounded-lg bg-white/90 backdrop-blur shadow-sm">
                <dt className="text-xs text-gray-500">Kofeinas</dt>
                <dd className="text-sm font-semibold text-gray-900">Švelni, stabili energija</dd>
              </div>
              <div className="p-3 rounded-lg bg-white/90 backdrop-blur shadow-sm">
                <dt className="text-xs text-gray-500">Nauda</dt>
                <dd className="text-sm font-semibold text-gray-900">L-teaninas & antioksidantai</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-xl"
            >
              <img
                src="https://images.unsplash.com/photo-1615485737651-6b8ef2b2b14c?q=80&w=1400&auto=format&fit=crop"
                alt="Japoniška matcha arbata puodelyje"
                className="w-full h-full object-cover"
                loading="eager"
              />
              {/* gradient overlay should not block interactions */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg max-w-[260px]"
            >
              <p className="text-sm text-gray-600">
                Kiekvienas gurkšnis – švarios energijos ir susikaupimo akimirka.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
