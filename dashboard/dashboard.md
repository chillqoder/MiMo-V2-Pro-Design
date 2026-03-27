Build a Next.js UI dashboard called "Cost of Living — Southeast Asia" 
with zero backend logic. All data is hardcoded mock data as TypeScript 
constants. No API calls, no state management libraries, no databases.

---

### TECH STACK
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (for all animations)
- Recharts or Nivo for data visualizations
- next/font for typography

---

### COUNTRIES COVERED
Thailand, Vietnam, Indonesia, Malaysia, Philippines, Singapore, 
Cambodia, Myanmar, Laos, Brunei

---

### MOCK DATA STRUCTURE (hardcoded)
Each country object includes:
- Monthly rent (1BR city center vs outside center) in USD
- Groceries basket cost / month
- Dining out (inexpensive meal, mid-range for two, fast food)
- Transportation (monthly pass, taxi per km, petrol per litre)
- Utilities (monthly average)
- Internet (monthly)
- Entertainment (cinema ticket, gym membership)
- Overall Cost of Living Index (0–100)
- Purchasing Power Index
- Currency name & symbol
- Country emoji flag

---

### PAGES & ROUTES

1. \`/\` — Hero landing with animated map or region visual, 
   tagline, and CTA button "Explore Dashboard"

2. \`/dashboard\` — Main dashboard page with:
   - Sticky top navbar with country filter pills (animated active state)
   - Hero metric cards row (average rent, food, transport, total monthly 
     for selected country) with count-up number animations on enter
   - Cost breakdown donut/pie chart per selected country
   - Side-by-side bar chart comparing ALL countries on a selected metric 
     (switcher: rent / food / transport / total)
   - "Cost of Living Index" horizontal ranking bar chart for all 10 countries
   - A detailed breakdown table with animated row reveals on scroll

3. \`/compare\` — Country comparison page:
   - Select up to 3 countries via animated card selector
   - Radar/spider chart comparing 6 dimensions 
     (housing, food, transport, utilities, entertainment, internet)
   - Grouped bar chart side-by-side
   - "Winner badge" that highlights the cheapest country per category

4. \`/country/[slug]\` — Individual country detail page:
   - Full-bleed hero with country name, flag emoji, and Cost Index score
   - Animated progress bars for each cost category
   - "Expat Monthly Budget" interactive breakdown (toggle between 
     Frugal / Comfortable / Luxury lifestyle presets — just UI state, 
     no real calc needed)
   - Fun facts section with animated stat callouts

---

### ANIMATIONS — HIGH PRIORITY

Use Framer Motion throughout:

- Page transitions: shared layout animations between routes using 
  AnimatePresence with a smooth slide+fade
- Hero section: staggered word-by-word title reveal on load
- Metric cards: spring-based entrance with staggered delay (each card 
  slides up 30px and fades in, 100ms apart)
- Number counters: animated count-up from 0 to value on mount 
  (use useMotionValue + useSpring or a custom hook)
- Charts: bars and segments animate in on first render 
  (use Recharts built-in animation props + Framer for wrappers)
- Country filter pills: layout animation so the active indicator 
  slides smoothly between selections
- Table rows: staggered fade+slide-up reveal as they enter viewport 
  (use whileInView with viewport: { once: true })
- Hover states on cards: subtle lift (y: -4, shadow increase) 
  with spring physics
- Radar chart: animate from center outward on mount
- Country selector cards on /compare: scale + border glow on selection

---

### AESTHETIC DIRECTION

**Theme**: Dark luxury editorial — deep navy/slate background, 
warm amber/gold accents, clean ivory text. Feels like a premium 
travel magazine data feature.

**Typography**:
- Display: "Playfair Display" or "DM Serif Display" — for titles and 
  large numbers
- Body/UI: "DM Sans" or "Sora" — clean, geometric, modern

**Color Palette** (as CSS variables):
- --bg-base: #0A0F1E
- --bg-surface: #111827
- --bg-card: #1A2235
- --accent-gold: #F5A623
- --accent-teal: #2DD4BF
- --text-primary: #F0EDE6
- --text-muted: #8896A5
- --border: #1F2D40

**Visual details**:
- Subtle dot-grid texture on main background (CSS or SVG)
- Cards with 1px border using --border color + very subtle inner glow
- Chart colors: a warm 5-color palette (gold, teal, coral, violet, sage)
- Rounded corners: 12px on cards, 8px on pills
- No gradients overused — just one accent gradient on the hero title

---

### FILE STRUCTURE

src/
  app/
    page.tsx                    ← Hero landing
    dashboard/page.tsx
    compare/page.tsx
    country/[slug]/page.tsx
    layout.tsx                  ← Root layout with nav + page transitions
  components/
    ui/
      MetricCard.tsx
      CountryPill.tsx
      StatBadge.tsx
    charts/
      CostDonut.tsx
      CountryBarChart.tsx
      RankingChart.tsx
      RadarComparison.tsx
    layout/
      Navbar.tsx
      PageTransition.tsx
  data/
    countries.ts                ← All hardcoded mock data
    types.ts                    ← TypeScript interfaces
  hooks/
    useCountUp.ts               ← Animated number hook
  lib/
    utils.ts

---

### CONSTRAINTS
- NO backend, NO API routes, NO database, NO auth
- All data lives in src/data/countries.ts as exported constants
- Fully responsive: desktop-first but mobile-friendly
- No external icon libraries except lucide-react
- Accessible: proper aria-labels on charts and interactive elements
- Each chart must have a loading skeleton (simple pulse animation) 
  even though data is instant — just for polish
