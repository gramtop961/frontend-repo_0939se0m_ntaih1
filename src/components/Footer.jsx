export default function Footer() {
  return (
    <footer id="support" className="border-t border-white/10 bg-black py-12 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <h4 className="mb-3 text-sm font-semibold tracking-wide text-white/80">Parduotuvė</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#products" className="hover:text-white">Matcha</a></li>
            <li><a href="#" className="hover:text-white">Priedai</a></li>
            <li><a href="#" className="hover:text-white">Dovanų rinkiniai</a></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-3 text-sm font-semibold tracking-wide text-white/80">Pagalba</h4>
          <ul className="space-y-2 text-sm text-white/70">
            <li><a href="#" className="hover:text-white">Pristatymas ir grąžinimai</a></li>
            <li><a href="#" className="hover:text-white">DUK</a></li>
            <li><a href="#" className="hover:text-white">Kontaktai</a></li>
          </ul>
        </div>
        <div className="sm:col-span-2">
          <h4 className="mb-3 text-sm font-semibold tracking-wide text-white/80">Naujienlaiškis</h4>
          <p className="mb-4 text-sm text-white/70">Gaukite receptų, ritualų ir ribotų leidimų naujienas.</p>
          <form className="flex max-w-md gap-2">
            <input type="email" required placeholder="el. paštas" className="w-full rounded-full border border-white/10 bg-zinc-900/60 px-4 py-2 text-sm text-white placeholder:text-white/40 focus:border-white/30 focus:outline-none" />
            <button className="rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-400">Prenumeruoti</button>
          </form>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Matcha Mono. Visos teisės saugomos.</p>
          <p>Pagaminta su meile Japonijoje • Tvarūs ūkiai</p>
        </div>
      </div>
    </footer>
  );
}
