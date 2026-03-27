export interface Country {
  slug: string;
  name: string;
  flag: string;
  currency: {
    name: string;
    symbol: string;
  };
  rent: {
    cityCenter: number;
    outsideCenter: number;
  };
  groceries: number;
  dining: {
    inexpensiveMeal: number;
    midRangeForTwo: number;
    fastFood: number;
  };
  transportation: {
    monthlyPass: number;
    taxiPerKm: number;
    petrolPerLitre: number;
  };
  utilities: number;
  internet: number;
  entertainment: {
    cinemaTicket: number;
    gymMembership: number;
  };
  costOfLivingIndex: number;
  purchasingPowerIndex: number;
}

export type MetricKey = 'rent' | 'food' | 'transport' | 'total';

export interface ComparisonDimension {
  label: string;
  getValue: (country: Country) => number;
}
