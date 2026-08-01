import React from 'react';
import { motion } from 'framer-motion';
import { HiOutlineMapPin, HiOutlineCpuChip, HiOutlineChartBar, HiOutlineShieldCheck } from 'react-icons/hi2';

const steps = [
  { step: '01', title: 'Plan Route', desc: 'Enter starting origin and intended destination.', icon: HiOutlineMapPin },
  { step: '02', title: 'AI Analyses Road Safety', desc: 'Evaluates historical crash data, geometry, and real-time conditions.', icon: HiOutlineCpuChip },
  { step: '03', title: 'Risk Score Generation', desc: 'Computes a dynamic Road Risk Score for available routes.', icon: HiOutlineChartBar },
  { step: '04', title: 'Safe Route Recommendation', desc: 'Guides you along the lowest-risk route with explainable safety insights.', icon: HiOutlineShieldCheck }
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">How RoadSenseAI Works</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">An intelligent process prioritizing route safety over pure travel speed.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              className="p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-4 relative"
            >
              <div className="flex items-center justify-between">
                <span className="text-4xl font-black text-[#2563EB]/20 dark:text-blue-500/20">{item.step}</span>
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 text-[#2563EB] dark:text-[#10B981]">
                  <item.icon className="w-6 h-6" />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}