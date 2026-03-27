'use client';

import { motion } from 'framer-motion';

interface ReactionsProps {
  reactions?: { emoji: string; count: number }[];
}

export function Reactions({ reactions }: ReactionsProps) {
  if (!reactions?.length) return null;

  return (
    <div className="flex gap-1 mt-1">
      {reactions.map((reaction, index) => (
        <motion.button
          key={`${reaction.emoji}-${index}`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="flex items-center gap-1 px-2 py-0.5 bg-bg-elevated rounded-full text-xs"
        >
          <span>{reaction.emoji}</span>
          <span className="text-text-secondary">{reaction.count}</span>
        </motion.button>
      ))}
    </div>
  );
}
