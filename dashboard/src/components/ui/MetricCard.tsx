'use client';

import { motion } from 'framer-motion';
import { useCountUp } from '@/hooks/useCountUp';
import { formatCurrency } from '@/lib/utils';

interface MetricCardProps {
  label: string;
  value: number;
  icon?: React.ReactNode;
  delay?: number;
  animate?: boolean;
}

export function MetricCard({ label, value, icon, delay = 0, animate = true }: MetricCardProps) {
  const count = useCountUp(value, 1.2, animate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, damping: 15, delay: delay * 0.1 }}
      whileHover={{ y: -4, boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}
      className="card p-5 flex flex-col gap-2 min-w-[160px]"
    >
      {icon && <div className="text-accent-gold mb-1">{icon}</div>}
      <p className="text-text-muted text-sm font-body">{label}</p>
      <p className="text-3xl font-display font-semibold text-text-primary">
        {formatCurrency(count)}
      </p>
      <p className="text-text-muted text-xs">/month</p>
    </motion.div>
  );
}

export function MetricCardSkeleton() {
  return (
    <div className="card p-5 flex flex-col gap-2 min-w-[160px]">
      <div className="skeleton w-8 h-8 rounded" />
      <div className="skeleton w-20 h-4 rounded" />
      <div className="skeleton w-28 h-8 rounded" />
      <div className="skeleton w-12 h-3 rounded" />
    </div>
  );
}
