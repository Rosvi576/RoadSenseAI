import React from 'react';
import { motion } from 'framer-motion';
import { HiCheck, HiMinus } from 'react-icons/hi';

const comparisonData = [
  { feature: 'Fastest Route Optimization', googleMaps: true, roadSense: true },
  { feature: 'Live Traffic Updates', googleMaps: true, roadSense: true },
  { feature: 'Turn-by-Turn Navigation', googleMaps: true, roadSense: true },
  { feature: 'Safety Score (0-100 Index)', googleMaps: false, roadSense: true },
  { feature: 'Accident Hotspot Prediction', googleMaps: false, roadSense: true },
  { feature: 'Road Condition Analysis', googleMaps: false, roadSense: true },
  { feature: 'Weather-Aware Risk Calculation', googleMaps: false, roadSense: true },
  { feature: 'Explainable AI Route Reasons', googleMaps: false, roadSense: true },
  { feature: 'Safety vs Speed Preference Control', googleMaps: false, roadSense: true },
];

export default function ComparisonSection() {
  return (
    <section className="py-20 bg-slate-50/50 dark:bg-slate-900/30 border-y border-slate-200/60 dark:border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">A Safety-First Intelligence Layer</h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            RoadSenseAI works alongside existing navigation frameworks to bring safety analysis to your journey.
          </p>
        </div>

        {/* Structured Comparison Table */}
        <div className="max-w-4xl mx-auto overflow-hidden rounded-3xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-lg">
          <div className="grid grid-cols-12 bg-slate-100 dark:bg-slate-800/60 p-4 sm:p-6 font-bold text-xs sm:text-sm text-slate-700 dark:text-slate-200 border-b border-slate-200 dark:border-slate-800">
            <div className="col-span-6">Capability / Feature</div>
            <div className="col-span-3 text-center">Google Maps</div>
            <div className="col-span-3 text-center text-[#10B981]">RoadSenseAI</div>
          </div>

          <div className="divide-y divide-slate-200 dark:divide-slate-800/60">
            {comparisonData.map((row) => (
              <div key={row.feature} className="grid grid-cols-12 p-4 sm:p-5 items-center text-xs sm:text-sm hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                <div className="col-span-6 font-medium text-slate-800 dark:text-slate-200">{row.feature}</div>
                <div className="col-span-3 flex justify-center">
                  {row.googleMaps ? (
                    <HiCheck className="w-5 h-5 text-slate-500" />
                  ) : (
                    <HiMinus className="w-5 h-5 text-slate-300 dark:text-slate-700" />
                  )}
                </div>
                <div className="col-span-3 flex justify-center">
                  <HiCheck className="w-5 h-5 text-[#10B981]" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}