'use client';

import { useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X } from 'lucide-react';

interface SearchBarProps {
  onSearch: (query: string) => void;
  isExpanded: boolean;
  onToggle: () => void;
}

export const SearchBar = memo(function SearchBar({ onSearch, isExpanded, onToggle }: SearchBarProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <motion.div
      className="relative"
      animate={{ width: isExpanded ? 280 : 44 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <AnimatePresence mode="wait">
        {isExpanded ? (
          <motion.form
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="flex items-center bg-bg-elevated rounded-full overflow-hidden"
          >
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              autoFocus
              className="w-full bg-transparent text-text-primary px-4 py-2 text-sm outline-none placeholder:text-text-secondary"
            />
            <button
              type="button"
              onClick={() => {
                setQuery('');
                onSearch('');
              }}
              className="p-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              <X size={18} />
            </button>
          </motion.form>
        ) : (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onToggle}
            className="w-11 h-11 flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-bg-elevated rounded-full transition-all"
          >
            <Search size={22} />
          </motion.button>
        )}
      </AnimatePresence>
    </motion.div>
  );
});
