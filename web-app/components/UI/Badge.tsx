'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';

interface BadgeProps {
  count: number;
  className?: string;
}

export const Badge = memo(function Badge({ count, className = '' }: BadgeProps) {
  if (count === 0) return null;

  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      className={`min-w-[20px] h-5 px-1.5 rounded-full bg-accent text-white text-xs font-medium flex items-center justify-center ${className}`}
    >
      {count > 99 ? '99+' : count}
    </motion.div>
  );
});
