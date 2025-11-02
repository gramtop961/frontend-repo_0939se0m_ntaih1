export default function Footer() {
  return (
    <footer id="support" className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-white/70">
        <div>
          <div className="flex items-center gap-3">
            <div className="size-8 rounded-full bg-white flex items-center justify-center">
              <span className="text-black font-bold">b</span>
            </div>
            <span className="text-base text-white font-semibold">beats.store</span>
          </div>
          <p className="mt-3 max-w-xs">Sleek, modern audio gear designed for pure immersion and everyday comfort.</p>
        </div>
        <div>
          <p className="text-white font-medium">Shop</p>
          <ul className="mt-3 space-y-2">
            <li><a href="#products" className="hover:text-white">Headphones</a></li>
            <li><a href="#products" className="hover:text-white">Earbuds</a></li>
            <li><a href="#" className="hover:text-white">Accessories</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-medium">Support</p>
          <ul className="mt-3 space-y-2">
            <li><a href="#support" className="hover:text-white">Help Center</a></li>
            <li><a href="#support" className="hover:text-white">Warranty</a></li>
            <li><a href="#support" className="hover:text-white">Order Status</a></li>
          </ul>
        </div>
        <div>
          <p className="text-white font-medium">Newsletter</p>
          <p className="mt-3">Get product news and offers.</p>
          <form className="mt-3 flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="flex-1 rounded-full bg-white/10 border border-white/10 px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
            />
            <button type="submit" className="px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-white/90 transition">
              Sign up
            </button>
          </form>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 text-xs text-white/50 flex flex-wrap items-center gap-4 justify-between">
          <p>© {new Date().getFullYear()} beats.store — All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white/80">Privacy</a>
            <a href="#" className="hover:text-white/80">Terms</a>
            <a href="#" className="hover:text-white/80">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
