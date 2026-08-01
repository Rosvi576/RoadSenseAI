import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { label: 'Roads Analysed', value: '1,000+' },
  { label: 'Prediction Accuracy', value: '96%' },
  { label: 'Hazards Reported', value: '500+' },
  { label: 'AI Monitoring', value: '24/7' }
];

export default function StatsSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 text-center space-y-1 shadow-sm"
            >
              <p className="text-3xl sm:text-4xl font-extrabold text-[#2563EB] dark:text-[#10B981]">{stat.value}</p>
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider pt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}