'use client';

import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { Country } from '@/data/types';
import { getMonthlyRent, getMonthlyFood, getMonthlyTransport } from '@/lib/utils';

interface CostDonutProps {
  country: Country;
}

const COLORS = ['#F5A623', '#2DD4BF', '#FF6B6B', '#A78BFA', '#86EFAC'];

export function CostDonut({ country }: CostDonutProps) {
  const data = [
    { name: 'Rent', value: getMonthlyRent(country) },
    { name: 'Food', value: getMonthlyFood(country) },
    { name: 'Transport', value: getMonthlyTransport(country) },
    { name: 'Utilities', value: country.utilities },
    { name: 'Internet', value: country.internet },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="card p-6"
      role="img"
      aria-label={`Cost breakdown pie chart for ${country.name}`}
    >
      <h3 className="text-lg font-display text-text-primary mb-4">Cost Breakdown</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={2}
              dataKey="value"
              animationBegin={0}
              animationDuration={1200}
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{
                background: '#1A2235',
                border: '1px solid #1F2D40',
                borderRadius: '8px',
                color: '#F0EDE6',
              }}
              formatter={(value) => [`$${value}`, '']}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-wrap gap-3 mt-4">
        {data.map((item, i) => (
          <div key={item.name} className="flex items-center gap-2 text-sm text-text-muted">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS[i] }} />
            <span>{item.name}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export function CostDonutSkeleton() {
  return (
    <div className="card p-6">
      <div className="skeleton w-32 h-6 rounded mb-4" />
      <div className="skeleton w-full h-64 rounded" />
    </div>
  );
}
