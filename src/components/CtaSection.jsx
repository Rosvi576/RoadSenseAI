import { motion } from 'framer-motion';
import { FiArrowRight, FiShield } from 'react-icons/fi';

const CtaSection = () => {
  return (
    <section id="cta" className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-600 p-8 sm:p-14 lg:p-16 text-center text-white shadow-2xl shadow-blue-600/20"
        >
          {/* Subtle Background Accent */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-white/10 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-emerald-200">
              <FiShield className="w-4 h-4" /> Start Driving Safer Today
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              Ready to Upgrade Your Drive with Predictive AI Safety?
            </h2>

            <p className="text-base sm:text-lg text-blue-100 font-normal max-w-2xl mx-auto">
              Join thousands of drivers making proactive routing decisions every single day. Plan your safest route in seconds.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#"
                className="w-full sm:w-auto px-8 py-4 font-bold text-blue-900 bg-white hover:bg-slate-50 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all duration-300"
              >
                Plan Safe Route Now
                <FiArrowRight className="w-5 h-5" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;