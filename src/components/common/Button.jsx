import React from 'react';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  icon: Icon,
  ...props 
}) {
  const baseStyles = 'inline-flex items-center justify-center font-bold rounded-2xl transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-[#2563EB] hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20',
    secondary: 'border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm',
    accent: 'bg-[#10B981] hover:bg-emerald-600 text-white shadow-lg shadow-emerald-500/20',
  };

  const sizes = {
    sm: 'px-4 py-2 text-xs',
    md: 'px-6 py-3 text-sm',
    lg: 'px-8 py-4 text-base',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      <span>{children}</span>
      {Icon && <Icon className="w-5 h-5 ml-2" />}
    </button>
  );
}