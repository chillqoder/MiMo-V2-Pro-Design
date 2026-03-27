'use client';

import { motion } from 'framer-motion';
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';
import { Country } from '@/data/types';
import { getMonthlyRent, getMonthlyFood, getMonthlyTransport } from '@/lib/utils';

interface RadarComparisonProps {
  countries: Country[];
  animate?: boolean;
}

const COLORS = ['#F5A623', '#2DD4BF', '#FF6B6B', '#A78BFA', '#86EFAC'];

function normalizeValue(value: number, max: number): number {
  return Math.round((value / max) * 100);
}

export function RadarComparison({ countries, animate = true }: RadarComparisonProps) {
  const maxRent = Math.max(...countries.map(getMonthlyRent));
  const maxFood = Math.max(...countries.map(getMonthlyFood));
  const maxTransport = Math.max(...countries.map(getMonthlyTransport));
  const maxUtilities = Math.max(...countries.map((c) => c.utilities));
  const maxEntertainment = Math.max(...countries.map((c) => c.entertainment.gymMembership));
  const maxInternet = Math.max(...countries.map((c) => c.internet));

  const dimensions = [
    { label: 'Housing', getMax: () => maxRent, getValue: getMonthlyRent },
    { label: 'Food', getMax: () => maxFood, getValue: getMonthlyFood },
    { label: 'Transport', getMax: () => maxTransport, getValue: getMonthlyTransport },
    { label: 'Utilities', getMax: () => maxUtilities, getValue: (c: Country) => c.utilities },
    { label: 'Entertainment', getMax: () => maxEntertainment, getValue: (c: Country) => c.entertainment.gymMembership },
    { label: 'Internet', getMax: () => maxInternet, getValue: (c: Country) => c.internet },
  ];

  const data = dimensions.map((dim) => {
    const row: Record<string, string | number> = { dimension: dim.label };
    countries.forEach((c) => {
      row[c.slug] = normalizeValue(dim.getValue(c), dim.getMax());
    });
    return row;
  });

  return (
    <motion.div
      initial={animate ? { opacity: 0, scale: 0.8 } : false}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, type: 'spring', stiffness: 100 }}
      className="card p-6"
      role="img"
      aria-label="Radar comparison chart of selected countries"
    >
      <h3 className="text-lg font-display text-text-primary mb-4">Dimension Comparison</h3>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data}>
            <PolarGrid stroke="#1F2D40" />
            <PolarAngleAxis dataKey="dimension" tick={{ fill: '#F0EDE6', fontSize: 12 }} />
            <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#8896A5', fontSize: 10 }} />
            {countries.map((c, i) => (
              <Radar
                key={c.slug}
                name={c.flag + ' ' + c.name}
                dataKey={c.slug}
                stroke={COLORS[i]}
                fill={COLORS[i]}
                fillOpacity={0.15}
                animationDuration={1200}
              />
            ))}
            <Legend
              wrapperStyle={{ color: '#F0EDE6', fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                background: '#1A2235',
                border: '1px solid #1F2D40',
                borderRadius: '8px',
                color: '#F0EDE6',
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}

export function RadarComparisonSkeleton() {
  return (
    <div className="card p-6">
      <div className="skeleton w-40 h-6 rounded mb-4" />
      <div className="skeleton w-full h-80 rounded-full" />
    </div>
  );
}
