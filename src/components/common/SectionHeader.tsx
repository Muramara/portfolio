import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle: string;
  description: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, subtitle, description }) => {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      <h2 className="text-blue-600 dark:text-blue-400 font-bold text-sm sm:text-base uppercase tracking-wider mb-2">
        {subtitle}
      </h2>
      <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
        {title}
      </h3>
      <p className="text-slate-700 dark:text-slate-300">
        {description}
      </p>
    </div>
  );
};

export default SectionHeader;