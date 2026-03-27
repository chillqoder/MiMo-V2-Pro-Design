import { Country } from '@/data/types';

export function formatCurrency(amount: number): string {
  return `$${amount.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

export function getMonthlyRent(country: Country): number {
  return Math.round((country.rent.cityCenter + country.rent.outsideCenter) / 2);
}

export function getMonthlyFood(country: Country): number {
  return Math.round(country.groceries + country.dining.inexpensiveMeal * 30);
}

export function getMonthlyTransport(country: Country): number {
  return country.transportation.monthlyPass;
}

export function getMonthlyTotal(country: Country): number {
  return getMonthlyRent(country) + getMonthlyFood(country) + getMonthlyTransport(country) + country.utilities + country.internet;
}

export function slugify(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}

export function cn(...classes: (string | undefined | false)[]): string {
  return classes.filter(Boolean).join(' ');
}
