'use client';
import { motion } from 'framer-motion';
import StarBackground from '../components/StarBackground';

export default function Home() {
  return (
    <main className="relative">
      <StarBackground />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full backdrop-blur bg-black/40 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="font-bold text-lg sm:text-xl">
            Amit<span className="text-primary">WebSolution</span>
          </a>

          <div className="flex gap-4">
            <a href="/work" className="text-sm text-gray-300 hover:text-white mt-2">
              Work
            </a>
            <a
              href="#contact"
              className="bg-primary px-4 py-2 rounded-full text-sm font-medium"
            >
              Get Quote
            </a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
         <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
  High-Converting Websites for
  <span className="text-primary"> Serious Businesses</span>
</h1>

<p className="mt-6 max-w-xl mx-auto text-gray-300">
  I build fast, premium & SEO-ready websites that turn visitors into paying customers.
</p>




          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-primary px-8 py-4 rounded-full font-semibold"
            >
              Free Consultation
            </a>
            <a
              href="/work"
              className="border border-white/20 px-8 py-4 rounded-full"
            >
              View Work
            </a>
          </div>
           <p className="mt-6 text-sm text-gray-400">
  Trusted by startups & businesses across India • 10+ Projects Delivered
</p>
        </motion.div>
        
      </section>

      {/* SERVICES */}
      <section className="py-4 max-w-7xl mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {['Business Website', 'E-Commerce', 'Landing Pages'].map((s, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="bg-white/5 p-6 rounded-2xl border border-white/10"
            >
              <h3 className="text-lg font-semibold mb-2">{s}</h3>
              <p className="text-gray-400 text-sm">
  Designed to build trust, rank on Google and generate real business leads.
</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-24 max-w-6xl mx-auto px-4">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
    Why Clients Choose Me
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    <div className="p-6 border border-white/10 rounded-xl">
      <h3 className="font-semibold mb-2">Business-Focused Design</h3>
      <p className="text-gray-400 text-sm">
        I don’t just design websites — I design sales machines.
      </p>
    </div>

    <div className="p-6 border border-white/10 rounded-xl">
      <h3 className="font-semibold mb-2">SEO & Speed Optimized</h3>
      <p className="text-gray-400 text-sm">
        Clean code, fast load time & Google-friendly structure.
      </p>
    </div>

    <div className="p-6 border border-white/10 rounded-xl">
      <h3 className="font-semibold mb-2">Direct Founder Support</h3>
      <p className="text-gray-400 text-sm">
        No agency mess — you work directly with me.
      </p>
    </div>
  </div>
</section>


      {/* PRICING */}
      <section className="py-24 bg-black/40">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">
          Pricing
        </h2>

        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-2xl border border-white/10 text-center">
            <h3 className="text-lg">Starter</h3>
            <p className="text-3xl font-bold mt-2">₹9,999</p>
          </div>

          <div className="p-8 rounded-2xl bg-primary text-black text-center scale-105">
            <h3 className="text-lg">Professional</h3>
            <p className="text-3xl font-bold mt-2">₹24,999</p>
          </div>

          <div className="p-6 rounded-2xl border border-white/10 text-center">
            <h3 className="text-lg">Enterprise</h3>
            <p className="text-3xl font-bold mt-2">Custom</p>
          </div>
        </div>
        <p className="text-center text-gray-400 text-sm mt-6">
  Final pricing depends on features, pages & integrations.
</p>

      </section>

      {/* CONTACT */}
      <section id="contact" className="py-24 text-center px-4">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          Let’s Build Something Great
        </h2>
        <p className="text-gray-400 mb-6">
  Tell me about your business and I’ll suggest the best solution — free.
</p>
        <a
          href="https://wa.me/918574700615"
          className="bg-primary px-10 py-4 rounded-full font-semibold"
        >
          Chat on WhatsApp
        </a>
      </section>
    </main>
  );
}
