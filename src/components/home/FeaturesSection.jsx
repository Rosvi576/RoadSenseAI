import React from 'react';
import { motion } from 'framer-motion';
import Card from '../common/Card';
import { FEATURES } from '../../constants/features';

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#10B981] px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
            Platform Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Comprehensive Road Safety Telemetry
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Powered by machine learning to analyze crash probability, evaluate environmental risk, and guide commuters safely.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((item, idx) => (
            <Card key={item.id} className="flex flex-col justify-between">
              <div>
                <div className={`w-14 h-14 rounded-2xl ${item.bg} ${item.color} flex items-center justify-center mb-6`}>
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}