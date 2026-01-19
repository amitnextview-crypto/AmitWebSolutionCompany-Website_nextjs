'use client';
import { motion } from 'framer-motion';
import StarBackground from '../../components/StarBackground';

const projects = [
  {
    title: 'Digital Signage Website',
    client: 'Nextview Technologies India Pvt Ltd.',
    image: '/projects/fintech.png',
    description:
      'Enterprise-grade website with strong brand positioning, fast performance and SEO-first architecture.',
    review:
      'Our website finally reflects the quality of services we provide. Leads increased significantly.',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Nextview Payroll Platform',
    client: 'Nextview Technologies India Pvt Ltd.',
    image: '/projects/ecommerce.jpg',
    description:
      'High-end Payroll experience with smooth animations, clean UI and conversion-focused UX.',
    review:
      'The design feels premium and customers trust the brand more than ever.',
    tech: ['React', 'Node.js', 'Stripe'],
  },
  {
    title: 'Live Ahmedabad AQI Check System',
    client: 'Nextview Technologies India Pvt Ltd.',
    image: '/projects/landing.jpg',
    description:
      'Animated AQI landing pages built to convert traffic into high-quality leads.',
    review:
      'We recovered our entire website cost within the first month.',
    tech: ['Next.js', 'SEO', 'Analytics'],
  },
  {
    title: 'Nextview Product Details Page',
    client: 'Nextview Technologies India Pvt Ltd.',
    image: '/projects/product_details.png',
    description:
      'All-in-one product details page designed to boost trust and conversions.',
    review:
      'Perfect layout for explaining complex products simply.',
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
];

export default function Work() {
  return (
    <main className="relative pb-32">
      <StarBackground />

      {/* BACK BUTTON */}
      <a
        href="/"
        className="fixed top-4 right-4 z-50 bg-black/70 hover:bg-black/90 text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm"
      >
        ← Back
      </a>

      {/* HEADER */}
      <section className="pt-32 pb-20 text-center max-w-4xl mx-auto px-4">
       <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl md:text-6xl font-extrabold"
        >
          Crafted <span className="text-primary">Experiences</span>
        </motion.h1>

            <p className="mt-4 text-gray-400">
  Real projects built for real businesses — focused on growth, not just looks.
</p>

     
      </section>

      {/* PROJECT GRID */}
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="rounded-3xl overflow-hidden border border-white/10 bg-gray-900 shadow-xl">
              {/* IMAGE */}
              <div
                className="h-56 sm:h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${p.image})` }}
              />

              {/* CONTENT */}
              <div className="p-6 flex flex-col gap-4">
                <span className="text-blue-400 text-xs font-semibold">
                  {p.client}
                </span>

                <h2 className="text-xl sm:text-2xl font-bold">
                  {p.title}
                </h2>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {p.description}
                </p>

                {/* TECH */}
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs rounded-full bg-white/10 border border-white/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <blockquote className="italic text-yellow-400 border-l-4 border-primary pl-4 text-sm">
                  “{p.review}”
                </blockquote>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <section className="text-center mt-32 px-4">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
          Want results like these?
        </h2>
        <p className="text-gray-400 mb-8">
          Let’s build a premium animated website for your business.
        </p>
        <a
          href="https://wa.me/918574700615"
          className="bg-primary px-10 py-4 rounded-full font-semibold"
        >
          Start Your Project
        </a>
      </section>
    </main>
  );
}
