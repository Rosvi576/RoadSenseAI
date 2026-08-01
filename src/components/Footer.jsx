import { FiNavigation, FiGithub, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer id="footer" className="bg-slate-900 text-slate-400 border-t border-slate-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4">
            <a href="#" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-emerald-500 flex items-center justify-center text-white">
                <FiNavigation className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl text-white tracking-tight">
                RoadSense<span className="text-emerald-400 font-extrabold">AI</span>
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed">
              Predictive AI road intelligence that prevents accidents, navigates traffic, and guarantees safe journeys globally.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-emerald-400 transition-colors">How It Works</a></li>
              <li><a href="#comparison" className="hover:text-emerald-400 transition-colors">Comparison</a></li>
              <li><a href="#cta" className="hover:text-emerald-400 transition-colors">Plan Route</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <FiMail className="w-4 h-4 text-emerald-400" />
                <span>support@roadsense.ai</span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="w-4 h-4 text-emerald-400" />
                <span>+1 (800) 555-ROAD</span>
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin className="w-4 h-4 text-emerald-400" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>

          {/* Social / GitHub */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Developer & Source</h4>
            <p className="text-sm mb-4">Check our open-source AI routing libraries and SDKs.</p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-semibold transition-colors"
            >
              <FiGithub className="w-5 h-5" />
              GitHub Repository
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} RoadSenseAI Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;