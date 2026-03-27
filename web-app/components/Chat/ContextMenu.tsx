'use client';

import { motion } from 'framer-motion';
import { MessageSquare, Sticker, Forward, MoreHorizontal, Reply } from 'lucide-react';

interface ContextMenuProps {
  x: number;
  y: number;
  onClose: () => void;
}

export function ContextMenu({ x, y, onClose }: ContextMenuProps) {
  const menuItems = [
    { icon: Reply, label: 'Reply' },
    { icon: MessageSquare, label: 'React' },
    { icon: Forward, label: 'Forward' },
    { icon: Sticker, label: 'Sticker' },
    { icon: MoreHorizontal, label: 'More' },
  ];

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="absolute z-50 bg-bg-elevated rounded-lg shadow-xl py-1 min-w-[180px] border border-border"
        style={{ left: x, top: y }}
      >
        {menuItems.map((item, index) => (
          <motion.button
            key={item.label}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={onClose}
            className="w-full flex items-center gap-3 px-4 py-2 text-text-primary hover:bg-bg-secondary text-sm transition-colors"
          >
            <item.icon size={18} />
            {item.label}
          </motion.button>
        ))}
      </motion.div>
    </>
  );
}
