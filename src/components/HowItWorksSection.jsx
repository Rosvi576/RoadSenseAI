import { motion } from 'framer-motion';
import { FiMap, FiCpu, FiCheckCircle, FiCompass } from 'react-icons/fi';

const steps = [
  {
    number: '01',
    icon: FiMap,
    title: 'Select Destination',
    description: 'Input your departure and arrival points to initialize the safety routing engine.',
  },
  {
    number: '02',
    icon: FiCpu,
    title: 'AI Collects Data',
    description: 'Neural networks continuously process weather, congestion, and historical accident feeds.',
  },
  {
    number: '03',
    icon: FiCheckCircle,
    title: 'Safety Score Generated',
    description: 'Each possible corridor receives a dynamically calculated risk score in milliseconds.',
  },
  {
    number: '04',
    icon: FiCompass,
    title: 'Recommended Route Displayed',
    description: 'Turn-by-turn guidance directs you through the optimal, safest path available.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-emerald-600 dark:text-blue-400">
            Seamless Process
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How RoadSenseAI Works
          </p>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Four simple steps to turn real-time data into a secure driving experience.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-6 border border-slate-200/60 dark:border-slate-800/60"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center font-bold">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-2xl font-black text-slate-300 dark:text-slate-700">
                    {step.number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;