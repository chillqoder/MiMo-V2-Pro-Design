'use client';

import { motion } from 'framer-motion';

interface StatBadgeProps {
  label: string;
  value: string | number;
  color?: 'gold' | 'teal' | 'coral' | 'violet' | 'sage';
  delay?: number;
}

const colorMap = {
  gold: 'bg-accent-gold/15 text-accent-gold border-accent-gold/30',
  teal: 'bg-accent-teal/15 text-accent-teal border-accent-teal/30',
  coral: 'bg-chart-coral/15 text-chart-coral border-chart-coral/30',
  violet: 'bg-chart-violet/15 text-chart-violet border-chart-violet/30',
  sage: 'bg-chart-sage/15 text-chart-sage border-chart-sage/30',
};

export function StatBadge({ label, value, color = 'gold', delay = 0 }: StatBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: delay * 0.1, type: 'spring', stiffness: 200 }}
      className={`inline-flex flex-col items-center gap-1 px-4 py-3 rounded-xl border ${colorMap[color]}`}
    >
      <span className="text-xs uppercase tracking-wider opacity-70">{label}</span>
      <span className="text-lg font-display font-semibold">{value}</span>
    </motion.div>
  );
}
