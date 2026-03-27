'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, TrendingDown, Globe, BarChart3 } from 'lucide-react';
import { countries } from '@/data/countries';

export default function HomePage() {
  const titleWords = 'Cost of Living — Southeast Asia'.split(' ');

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-4 py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Country flags ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center gap-3 mb-8 text-3xl"
        >
          {countries.slice(0, 5).map((c, i) => (
            <motion.span
              key={c.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {c.flag}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-text-muted text-lg flex items-center"
          >
            +5 more
          </motion.span>
        </motion.div>

        {/* Staggered title */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 100 }}
              className="inline-block mr-3"
            >
              {i === titleWords.length - 1 ? (
                <span className="bg-gradient-to-r from-accent-gold to-accent-teal bg-clip-text text-transparent">
                  {word}
                </span>
              ) : (
                word
              )}
            </motion.span>
          ))}
        </h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="text-text-muted text-lg sm:text-xl max-w-2xl mx-auto mb-10"
        >
          Explore, compare, and discover affordable living across 10 vibrant
          Southeast Asian nations. Real data, beautiful visuals, zero noise.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <Link href="/dashboard">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(245,166,35,0.3)' }}
              whileTap={{ scale: 0.98 }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent-gold text-bg-base font-semibold rounded-xl text-lg transition-all"
            >
              Explore Dashboard
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20 max-w-3xl mx-auto"
        >
          {[
            { icon: TrendingDown, label: '10 Countries', desc: 'Full data coverage' },
            { icon: Globe, label: 'Live Comparison', desc: 'Side-by-side analysis' },
            { icon: BarChart3, label: 'Interactive Charts', desc: 'Beautiful visualizations' },
          ].map((feature) => (
            <motion.div
              key={feature.label}
              whileHover={{ y: -4 }}
              className="card p-5 text-left"
            >
              <feature.icon className="text-accent-gold mb-3" size={24} />
              <p className="text-text-primary font-semibold">{feature.label}</p>
              <p className="text-text-muted text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
