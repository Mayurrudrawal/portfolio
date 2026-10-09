// Edit this file to re-label the entire site. Header, Footer, the homepage
// and SEO defaults all read from here instead of hardcoding copy.
export const SITE = {
  name: 'Mayur',
  role: 'AI/ML & full-stack developer',
  email: 'mayur.rudrawal@itsoftlab.com',
  tagline: 'I build end-to-end AI/ML systems and full-stack applications that solve real-world problems.',
  description:
    'Portfolio of Mayur — AI/ML and full-stack developer, building intelligent systems and robust architectures with precision.',
  status: 'B.Tech CS (Data Science), IPS Academy · SIH 2025 National Finalist',
  social: [
    { label: 'GitHub', href: 'https://github.com/Mayurrudrawal' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mayurrudrawal' },
  ],
  locale: 'en',
} as const;

export const NAV_LINKS = [
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/about' },
] as const;

