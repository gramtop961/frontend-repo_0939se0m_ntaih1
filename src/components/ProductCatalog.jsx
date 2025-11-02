import { motion } from "framer-motion";
import { Star } from "lucide-react";

const products = [
  {
    id: "ceremonial",
    name: "Ceremonial Grade Matcha",
    description:
      "Aukščiausios kokybės, saldžiai žolelėmis kvepianti matcha tradiciniams ritualams.",
    price: 29.99,
    image:
      "https://images.unsplash.com/photo-1545396872-8c9aa4be0e8b?q=80&w=1600&auto=format&fit=crop",
    rating: 4.9,
  },
  {
    id: "premium",
    name: "Premium Grade Matcha",
    description:
      "Puikiai tinka lattė, desertams ir kasdieniams gėrimo ritualams – ryški spalva, švelnus skonis.",
    price: 21.99,
    image:
      "https://images.unsplash.com/photo-1542691457-cbe4df041eb2?q=80&w=1600&auto=format&fit=crop",
    rating: 4.8,
  },
  {
    id: "culinary",
    name: "Culinary Grade Matcha",
    description:
      "Kulinarinė matcha kepiniams ir kokteiliams – intensyvus skonis ir spalva.",
    price: 14.99,
    image:
      "https://images.unsplash.com/photo-1604908554007-0097c8b3628e?q=80&w=1600&auto=format&fit=crop",
    rating: 4.6,
  },
];

export default function ProductCatalog({ onAddToCart }) {
  return (
    <section id="produktai" className="py-16 bg-gradient-to-b from-white to-green-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Rinkitės savo matcha
            </h2>
            <p className="mt-2 text-gray-600">
              Kruopščiai atrinkti laipsniai – kiekvienam skoniui ir ritualui.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="group bg-white rounded-2xl overflow-hidden border border-green-100 shadow-sm hover:shadow-md transition"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded-full text-xs font-medium text-gray-800 flex items-center gap-1">
                  <Star className="h-3.5 w-3.5 text-yellow-500" /> {p.rating}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">{p.name}</h3>
                <p className="mt-1 text-sm text-gray-600 line-clamp-2">{p.description}</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-bold text-green-700">€{p.price.toFixed(2)}</span>
                  <button
                    onClick={() => onAddToCart({ ...p, qty: 1 })}
                    className="inline-flex items-center justify-center rounded-full bg-green-600 text-white px-4 py-2 text-sm font-medium hover:bg-green-700 transition"
                  >
                    Į krepšelį
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
