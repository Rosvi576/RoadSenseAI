import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiMapPin, FiActivity, FiShield, FiAlertTriangle, FiArrowRight } from 'react-icons/fi';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-950 pt-16 pb-24 lg:pt-24 lg:pb-32 transition-colors duration-300">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/15 to-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Next-Gen Predictive AI Navigation
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.1]"
            >
              Navigate Safer.{' '}
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                Drive Smarter.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal"
            >
              AI-powered road intelligence that predicts accidents, road hazards, traffic congestion, and weather risks before you drive.
            </motion.p>

            {/* Action Buttons using React Router Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/planner"
                  className="w-full sm:w-auto px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-blue-600 to-emerald-500 hover:from-blue-700 hover:to-emerald-600 rounded-xl shadow-xl shadow-blue-500/25 dark:shadow-emerald-500/15 flex items-center justify-center gap-2 transition-all duration-300"
                >
                  Plan Safe Route
                  <FiArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }} 
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Link
                  to="/dashboard"
                  className="w-full sm:w-auto px-8 py-4 text-base font-semibold text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-800 transition-all duration-300 text-center block"
                >
                  View Dashboard
                </Link>
              </motion.div>
            </motion.div>
          </div>

          {/* Graphic / Interactive Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl border border-slate-200/80 dark:border-slate-800/80 p-6 shadow-2xl shadow-blue-500/10 dark:shadow-emerald-500/5">
              
              {/* Card Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400">
                    <FiMapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">Route Safety Matrix</p>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Downtown to Airport Express</p>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-bold rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                  <FiShield className="w-3.5 h-3.5" /> 98% Safe
                </span>
              </div>

              {/* Dynamic Stats */}
              <div className="grid grid-cols-2 gap-4 my-6">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                    <FiActivity className="w-4 h-4 text-emerald-500" /> Hazard Index
                  </div>
                  <p className="text-xl font-extrabold text-slate-900 dark:text-white">Very Low</p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 dark:text-slate-400 mb-1">
                    <FiAlertTriangle className="w-4 h-4 text-amber-500" /> Weather Risk
                  </div>
                  <p className="text-xl font-extrabold text-slate-900 dark:text-white">Minimal Rain</p>
                </div>
              </div>

              {/* Progress Visual */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-semibold">
                  <span className="text-slate-600 dark:text-slate-400">AI Risk Assessment</span>
                  <span className="text-emerald-600 dark:text-emerald-400">Optimal Route Confirmed</span>
                </div>
                <div className="w-full h-2.5 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '92%' }}
                    transition={{ duration: 1.2, delay: 0.5 }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-emerald-500"
                  />
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;