'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Country } from '@/data/types';
import { getMonthlyRent, getMonthlyFood, getMonthlyTransport, getMonthlyTotal } from '@/lib/utils';

interface CountryBarChartProps {
  countries: Country[];
  metric: 'rent' | 'food' | 'transport' | 'total';
  animate?: boolean;
}

const metricConfig = {
  rent: { label: 'Average Rent', fn: getMonthlyRent, color: '#F5A623' },
  food: { label: 'Food Costs', fn: getMonthlyFood, color: '#2DD4BF' },
  transport: { label: 'Transport Costs', fn: getMonthlyTransport, color: '#FF6B6B' },
  total: { label: 'Total Monthly', fn: getMonthlyTotal, color: '#A78BFA' },
};

export function CountryBarChart({ countries, metric, animate = true }: CountryBarChartProps) {
  const config = metricConfig[metric];
  const data = countries
    .map((c) => ({
      name: c.flag + ' ' + c.name,
      value: config.fn(c),
      fullName: c.name,
    }))
    .sort((a, b) => b.value - a.value);

  return (
    <motion.div
      initial={animate ? { opacity: 0, y: 20 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card p-6"
      role="img"
      aria-label={`${config.label} comparison bar chart`}
    >
      <h3 className="text-lg font-display text-text-primary mb-4">{config.label} Comparison</h3>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1F2D40" horizontal={false} />
            <XAxis type="number" tick={{ fill: '#8896A5', fontSize: 12 }} tickFormatter={(v) => `$${v}`} />
            <YAxis type="category" dataKey="name" tick={{ fill: '#F0EDE6', fontSize: 12 }} width={120} />
            <Tooltip
              contentStyle={{
                background: '#1A2235',
                border: '1px solid #1F2D40',
                borderRadius: '8px',
                color: '#F0EDE6',
              }}
              formatter={(value) => [`$${value}/mo`, config.label]}
            />
            <Bar dataKey="value" fill={config.color} radius={[0, 4, 4, 0]} animationDuration={1200} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export function CountryBarChartSkeleton() {
  return (
    <div className="card p-6">
      <div className="skeleton w-40 h-6 rounded mb-4" />
      <div className="skeleton w-full h-72 rounded" />
    </div>
  );
}
