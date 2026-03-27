'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';

interface VoiceMessageProps {
  duration: string;
}

export function VoiceMessage({ duration }: VoiceMessageProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="flex items-center gap-3 px-3 py-2">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-8 h-8 flex items-center justify-center bg-accent rounded-full text-white"
      >
        {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
      </motion.button>

      <div className="flex-1 flex items-center gap-1 h-8">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              height: isPlaying ? [8, 20 + Math.random() * 12, 8] : 8,
            }}
            transition={{
              repeat: isPlaying ? Infinity : 0,
              duration: 0.5,
              delay: i * 0.05,
            }}
            className="w-1 bg-accent rounded-full"
            style={{ opacity: 0.4 + (i / 20) * 0.6 }}
          />
        ))}
      </div>

      <span className="text-xs text-text-secondary">{duration}</span>
    </div>
  );
}
