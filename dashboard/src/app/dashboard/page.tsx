'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, Utensils, Bus, DollarSign } from 'lucide-react';
import { countries } from '@/data/countries';
import { getMonthlyRent, getMonthlyFood, getMonthlyTransport, getMonthlyTotal } from '@/lib/utils';
import { MetricCard } from '@/components/ui/MetricCard';
import { CountryPill } from '@/components/ui/CountryPill';
import { CostDonut } from '@/components/charts/CostDonut';
import { CountryBarChart } from '@/components/charts/CountryBarChart';
import { RankingChart } from '@/components/charts/RankingChart';
import type { MetricKey } from '@/data/types';

const metricOptions: { key: MetricKey; label: string }[] = [
  { key: 'rent', label: 'Rent' },
  { key: 'food', label: 'Food' },
  { key: 'transport', label: 'Transport' },
  { key: 'total', label: 'Total' },
];

export default function DashboardPage() {
  const [selectedSlug, setSelectedSlug] = useState('thailand');
  const [compareMetric, setCompareMetric] = useState<MetricKey>('total');

  const selectedCountry = countries.find((c) => c.slug === selectedSlug)!;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-2">
          Dashboard
        </h1>
        <p className="text-text-muted">
          Select a country to explore its cost breakdown
        </p>
      </motion.div>

      {/* Country filter pills */}
      <div className="flex flex-wrap gap-2 mb-8 overflow-x-auto pb-2" role="tablist" aria-label="Country filter">
        {countries.map((c) => (
          <CountryPill
            key={c.slug}
            country={c}
            isSelected={selectedSlug === c.slug}
            onClick={() => setSelectedSlug(c.slug)}
          />
        ))}
      </div>

      {/* Metric cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <MetricCard
          label="Average Rent"
          value={getMonthlyRent(selectedCountry)}
          icon={<Home size={20} />}
          delay={0}
        />
        <MetricCard
          label="Food Costs"
          value={getMonthlyFood(selectedCountry)}
          icon={<Utensils size={20} />}
          delay={1}
        />
        <MetricCard
          label="Transport"
          value={getMonthlyTransport(selectedCountry)}
          icon={<Bus size={20} />}
          delay={2}
        />
        <MetricCard
          label="Total Monthly"
          value={getMonthlyTotal(selectedCountry)}
          icon={<DollarSign size={20} />}
          delay={3}
        />
      </div>

      {/* Charts section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <CostDonut country={selectedCountry} />
        <RankingChart countries={countries} />
      </div>

      {/* Metric switcher for bar chart */}
      <div className="flex gap-2 mb-4">
        {metricOptions.map((opt) => (
          <button
            key={opt.key}
            onClick={() => setCompareMetric(opt.key)}
            className={`pill px-4 py-2 text-sm font-body transition-colors ${
              compareMetric === opt.key
                ? 'bg-accent-teal/20 text-accent-teal border border-accent-teal/50'
                : 'text-text-muted hover:text-text-primary border border-transparent'
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      {/* Comparison bar chart */}
      <div className="mb-8">
        <CountryBarChart countries={countries} metric={compareMetric} />
      </div>

      {/* Detailed breakdown table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="card overflow-hidden"
      >
        <div className="p-6 border-b border-border">
          <h3 className="text-lg font-display text-text-primary">Detailed Breakdown</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm" role="table">
            <thead>
              <tr className="text-left text-text-muted border-b border-border">
                <th className="px-6 py-3 font-medium">Country</th>
                <th className="px-6 py-3 font-medium">Rent</th>
                <th className="px-6 py-3 font-medium">Food</th>
                <th className="px-6 py-3 font-medium">Transport</th>
                <th className="px-6 py-3 font-medium">Utilities</th>
                <th className="px-6 py-3 font-medium">Internet</th>
                <th className="px-6 py-3 font-medium">Cost Index</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((c, i) => (
                <motion.tr
                  key={c.slug}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="border-b border-border/50 hover:bg-bg-surface/50 transition-colors cursor-pointer"
                >
                  <td className="px-6 py-4">
                    <span className="flex items-center gap-2">
                      <span>{c.flag}</span>
                      <span className="text-text-primary">{c.name}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 text-text-muted">${getMonthlyRent(c)}</td>
                  <td className="px-6 py-4 text-text-muted">${getMonthlyFood(c)}</td>
                  <td className="px-6 py-4 text-text-muted">${getMonthlyTransport(c)}</td>
                  <td className="px-6 py-4 text-text-muted">${c.utilities}</td>
                  <td className="px-6 py-4 text-text-muted">${c.internet}</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full bg-accent-gold/10 text-accent-gold text-xs font-medium">
                      {c.costOfLivingIndex}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
}
