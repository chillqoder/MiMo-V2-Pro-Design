'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Trophy } from 'lucide-react';
import { countries } from '@/data/countries';
import { getMonthlyRent, getMonthlyFood, getMonthlyTransport, getMonthlyTotal } from '@/lib/utils';
import { RadarComparison } from '@/components/charts/RadarComparison';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const categories = [
  { key: 'rent', label: 'Rent', fn: getMonthlyRent },
  { key: 'food', label: 'Food', fn: getMonthlyFood },
  { key: 'transport', label: 'Transport', fn: getMonthlyTransport },
  { key: 'utilities', label: 'Utilities', fn: (c: typeof countries[0]) => c.utilities },
  { key: 'internet', label: 'Internet', fn: (c: typeof countries[0]) => c.internet },
  { key: 'total', label: 'Total', fn: getMonthlyTotal },
];

const COLORS = ['#F5A623', '#2DD4BF', '#FF6B6B'];

export default function ComparePage() {
  const [selected, setSelected] = useState<string[]>(['thailand', 'vietnam']);

  const selectedCountries = selected.map((slug) => countries.find((c) => c.slug === slug)!);

  const toggleCountry = (slug: string) => {
    if (selected.includes(slug)) {
      setSelected(selected.filter((s) => s !== slug));
    } else if (selected.length < 3) {
      setSelected([...selected, slug]);
    }
  };

  const barData = categories.map((cat) => {
    const row: Record<string, string | number> = { category: cat.label };
    selectedCountries.forEach((c) => {
      row[c.name] = cat.fn(c);
    });
    return row;
  });

  const winners = categories.map((cat) => {
    const sorted = [...selectedCountries].sort((a, b) => cat.fn(a) - cat.fn(b));
    return { category: cat.label, winner: sorted[0] };
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-2">
          Compare Countries
        </h1>
        <p className="text-text-muted">
          Select up to 3 countries to compare side by side
        </p>
      </motion.div>

      {/* Country selector */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-10">
        {countries.map((c, i) => {
          const isSelected = selected.includes(c.slug);
          return (
            <motion.button
              key={c.slug}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => toggleCountry(c.slug)}
              className={`card relative p-4 text-center transition-all ${
                isSelected
                  ? 'ring-2 ring-accent-gold shadow-[0_0_20px_rgba(245,166,35,0.2)]'
                  : 'hover:border-text-muted/30'
              }`}
              aria-pressed={isSelected}
              aria-label={`Select ${c.name}`}
            >
              {isSelected && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute top-2 right-2 w-5 h-5 rounded-full bg-accent-gold flex items-center justify-center"
                >
                  <Check size={12} className="text-bg-base" />
                </motion.div>
              )}
              <span className="text-3xl block mb-1">{c.flag}</span>
              <span className="text-sm text-text-primary">{c.name}</span>
            </motion.button>
          );
        })}
      </div>

      {selectedCountries.length > 0 && (
        <>
          {/* Radar chart */}
          <div className="mb-8">
            <RadarComparison countries={selectedCountries} />
          </div>

          {/* Grouped bar chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-6 mb-8"
            role="img"
            aria-label="Grouped bar chart comparing selected countries"
          >
            <h3 className="text-lg font-display text-text-primary mb-4">Side by Side</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1F2D40" />
                  <XAxis dataKey="category" tick={{ fill: '#F0EDE6', fontSize: 12 }} />
                  <YAxis tick={{ fill: '#8896A5', fontSize: 12 }} tickFormatter={(v) => `$${v}`} />
                  <Tooltip
                    contentStyle={{
                      background: '#1A2235',
                      border: '1px solid #1F2D40',
                      borderRadius: '8px',
                      color: '#F0EDE6',
                    }}
                  />
                  <Legend wrapperStyle={{ color: '#F0EDE6', fontSize: 12 }} />
                  {selectedCountries.map((c, i) => (
                    <Bar
                      key={c.slug}
                      dataKey={c.name}
                      fill={COLORS[i]}
                      radius={[4, 4, 0, 0]}
                      animationDuration={1200}
                    />
                  ))}
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Winner badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card p-6"
          >
            <h3 className="text-lg font-display text-text-primary mb-4 flex items-center gap-2">
              <Trophy className="text-accent-gold" size={20} />
              Cheapest per Category
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {winners.map((w, i) => (
                <motion.div
                  key={w.category}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-bg-surface rounded-xl p-3 text-center border border-border"
                >
                  <p className="text-text-muted text-xs uppercase tracking-wider mb-1">{w.category}</p>
                  <span className="text-2xl">{w.winner.flag}</span>
                  <p className="text-accent-gold text-sm font-semibold mt-1">{w.winner.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </>
      )}

      {selectedCountries.length === 0 && (
        <div className="card p-16 text-center">
          <p className="text-text-muted text-lg">Select at least one country above to start comparing</p>
        </div>
      )}
    </div>
  );
}
