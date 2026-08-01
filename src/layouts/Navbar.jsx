import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiShieldCheck, HiMenu, HiX } from 'react-icons/hi';
import ThemeToggle from '../common/ThemeToggle';
import Button from '../common/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Route Planner', href: '#planner' },
    { name: 'Hazard Detection', href: '#hazards' },
    { name: 'Dashboard', href: '#dashboard' },
    { name: 'About', href: '#about' },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-slate-950/70 border-b border-slate-200/60 dark:border-slate-800/60 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        <a href="#home" className="flex items-center gap-3 group">
          <div className="p-2.5 rounded-2xl bg-[#2563EB] text-white shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
            <HiShieldCheck className="w-7 h-7" />
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            RoadSense<span className="text-[#10B981]">AI</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors hover:text-[#2563EB] dark:hover:text-[#10B981] ${
                idx === 0 ? 'text-[#2563EB] dark:text-[#10B981] font-semibold' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <ThemeToggle />
          <Button onClick={() => window.location.href = '#planner'}>
            Get Started
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200"
          >
            {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-6 py-6 space-y-4"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block font-semibold text-lg text-slate-700 dark:text-slate-200 hover:text-[#2563EB]"
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full" onClick={() => setIsOpen(false)}>
              Get Started
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}