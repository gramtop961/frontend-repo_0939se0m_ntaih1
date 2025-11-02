import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-green-50 to-white" />
      <div className="max-w-6xl mx-auto px-4 py-20 relative">
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
              className="mt-4 text-lg text-gray-600"
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
              <div className="p-3 rounded-lg bg-white shadow-sm">
                <dt className="text-xs text-gray-500">Kilmė</dt>
                <dd className="text-sm font-semibold text-gray-900">Uji, Japonija</dd>
              </div>
              <div className="p-3 rounded-lg bg-white shadow-sm">
                <dt className="text-xs text-gray-500">Kofeinas</dt>
                <dd className="text-sm font-semibold text-gray-900">Švelni, stabili energija</dd>
              </div>
              <div className="p-3 rounded-lg bg-white shadow-sm">
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
                src="https://images.unsplash.com/photo-1615485737651-6b8ef2b2b14c?q=80&w=1600&auto=format&fit=crop"
                alt="Japoniška matcha arbata puodelyje"
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
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
