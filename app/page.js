
'use client';
import { motion } from 'framer-motion';
import StarBackground from '../components/StarBackground';


export default function Home() {
  return (
    <main className="relative">
          <StarBackground />
      

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full backdrop-blur bg-black/40 border-b border-white/10 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between">
         <a href='/'> <span className="font-bold text-xl tracking-wide">
  Amit<span className="text-primary">Web</span>
  <span className="text-gray-400 text-sm ml-2 font-medium">
    Digital Experience Studio
  </span>
</span></a>
         <div className="flex gap-6 items-center">
  <a href="/work" className="text-sm text-gray-300 hover:text-white">
    Work
  </a>
  <a href="#contact" className="bg-primary px-5 py-2 rounded-full text-sm">
    Get Quote
  </a>
</div>

        </div>
      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-6xl font-extrabold leading-tight">
            Premium Websites<br/>That Grow Your Business
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-gray-300">
            I design and develop high-end, animated, SEO-optimized websites for
            businesses that want more leads and credibility.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <a href="#contact" className="bg-primary px-8 py-4 rounded-full font-semibold">
              Free Consultation
            </a>
            <a href="#work" className="border border-white/20 px-8 py-4 rounded-full">
              View Work
            </a>
          </div>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {['Business Website','E‑Commerce','Landing Pages'].map((s,i)=>(
            <motion.div
              key={i}
              whileHover={{ y: -12 }}
              className="bg-white/5 backdrop-blur p-8 rounded-2xl border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-3">{s}</h3>
              <p className="text-gray-400">
                Premium UI, smooth animations and conversion‑focused structure.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="py-32 bg-black/40">
        <h2 className="text-4xl font-bold text-center mb-16">Pricing</h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          <div className="p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl mb-2">Starter</h3>
            <p className="text-4xl font-bold">₹9,999</p>
          </div>
          <div className="p-10 rounded-2xl bg-primary text-black scale-105">
            <h3 className="text-xl mb-2">Professional</h3>
            <p className="text-4xl font-bold">₹24,999</p>
          </div>
          <div className="p-8 rounded-2xl border border-white/10">
            <h3 className="text-xl mb-2">Enterprise</h3>
            <p className="text-4xl font-bold">Custom</p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-32 text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Build Something Great</h2>
        <p className="text-gray-400 mb-8">
          WhatsApp me directly and get a free consultation.
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
