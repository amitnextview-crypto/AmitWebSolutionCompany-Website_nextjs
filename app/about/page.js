'use client';
import { motion } from 'framer-motion';
import StarBackground from '../../components/StarBackground';

export default function About() {
  return (
    <main className="relative pb-32">
      <StarBackground />
 <a
        href="/"
        className="fixed top-4  right-12 md:right-4 z-50 bg-black/70 hover:bg-black/90 px-4 py-2 rounded-full text-sm"
      >
        ← Back
      </a>

      {/* HERO */}
      <section className="pt-32 pb-20 text-center max-w-4xl mx-auto px-4">
         {/* BACK */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold"
        >
          About <span className="text-primary">Amit</span>
        </motion.h1>

        <p className="mt-6 text-gray-400">
          Full-Stack Developer • MERN Stack • Business-Driven Engineering
        </p>
      </section>

      {/* CONTENT */}
      <section className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-2xl font-bold mb-4">
            Hi, I’m Amit Maddheshiya 👋
          </h2>

          <p className="text-gray-300 mb-4">
            I’m a <strong>Full-Stack MERN Developer</strong> with
            <strong> 3+ years of experience</strong> building scalable,
            high-performance web products for startups and businesses.
          </p>

          <p className="text-gray-400 text-sm">
            I don’t just write code — I understand business goals, user
            psychology and conversion strategy. That’s why my websites
            don’t just look good, they <strong>generate results</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="p-8 rounded-3xl border border-white/10 bg-white/5"
        >
          <h3 className="font-semibold mb-4">Quick Facts</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            <li>🚀 MERN Stack Specialist</li>
            <li>⚡ Performance & SEO focused</li>
            <li>🧠 Business-first mindset</li>
            <li>🤝 Direct founder support</li>
            <li>📧 amitwebsolutioncompany@gmail.com</li>
          </ul>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="text-center mt-32 px-4">
        <h2 className="text-3xl font-bold mb-4">
          Let’s build something powerful
        </h2>
        <p className="text-gray-400 mb-6">
          Have an idea or a business problem? I can help.
        </p>
        <a
          href="https://wa.me/918574700615"
          className="bg-primary px-10 py-4 rounded-full font-semibold"
        >
          Contact Me
        </a>
      </section>
    </main>
  );
}
