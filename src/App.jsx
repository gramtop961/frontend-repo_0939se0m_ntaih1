import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Blog from './components/Blog';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    document.title = 'Matcha Mono — Autentiška japoniška matcha arbata';
    const metaDesc = document.querySelector('meta[name="description"]');
    const metaKeywords = document.querySelector('meta[name="keywords"]');

    const description =
      'Aukščiausios kokybės japoniška matcha: ceremonial, daily ir specialūs mišiniai. Tvari kilmė, ryški žalia spalva ir švarus skonis.';
    const keywords =
      'matcha, japoniška arbata, uji, kagoshima, ceremonial grade, latte, žalia arbata, premium matcha, blogas, receptai, paruošimas';

    if (metaDesc) metaDesc.setAttribute('content', description);
    if (metaKeywords) metaKeywords.setAttribute('content', keywords);
  }, []);

  return (
    <div className="min-h-screen bg-black font-inter text-white">
      <Navbar />
      <main>
        <Hero />
        <ProductGrid />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}
