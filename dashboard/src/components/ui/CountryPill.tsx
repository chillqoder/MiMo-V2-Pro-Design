'use client';

import { motion } from 'framer-motion';
import { Country } from '@/data/types';

interface CountryPillProps {
  country: Country;
  isSelected: boolean;
  onClick: () => void;
  layout?: boolean;
}

export function CountryPill({ country, isSelected, onClick, layout = true }: CountryPillProps) {
  return (
    <button
      onClick={onClick}
      className="relative pill px-4 py-2 text-sm font-body cursor-pointer transition-colors"
      aria-label={`Filter by ${country.name}`}
      aria-pressed={isSelected}
    >
      {isSelected && (
        <motion.div
          layoutId={layout ? 'pill-bg' : undefined}
          className="absolute inset-0 bg-accent-gold/20 border border-accent-gold/50 pill"
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
      <span className={`relative z-10 flex items-center gap-2 ${isSelected ? 'text-accent-gold' : 'text-text-muted hover:text-text-primary'} transition-colors`}>
        <span>{country.flag}</span>
        <span>{country.name}</span>
      </span>
    </button>
  );
}
