import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import Button from '../common/Button';

export default function CtaSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto rounded-3xl p-10 sm:p-16 bg-gradient-to-r from-[#2563EB] via-teal-600 to-[#10B981] text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">Start Driving Safer Today</h2>
          <p className="text-blue-100 text-base sm:text-lg">
            Experience safety-first navigation powered by accident prediction and explainable risk scores.
          </p>
          <div className="pt-2">
            <Button
              variant="secondary"
              size="lg"
              icon={HiArrowRight}
              onClick={() => window.location.href = '#planner'}
              className="bg-white text-slate-900 border-none hover:bg-slate-100"
            >
              Plan Safe Route
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}