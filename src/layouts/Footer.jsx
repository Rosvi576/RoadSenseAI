import React from 'react';
import { HiShieldCheck } from 'react-icons/hi';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 text-slate-600 dark:text-slate-400 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
        
        <div className="col-span-2 md:col-span-1 space-y-3">
          <div className="flex items-center gap-2">
            <HiShieldCheck className="w-6 h-6 text-[#2563EB] dark:text-[#10B981]" />
            <span className="font-extrabold text-lg text-slate-900 dark:text-white">RoadSenseAI</span>
          </div>
          <p className="text-xs leading-relaxed">Predicting road risks, analyzing safety factors, and ensuring secure commutes through artificial intelligence.</p>
        </div>

        <div>
          <p className="font-bold text-slate-900 dark:text-white mb-3 text-xs uppercase tracking-wider">Quick Links</p>
          <ul className="space-y-2 text-xs">
            <li><a href="#home" className="hover:text-[#2563EB]">Home</a></li>
            <li><a href="#planner" className="hover:text-[#2563EB]">Route Planner</a></li>
            <li><a href="#hazards" className="hover:text-[#2563EB]">Community Reporting</a></li>
            <li><a href="#dashboard" className="hover:text-[#2563EB]">Safety Dashboard</a></li>
          </ul>
        </div>

        <div>
          <p className="font-bold text-slate-900 dark:text-white mb-3 text-xs uppercase tracking-wider">Contact</p>
          <p className="text-xs">support@roadsense.ai</p>
          <p className="text-xs mt-1">NIT Hackathon Project</p>
        </div>

        <div>
          <p className="font-bold text-slate-900 dark:text-white mb-3 text-xs uppercase tracking-wider">Social</p>
          <div className="flex gap-4 text-slate-500">
            <a href="#" className="hover:text-[#2563EB]"><FaTwitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#2563EB]"><FaGithub className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#2563EB]"><FaLinkedin className="w-5 h-5" /></a>
          </div>
          <p className="text-[10px] text-slate-400 pt-6">© 2026 RoadSenseAI. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}