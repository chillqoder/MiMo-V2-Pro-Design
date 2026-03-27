'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import { Folder } from '@/lib/mockData';

interface FolderTabsProps {
  folders: Folder[];
  activeFolder: string;
  onSelectFolder: (id: string) => void;
}

export const FolderTabs = memo(function FolderTabs({ folders, activeFolder, onSelectFolder }: FolderTabsProps) {
  return (
    <div className="flex gap-2 overflow-x-auto py-2 px-4 scrollbar-hide">
      {folders.map((folder) => (
        <motion.button
          key={folder.id}
          onClick={() => onSelectFolder(folder.id)}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex-shrink-0 px-3 py-1.5 rounded-full text-sm font-medium transition-colors ${
            activeFolder === folder.id
              ? 'bg-accent text-white'
              : 'bg-bg-elevated text-text-secondary hover:text-text-primary'
          }`}
        >
          {folder.name}
          <span className="ml-1.5 opacity-70">({folder.count})</span>
        </motion.button>
      ))}
    </div>
  );
});
