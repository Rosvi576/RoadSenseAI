import { motion } from 'framer-motion';
import { FiNavigation2, FiAlertCircle, FiEye, FiCloudRain } from 'react-icons/fi';

const features = [
  {
    icon: FiNavigation2,
    title: 'Safe Route Recommendation',
    description: 'Calculates the safest trajectory for your journey, prioritizing clear lanes and minimal hazard zones.',
  },
  {
    icon: FiAlertCircle,
    title: 'Accident Risk Prediction',
    description: 'Machine learning models analyze historical and real-time incident data to predict high-risk locations.',
  },
  {
    icon: FiEye,
    title: 'Road Hazard Detection',
    description: 'Early warnings for black ice, potholes, construction debris, and unexpected road blockages.',
  },
  {
    icon: FiCloudRain,
    title: 'Weather & Traffic Intelligence',
    description: 'Integrates real-time meteorology and dynamic traffic patterns to optimize live driving conditions.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 bg-slate-50/50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-extrabold uppercase tracking-widest text-blue-600 dark:text-emerald-400">
            Next-Gen Features
          </h2>
          <p className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Intelligent Safety Built into Every Mile
          </p>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400">
            Our predictive models keep you aware and proactive, transforming raw data into actionable driving intelligence.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-md rounded-2xl p-8 border border-slate-200/60 dark:border-slate-800/60 shadow-lg hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-emerald-500/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center text-white mb-6 shadow-md shadow-blue-500/20 group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-emerald-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FeaturesSection;