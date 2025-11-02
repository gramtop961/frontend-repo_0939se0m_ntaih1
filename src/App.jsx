import { useEffect, useMemo, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCatalog from "./components/ProductCatalog";
import CartDrawer from "./components/CartDrawer";

export default function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [orderSuccess, setOrderSuccess] = useState(null);

  // Basic SEO setup
  useEffect(() => {
    document.title = "Japoniška Matcha Arbata – Premium internetinė parduotuvė";
    const desc =
      "Autentiška japoniška matcha: ceremonial, premium ir culinary laipsniai. Greitas pristatymas, puikūs atsiliepimai ir švarios energijos puodelis kasdien.";
    const setMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("name", name);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };
    setMeta("description", desc);
    setMeta("keywords", "matcha, japoniška matcha, arbata, ceremonial, premium, culinary, latte");
  }, []);

  const cartCount = useMemo(() => cart.reduce((n, it) => n + it.qty, 0), [cart]);

  const handleAddToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === item.id);
      if (existing) {
        return prev.map((p) => (p.id === item.id ? { ...p, qty: p.qty + item.qty } : p));
      }
      return [...prev, item];
    });
  };

  const handleUpdateQty = (id, qty) => {
    setCart((prev) => prev.map((p) => (p.id === id ? { ...p, qty } : p)));
  };

  const handleRemove = (id) => setCart((prev) => prev.filter((p) => p.id !== id));

  const handleCheckout = (payload) => {
    setOrderSuccess({ id: Math.random().toString(36).slice(2, 8).toUpperCase(), ...payload });
    setCart([]);
    setCartOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar onCartOpen={() => setCartOpen(true)} cartCount={cartCount} />
      <main>
        <Hero />
        <ProductCatalog onAddToCart={handleAddToCart} />

        {/* Apie matcha (SEO turinys) */}
        <section id="apie" className="py-16">
          <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-start">
            <div className="prose prose-green max-w-none">
              <h2 className="text-3xl font-bold tracking-tight">Kas yra japoniška matcha?</h2>
              <p className="mt-3 text-gray-700">
                Matcha – tai miltelinė žalioji arbata, gaminama iš šešėlyje augintų
                Camellia sinensis lapelių. Arbata sumalama akmeniniais girnomis, todėl gaunamas
                ryškiai žalias, antioksidantais turtingas miltelis. Skoniui būdingas umami,
                lengvas saldumas ir subtilus žolelių poskonis.
              </p>
              <h3 className="mt-6 font-semibold text-xl">Nauda sveikatai</h3>
              <ul className="mt-2 list-disc pl-5 text-gray-700">
                <li>L-teaninas padeda susitelkti ir sumažina nerimą.</li>
                <li>Gausu EGCG antioksidantų – natūrali apsauga organizmui.</li>
                <li>Švelni, bet stabili energija be staigių kritimų.</li>
              </ul>
              <h3 className="mt-6 font-semibold text-xl">Kaip pasiruošti?</h3>
              <p className="mt-2 text-gray-700">
                Sijokite 1–2 g matchos į dubenėlį, įpilkite ~70–80°C vandens (60–80 ml) ir
                šluotele plakite zigzago judesiais, kol susidarys švelnios putos.
              </p>
            </div>
            <div className="rounded-3xl overflow-hidden border border-green-100 shadow-sm">
              <img
                src="https://images.unsplash.com/photo-1598514982560-64e1b4a1af9a?q=80&w=1600&auto=format&fit=crop"
                alt="Matcha paruošimo ceremonija su bambukine šluotele"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Kontaktai / CTA */}
        <section id="kontaktai" className="py-16 bg-green-50/50">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Paruošta paragauti?</h2>
            <p className="mt-2 text-gray-700">
              Užsisakykite šiandien – šviežumas, kokybė ir rūpestingas supakavimas.
            </p>
            <button
              onClick={() => setCartOpen(true)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-green-600 text-white px-6 py-3 text-sm font-medium hover:bg-green-700"
            >
              Atidaryti krepšelį
            </button>
            {orderSuccess && (
              <div className="mt-6 p-4 mx-auto max-w-md rounded-xl bg-white border border-green-100 shadow-sm text-left">
                <p className="font-semibold text-green-700">Užsakymas priimtas!</p>
                <p className="text-sm text-gray-700 mt-1">
                  Užsakymo Nr. {orderSuccess.id}. Patvirtinimą išsiuntėme el. paštu: {" "}
                  <span className="font-medium">{orderSuccess.email}</span>.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t border-green-100 py-10 text-sm text-gray-600">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Matcha Mistras. Visos teisės saugomos.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-gray-900">Privatumo politika</a>
            <a href="#" className="hover:text-gray-900">Pirkimo taisyklės</a>
          </div>
        </div>
      </footer>

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQty={handleUpdateQty}
        onRemove={handleRemove}
        onCheckout={handleCheckout}
      />
    </div>
  );
}
