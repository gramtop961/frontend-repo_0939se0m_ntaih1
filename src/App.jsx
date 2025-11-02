import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import ProductGrid from './components/ProductGrid.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  useEffect(() => {
    document.title = 'Beats-style Audio Shop — Sleek, Modern, Interactive';

    const ensureMeta = (name, content) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    };

    ensureMeta('description', 'Premium audio store with interactive 3D hero. Explore sleek wireless headphones and earbuds in a modern, minimal interface.');
    ensureMeta('keywords', 'headphones, earbuds, wireless audio, ANC, spatial audio, premium sound, beats style');
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-inter">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
