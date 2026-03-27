'use client';

import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { Country } from '@/data/types';

interface RankingChartProps {
  countries: Country[];
}

export function RankingChart({ countries }: RankingChartProps) {
  const data = countries
    .map((c) => ({
      name: c.flag + ' ' + c.name,
      index: c.costOfLivingIndex,
    }))
    .sort((a, b) => b.index - a.index);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="card p-6"
      role="img"
      aria-label="Cost of Living Index ranking for all countries"
    >
      <h3 className="text-lg font-display text-text-primary mb-4">Cost of Living Index</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} layout="vertical" margin={{ left: 10 }}>
            <XAxis type="number" domain={[0, 100]} tick={{ fill: '#8896A5', fontSize: 12 }} />
            <YAxis type="category" dataKey="name" tick={{ fill: '#F0EDE6', fontSize: 12 }} width={120} />
            <Tooltip
              contentStyle={{
                background: '#1A2235',
                border: '1px solid #1F2D40',
                borderRadius: '8px',
                color: '#F0EDE6',
              }}
              formatter={(value) => [value, 'Index']}
            />
            <Bar dataKey="index" fill="#F5A623" radius={[0, 4, 4, 0]} animationDuration={1500} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export function RankingChartSkeleton() {
  return (
    <div className="card p-6">
      <div className="skeleton w-40 h-6 rounded mb-4" />
      <div className="skeleton w-full h-80 rounded" />
    </div>
  );
}
