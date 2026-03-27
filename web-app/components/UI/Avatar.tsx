'use client';

import { memo } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { colorHash, getInitials } from '@/lib/utils/colorHash';

interface AvatarProps {
  src?: string;
  name: string;
  size?: number;
  showOnline?: boolean;
  isOnline?: boolean;
  className?: string;
}

export const Avatar = memo(function Avatar({ src, name, size = 40, showOnline = false, isOnline = false, className = '' }: AvatarProps) {
  const initials = getInitials(name);
  const bgColor = colorHash(name);

  return (
    <div className={`relative flex-shrink-0 ${className}`} style={{ width: size, height: size }}>
      {src ? (
        <Image
          src={src}
          alt={name}
          fill
          className="rounded-full object-cover"
          sizes={`${size}px`}
        />
      ) : (
        <div
          className="rounded-full flex items-center justify-center text-white font-medium"
          style={{ width: size, height: size, backgroundColor: bgColor, fontSize: size * 0.4 }}
        >
          {initials}
        </div>
      )}
      {showOnline && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute bottom-0 right-0 w-3 h-3 bg-online rounded-full border-2 border-bg-secondary"
          style={{ borderColor: 'var(--bg-secondary)' }}
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 bg-online rounded-full"
          />
        </motion.div>
      )}
    </div>
  );
});
