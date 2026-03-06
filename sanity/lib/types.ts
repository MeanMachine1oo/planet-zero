export interface SiteSettings {
  siteName: string;
  tagline: string;
  footerTagline: string;
  navLinks: { label: string; href: string }[];
  ctaLabel: string;
  ctaHref: string;
}

export interface Hero {
  eyebrow: string;
  headline: string;
  headlineItalic: string;
  subheading: string;
  primaryCta: string;
  secondaryCta: string;
  statNumber: string;
  statLabel: string;
}

export interface ProblemSection {
  sectionLabel: string;
  headline: string;
  headlineHighlight: string;
  body: string;
  stats: { number: string; suffix: string; description: string }[];
}

export interface ProductSection {
  sectionLabel: string;
  headline: string;
  headlineItalic: string;
  intro: string;
  layers: { number: string; title: string; description: string }[];
}

export interface VisionSection {
  sectionLabel: string;
  headline: string;
  headlineItalic: string;
  subheading: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface MessagingSection {
  sectionLabel: string;
  headline: string;
  headlineItalic: string;
  body: string;
  pillars: { label: string; text: string }[];
}

export interface SectorsSection {
  sectionLabel: string;
  headline: string;
  sectors: { icon: string; name: string; description: string }[];
}

export interface CtaSection {
  headline: string;
  headlineItalic: string;
  description: string;
  primaryCtaLabel: string;
  primaryCtaHref: string;
  secondaryCtaLabel: string;
  secondaryCtaHref: string;
  contactNote: string;
}

export interface HomepageData {
  settings: SiteSettings;
  hero: Hero;
  problem: ProblemSection;
  product: ProductSection;
  vision: VisionSection;
  messaging: MessagingSection;
  sectors: SectorsSection;
  cta: CtaSection;
}
