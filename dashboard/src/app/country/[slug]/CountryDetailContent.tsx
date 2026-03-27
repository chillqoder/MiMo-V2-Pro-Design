'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Leaf, Coffee, Gem } from 'lucide-react';
import { countries } from '@/data/countries';
import { getMonthlyRent, getMonthlyFood, getMonthlyTransport, getMonthlyTotal, formatCurrency } from '@/lib/utils';
import { StatBadge } from '@/components/ui/StatBadge';

const lifestylePresets = [
  {
    key: 'frugal',
    label: 'Frugal',
    icon: Leaf,
    description: 'Budget-friendly: local markets, public transport, shared housing',
    multiplier: 0.6,
    color: 'teal' as const,
  },
  {
    key: 'comfortable',
    label: 'Comfortable',
    icon: Coffee,
    description: 'Balanced lifestyle: comfortable apartment, mix of dining & cooking',
    multiplier: 1.0,
    color: 'gold' as const,
  },
  {
    key: 'luxury',
    label: 'Luxury',
    icon: Gem,
    description: 'Premium experience: city center, fine dining, private transport',
    multiplier: 1.6,
    color: 'coral' as const,
  },
];

export function CountryDetailContent({ slug }: { slug: string }) {
  const country = countries.find((c) => c.slug === slug);
  const [lifestyle, setLifestyle] = useState('comfortable');

  if (!country) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-16 text-center">
        <h1 className="font-display text-3xl text-text-primary mb-4">Country Not Found</h1>
        <Link href="/dashboard" className="text-accent-gold hover:underline">
          Back to Dashboard
        </Link>
      </div>
    );
  }

  const preset = lifestylePresets.find((p) => p.key === lifestyle)!;
  const baseTotal = getMonthlyTotal(country);
  const budget = Math.round(baseTotal * preset.multiplier);

  const costCategories = [
    { label: 'Rent (avg)', value: getMonthlyRent(country), max: 2500 },
    { label: 'Food', value: getMonthlyFood(country), max: 500 },
    { label: 'Transport', value: getMonthlyTransport(country), max: 120 },
    { label: 'Utilities', value: country.utilities, max: 150 },
    { label: 'Internet', value: country.internet, max: 40 },
    { label: 'Entertainment', value: country.entertainment.gymMembership, max: 100 },
  ];

  const funFacts = [
    { label: 'Cost of Living Index', value: `${country.costOfLivingIndex}/100` },
    { label: 'Purchasing Power', value: `${country.purchasingPowerIndex}/100` },
    { label: 'Cheap Meal', value: `$${country.dining.inexpensiveMeal}` },
    { label: 'Mid-Range Dinner for 2', value: `$${country.dining.midRangeForTwo}` },
    { label: 'Cinema Ticket', value: `$${country.entertainment.cinemaTicket}` },
    { label: 'Taxi per km', value: `$${country.transportation.taxiPerKm}` },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back link */}
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 text-text-muted hover:text-text-primary mb-6 transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Dashboard
      </Link>

      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="card p-8 sm:p-12 mb-8 text-center"
      >
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200 }}
          className="text-7xl sm:text-8xl block mb-4"
        >
          {country.flag}
        </motion.span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold text-text-primary mb-2">
          {country.name}
        </h1>
        <p className="text-text-muted text-lg mb-4">
          {country.currency.name} ({country.currency.symbol})
        </p>
        <div className="flex justify-center gap-4">
          <StatBadge label="Cost Index" value={country.costOfLivingIndex} color="gold" />
          <StatBadge label="Purchasing Power" value={country.purchasingPowerIndex} color="teal" />
        </div>
      </motion.div>

      {/* Progress bars */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="card p-6 mb-8"
      >
        <h2 className="text-xl font-display text-text-primary mb-6">Cost Categories</h2>
        <div className="space-y-4">
          {costCategories.map((cat, idx) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + idx * 0.1 }}
            >
              <div className="flex justify-between mb-1">
                <span className="text-sm text-text-muted">{cat.label}</span>
                <span className="text-sm text-text-primary">${cat.value}</span>
              </div>
              <div className="w-full h-2 bg-bg-surface rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(cat.value / cat.max) * 100}%` }}
                  transition={{ duration: 0.8, delay: 0.4 + idx * 0.1 }}
                  className="h-full bg-gradient-to-r from-accent-gold to-accent-teal rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Expat budget presets */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="card p-6 mb-8"
      >
        <h2 className="text-xl font-display text-text-primary mb-2">Expat Monthly Budget</h2>
        <p className="text-text-muted text-sm mb-6">Toggle between lifestyle presets</p>

        <div className="flex gap-3 mb-6 flex-wrap">
          {lifestylePresets.map((p) => {
            const Icon = p.icon;
            const isActive = lifestyle === p.key;
            const ringColor = p.color === 'gold' ? 'ring-accent-gold' : p.color === 'teal' ? 'ring-accent-teal' : 'ring-chart-coral';
            const textColor = p.color === 'gold' ? 'text-accent-gold' : p.color === 'teal' ? 'text-accent-teal' : 'text-chart-coral';
            return (
              <motion.button
                key={p.key}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setLifestyle(p.key)}
                className={`flex-1 min-w-[140px] pill px-4 py-3 text-left transition-all ${
                  isActive
                    ? `ring-2 ${ringColor} bg-bg-surface`
                    : 'bg-bg-surface/50 hover:bg-bg-surface'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Icon size={16} className={textColor} />
                  <span className="text-text-primary font-semibold text-sm">{p.label}</span>
                </div>
                <p className="text-text-muted text-xs">{p.description}</p>
              </motion.button>
            );
          })}
        </div>

        <motion.div
          key={lifestyle}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-6 bg-bg-surface rounded-xl"
        >
          <p className="text-text-muted text-sm mb-1">Estimated Monthly Budget</p>
          <p className="text-5xl font-display font-bold text-accent-gold">
            {formatCurrency(budget)}
          </p>
          <p className="text-text-muted text-xs mt-1">USD/month</p>
        </motion.div>
      </motion.div>

      {/* Fun facts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="card p-6"
      >
        <h2 className="text-xl font-display text-text-primary mb-6">Fun Facts</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {funFacts.map((fact, idx) => (
            <motion.div
              key={fact.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + idx * 0.1 }}
              whileHover={{ y: -2 }}
              className="bg-bg-surface rounded-xl p-4 text-center"
            >
              <p className="text-text-muted text-xs uppercase tracking-wider mb-1">{fact.label}</p>
              <p className="text-lg font-display font-semibold text-text-primary">{fact.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
