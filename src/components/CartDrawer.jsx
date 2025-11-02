import { useMemo, useState } from "react";
import { X } from "lucide-react";

export default function CartDrawer({ open, onClose, items, onUpdateQty, onRemove, onCheckout }) {
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", address: "" });

  const total = useMemo(() => {
    return items.reduce((sum, it) => sum + it.price * it.qty, 0);
  }, [items]);

  const handleCheckout = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Šiuo metu – demonstracinė forma. Integruosime mokėjimus vėliau.
      await new Promise((r) => setTimeout(r, 900));
      onCheckout({ ...form, total, items });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      aria-hidden={!open}
    >
      {/* overlay */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
      />

      {/* panel */}
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-lg font-semibold">Jūsų krepšelis</h3>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100">
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-4 space-y-4 max-h-[45%] overflow-y-auto">
          {items.length === 0 && (
            <p className="text-sm text-gray-500">Krepšelis tuščias.</p>
          )}
          {items.map((it) => (
            <div key={it.id} className="flex gap-3">
              <img src={it.image} alt={it.name} className="h-16 w-16 rounded-lg object-cover" />
              <div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-medium text-gray-900">{it.name}</p>
                  <p className="font-semibold text-green-700">€{(it.price * it.qty).toFixed(2)}</p>
                </div>
                <p className="text-xs text-gray-500">€{it.price.toFixed(2)} / vnt.</p>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    className="px-2 py-1 rounded bg-gray-100"
                    onClick={() => onUpdateQty(it.id, Math.max(1, it.qty - 1))}
                  >
                    -
                  </button>
                  <span className="text-sm w-8 text-center">{it.qty}</span>
                  <button
                    className="px-2 py-1 rounded bg-gray-100"
                    onClick={() => onUpdateQty(it.id, it.qty + 1)}
                  >
                    +
                  </button>
                  <button
                    className="ml-auto text-xs text-red-500 hover:text-red-600"
                    onClick={() => onRemove(it.id)}
                  >
                    Pašalinti
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* order summary */}
        <div className="border-t p-4 space-y-3">
          <div className="flex justify-between text-sm">
            <span>Tarpinė suma</span>
            <span className="font-medium">€{total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-sm text-gray-500">
            <span>Pristatymas</span>
            <span>Bus apskaičiuotas</span>
          </div>
        </div>

        {/* checkout form */}
        <form onSubmit={handleCheckout} className="p-4 border-t space-y-3">
          <h4 className="font-semibold">Apmokėjimas</h4>
          <input
            required
            type="text"
            placeholder="Vardas ir pavardė"
            className="w-full rounded-lg border px-3 py-2 text-sm"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          />
          <input
            required
            type="email"
            placeholder="El. paštas"
            className="w-full rounded-lg border px-3 py-2 text-sm"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
          />
          <textarea
            required
            placeholder="Pristatymo adresas"
            className="w-full rounded-lg border px-3 py-2 text-sm"
            rows={3}
            value={form.address}
            onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
          />
          <button
            type="submit"
            disabled={items.length === 0 || submitting}
            className="w-full rounded-full bg-green-600 text-white py-3 text-sm font-medium hover:bg-green-700 disabled:opacity-50"
          >
            {submitting ? "Vykdoma..." : `Mokėti €${total.toFixed(2)}`}
          </button>
          <p className="text-[11px] text-gray-500">
            Pateikdami užsakymą sutinkate su paslaugų teikimo sąlygomis ir privatumo
            politika. Mokėjimų integracija bus aktyvuota pilno paleidimo metu.
          </p>
        </form>
      </aside>
    </div>
  );
}
