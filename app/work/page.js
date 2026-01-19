'use client';
import { motion } from 'framer-motion';
import StarBackground from '../../components/StarBackground';

const projects = [
  {
    title: 'Digital Signage Website',
    client: 'Nextview Technologies India Pvt Ltd.',
    image: "../projects/fintech.png",
    description:
      'Enterprise-grade website with strong brand positioning, fast performance and SEO-first architecture.',
    review:
      'Our website finally reflects the quality of services we provide. Leads increased significantly.',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'Nextview Payroll Platform',
    client: 'Nextview Technologies India Pvt Ltd.',
    image: '../projects/ecommerce.jpg',
    description:
      'High-end Payroll experience with smooth animations, clean UI and conversion-focused UX.',
    review:
      'The design feels premium and customers trust the brand more than ever.',
    tech: ['React', 'Node.js', 'Stripe'],
  },
  {
    title: 'Live Ahmedabad AQI Check System',
    client: 'Nextview Technologies India Pvt Ltd.',
    image: '../projects/landing.jpg',
    description:
      'Animated AQI landing pages built to convert traffic into high-quality leads.',
    review:
      'We recovered our entire website cost within the first month.',
    tech: ['Next.js', 'SEO', 'Analytics'],
  },
  {
    title: 'Nextview Product Details Page',
    client: 'Nextview Technologies India Pvt Ltd.',
    image: '../projects/product_details.png',
    description:
      'Nectview All in One Product Details Page built to convert traffic into high-quality leads.',
    review:
      'All In One Product Details Page built to convert traffic into high-quality leads.',
    tech: ['HTML', 'CSS', 'Javascript'],
  },
];

export default function Work() {
  return (
    <main className="pb-40 relative">
    <StarBackground />

{/* BACK BUTTON */}
<a
  href="/"
  className="fixed top-6 right-6 z-50 bg-black/70 hover:bg-black/90 text-white px-4 py-2 rounded-full shadow-lg font-medium flex items-center gap-2 hover:bg-primary transition-colors"
>
  {/* Optional arrow icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
  Back
</a>

      {/* HEADER */}
      <section className="pt-40 pb-32 text-center max-w-5xl mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-6xl font-extrabold"
        >
          Crafted <span className="text-primary">Experiences</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-8 text-gray-400 text-lg"
        >
          Selected projects where design, animation and strategy come together
          to drive real business growth.
        </motion.p>
      </section>

      {/* PROJECT SECTIONS */}
     {/* PROJECT SECTIONS */}
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
  {projects.map((p, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, delay: i * 0.15 }}
      viewport={{ once: true }}
      className="relative"
    >
      <motion.div
        whileHover={{ scale: 1.03, rotateX: 2, rotateY: 2 }}
        transition={{ duration: 0.5 }}
        className="relative h-[520px] rounded-[32px] overflow-hidden shadow-2xl bg-gray-900 border border-white/10"
      >
        {/* UPPER IMAGE PART */}
        <div className="h-1/2 w-full overflow-hidden">
          <motion.div
            className="w-full h-full bg-contain bg-center rounded-t-[32px]"
            style={{ backgroundImage: `url(${p.image})` }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1.2 }}
          />
        </div>

        {/* LOWER TEXT PART */}
        <div className="relative z-10 h-1/2 p-8 flex flex-col justify-between bg-gradient-to-t from-black/90 to-transparent">
          <div>
            <span className="text-blue-400 font-bold text-xs tracking-wider mb-2 block">
              {p.client}
            </span>

            <h2 className="text-2xl font-bold mb-3">{p.title}</h2>

            <p className="text-gray-300 mb-3 text-sm leading-relaxed">
              {p.description}
            </p>
          </div>

          <div>
            <div className="flex gap-2 flex-wrap mb-3">
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-[11px] rounded-full bg-white/10 border border-white/20"
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
    </motion.div>
  ))}
</div>



      {/* FINAL CTA */}
      <section className="text-center mt-48 px-6">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-5xl font-extrabold mb-6"
        >
          Want results like these?
        </motion.h2>

        <p className="text-gray-400 mb-10">
          Let’s build a premium animated website for your business.
        </p>

        <a
          href="https://wa.me/918574700615"
          className="bg-primary px-12 py-5 rounded-full font-semibold"
        >
          Start Your Project
        </a>
      </section>
    </main>
  );
}
