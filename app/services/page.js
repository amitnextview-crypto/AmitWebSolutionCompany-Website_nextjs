'use client';
import { motion } from 'framer-motion';
import StarBackground from '../../components/StarBackground';

const services = [
  {
    title: 'Business Websites',
    desc: 'High-trust, conversion-focused websites built to attract serious clients and rank on Google.',
    points: ['SEO-first structure', 'Fast load time', 'Professional UI/UX'],
  },
  {
    title: 'MERN Stack Applications',
    desc: 'Scalable full-stack web applications using MongoDB, Express, React & Node.js.',
    points: ['Clean architecture', 'Secure APIs', 'Future-ready'],
  },
  {
    title: 'Landing Pages',
    desc: 'High-converting landing pages designed for ads, startups & product launches.',
    points: ['Conversion copy', 'A/B ready', 'Lightning fast'],
  },
  {
    title: 'UI/UX Design',
    desc: 'Modern, premium interfaces that feel trustworthy and drive action.',
    points: ['Design systems', 'Mobile-first', 'Brand aligned'],
  },
];

export default function Services() {
  return (
    <main className="relative pb-32">
      <StarBackground />

      {/* BACK */}
      <a
        href="/"
        className="fixed top-4  right-12 md:right-4 z-50 bg-black/70 hover:bg-black/90 px-4 py-2 rounded-full text-sm"
      >
        ← Back
      </a>


      {/* HEADER */}
      <section className="pt-32 pb-20 text-center max-w-4xl mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
        >
          Premium <span className="text-primary">Services</span>
        </motion.h1>

        <p className="mt-4 text-gray-400">
          Everything you need to build, scale and dominate online.
        </p>
      </section>

      {/* SERVICES GRID */}
      <section className="max-w-7xl mx-auto px-4 grid sm:grid-cols-2 gap-10">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl border border-white/10 bg-white/5"
          >
            <h3 className="text-xl font-bold mb-3">{s.title}</h3>
            <p className="text-gray-400 text-sm mb-4">{s.desc}</p>

            <ul className="space-y-2 text-sm text-gray-300">
              {s.points.map((p, idx) => (
                <li key={idx}>✔ {p}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </section>

      {/* CTA */}
      <section className="text-center mt-32 px-4">
        <h2 className="text-3xl font-bold mb-4">
          Need a custom solution?
        </h2>
        <p className="text-gray-400 mb-6">
          Tell me your goal — I’ll design the right tech & strategy.
        </p>
        <a
          href="https://wa.me/918574700615"
          className="bg-primary px-10 py-4 rounded-full font-semibold"
        >
          Get Free Consultation
        </a>
      </section>
    </main>
  );
}
