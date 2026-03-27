'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Smile, Search, X } from 'lucide-react';
import { emojis } from '@/lib/mockData';
import { Tooltip } from '@/components/UI/Tooltip';

interface EmojiPickerProps {
  onSelect: (emoji: string) => void;
  onClose: () => void;
}

const categories = ['Recent', 'Smileys', 'People', 'Animals', 'Food', 'Activities', 'Travel', 'Objects', 'Symbols'];

export function EmojiPicker({ onSelect, onClose }: EmojiPickerProps) {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('Smileys');

  const filteredEmojis = search
    ? emojis
    : emojis.slice(0, 50);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 10, scale: 0.95 }}
      className="absolute bottom-full mb-2 left-0 w-80 bg-bg-elevated rounded-lg shadow-xl border border-border overflow-hidden"
    >
      <div className="flex items-center justify-between px-3 py-2 border-b border-border">
        <div className="flex items-center gap-2 flex-1 bg-bg-secondary rounded-full px-3 py-1.5">
          <Search size={14} className="text-text-secondary" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search emojis"
            className="bg-transparent text-sm text-text-primary outline-none flex-1"
          />
        </div>
        <button onClick={onClose} className="ml-2 text-text-secondary hover:text-text-primary">
          <X size={18} />
        </button>
      </div>

      <div className="flex gap-1 px-2 py-2 overflow-x-auto scrollbar-hide">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-2 py-1 text-xs rounded-full transition-colors ${
              activeCategory === cat
                ? 'bg-accent text-white'
                : 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="h-48 overflow-y-auto p-2">
        <div className="grid grid-cols-8 gap-1">
          {filteredEmojis.map((emoji, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.01 }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => {
                onSelect(emoji);
                onClose();
              }}
              className="w-8 h-8 flex items-center justify-center text-xl hover:bg-bg-secondary rounded transition-colors"
            >
              {emoji}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
