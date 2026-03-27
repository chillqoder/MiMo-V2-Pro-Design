'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface MediaGridProps {
  images: string[];
}

export function MediaGrid({ images }: MediaGridProps) {
  const displayImages = images.slice(0, 9);

  return (
    <div className="grid grid-cols-3 gap-1">
      {displayImages.map((img, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: index * 0.05 }}
          className="aspect-square relative rounded overflow-hidden cursor-pointer"
        >
          <Image
            src={img}
            alt={`Media ${index + 1}`}
            fill
            className="object-cover hover:scale-110 transition-transform"
            sizes="100px"
          />
        </motion.div>
      ))}
    </div>
  );
}
