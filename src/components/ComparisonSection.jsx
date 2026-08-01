import { motion } from 'framer-motion';
import { FiCheck, FiX, FiShield, FiClock } from 'react-icons/fi';

const comparisons = [
  {
    feature: 'Primary Optimization Target',
    googleMaps: 'Shortest travel time only',
    roadSenseAI: 'Maximum driver safety + optimized time',
  },
  {
    feature: 'Accident Risk Forecasting',
    googleMaps: 'Reactive (post-incident alerts)',
    roadSenseAI: 'Proactive (predictive risk scores)',
  },
  {
    feature: 'Hazard & Weather Integration',
    googleMaps: 'Basic delay alerts',
    roadSenseAI: 'Hyper-local climate & surface risk models',
  },
  {
    feature: 'Custom Safety Profiles',
    googleMaps: 'Not Available',
    roadSenseAI: 'Adjustable for night, rain, and driver experience',
  },
  {
    feature: 'Real-Time Dynamic Rerouting',
    googleMaps: 'Traffic density dependent',
    roadSenseAI: 'Predictive multi-vector assessment',
  },
];

const ComparisonSection = () => {
  return (
    <section id="comparison" className="py-20 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-emerald-400">
            Why We Are Different
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Traditional Navigation vs RoadSenseAI
          </p>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Speed matters, but arriving safely matters most. See how our safety-first engine compares.
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Traditional Maps Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/80 dark:bg-slate-900/80 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-md"
          >
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                <FiClock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">Google Maps</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">Standard Navigation</p>
              </div>
            </div>

            <ul className="space-y-6">
              {comparisons.map((item) => (
                <li key={item.feature} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 mt-0.5">
                    <FiX className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block">
                      {item.feature}
                    </span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {item.googleMaps}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RoadSenseAI Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-b from-blue-50/50 to-emerald-50/50 dark:from-slate-900 dark:to-slate-900/90 rounded-2xl p-8 border-2 border-emerald-500/50 dark:border-emerald-500/30 shadow-xl relative"
          >
            <div className="absolute -top-3.5 right-6 bg-gradient-to-r from-blue-600 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Safety Focus
            </div>

            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200/80 dark:border-slate-800">
              <div className="p-2.5 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-500 text-white">
                <FiShield className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">RoadSenseAI</h3>
                <p className="text-xs text-blue-600 dark:text-emerald-400 font-semibold">Predictive Safety Engine</p>
              </div>
            </div>

            <ul className="space-y-6">
              {comparisons.map((item) => (
                <li key={item.feature} className="flex items-start gap-3">
                  <div className="p-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-600 dark:text-emerald-400 mt-0.5">
                    <FiCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block">
                      {item.feature}
                    </span>
                    <span className="text-sm font-bold text-slate-900 dark:text-white">
                      {item.roadSenseAI}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ComparisonSection;