import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiPlay, HiLocationMarker, HiExclamation } from 'react-icons/hi';
import Button from '../common/Button';

export default function HeroSection() {
  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8 text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-[#10B981]/10 text-[#10B981] font-semibold text-xs tracking-wide">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              AI Road Safety Platform
            </div>

            <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-white">
              Predict. Prevent. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-teal-500 to-[#10B981]">
                Protect.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Our AI analyzes accident hotspots, road conditions, reported hazards, weather information, and road quality to recommend the safest route.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Button size="lg" icon={HiArrowRight} onClick={() => window.location.href = '#planner'}>
                Get Started
              </Button>

              <Button variant="secondary" size="lg" icon={HiPlay}>
                Watch Demo
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Live Telemetry</span>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-amber-500/10 text-[#F59E0B] border border-amber-500/20">
                  Moderate Risk Zone
                </span>
              </div>

              <div className="relative h-64 rounded-2xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 p-4 flex flex-col justify-between border border-slate-800">
                <div className="self-end bg-red-500/20 border border-red-500/40 px-3 py-1.5 rounded-xl flex items-center gap-2 text-red-300 text-xs font-semibold animate-pulse">
                  <HiExclamation className="w-4 h-4 text-[#EF4444]" />
                  <span>High Crash Corridor Ahead</span>
                </div>

                <div className="relative h-32 w-full flex justify-center items-end">
                  <div className="w-40 h-32 bg-slate-800 transform rotate-45 border-t-4 border-l-4 border-[#10B981] shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                    <div className="w-full h-full border-t-2 border-l-2 border-dashed border-sky-400/50" />
                  </div>
                  <div className="absolute bottom-4 p-2.5 rounded-xl bg-[#10B981] text-white shadow-lg shadow-emerald-500/50 animate-bounce">
                    <HiLocationMarker className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                  <span className="text-[10px] font-bold uppercase text-[#10B981]">Safest Route</span>
                  <p className="text-lg font-extrabold text-slate-900 dark:text-white">24 mins</p>
                  <span className="text-xs text-[#10B981] font-semibold">Risk Score: 12 (Safe)</span>
                </div>
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 opacity-60">
                  <span className="text-[10px] font-bold uppercase text-slate-400">Fastest Route</span>
                  <p className="text-lg font-extrabold text-slate-900 dark:text-white">21 mins</p>
                  <span className="text-xs text-[#EF4444] font-semibold">Risk Score: 68 (High)</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}