'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full backdrop-blur bg-black/40 border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* LOGO */}
        <a href="/" className="font-bold text-lg sm:text-xl">
          Amit<span className="text-primary">WebSolution</span>
        </a>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="/work" className="text-sm text-gray-300 hover:text-white">
            Work
          </a>
          <a href="/services" className="text-sm text-gray-300 hover:text-white">
            Services
          </a>
          <a href="/about" className="text-sm text-gray-300 hover:text-white">
            About
          </a>
          <a
            href="#contact"
            className="bg-primary px-4 py-2 rounded-full text-sm font-medium"
          >
            Get Quote
          </a>
        </div>

        {/* HAMBURGER BUTTON (Mobile / Tablet) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 border-t border-white/10"
          >
            <div className="flex flex-col px-6 py-6 gap-4">
              <a onClick={() => setOpen(false)} href="/work">Work</a>
              <a onClick={() => setOpen(false)} href="/services">Services</a>
              <a onClick={() => setOpen(false)} href="/about">About</a>
              <a
                onClick={() => setOpen(false)}
                href="#contact"
                className="bg-primary px-4 py-2 rounded-full text-center"
              >
                Get Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
    
  );
}
