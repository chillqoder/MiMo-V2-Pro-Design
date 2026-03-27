'use client';

import { motion } from 'framer-motion';

interface ToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export function Toggle({ checked, onChange, label }: ToggleProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="sr-only"
        />
        <motion.div
          className={`w-11 h-6 rounded-full transition-colors ${checked ? 'bg-accent' : 'bg-text-secondary/30'}`}
          onClick={() => onChange(!checked)}
        >
          <motion.div
            className="w-5 h-5 bg-white rounded-full shadow-md absolute top-0.5"
            initial={false}
            animate={{ left: checked ? 'auto' : 2, right: checked ? 2 : 'auto' }}
            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
          />
        </motion.div>
      </div>
      {label && <span className="text-text-primary text-sm">{label}</span>}
    </label>
  );
}
