import { groq } from "next-sanity";

// ── Site Settings ──────────────────────────────────────────
export const SITE_SETTINGS_QUERY = groq`
  *[_type == "siteSettings"][0] {
    tagline,
    footerTagline,
    navLinks[] { label, href },
    ctaLabel,
    ctaHref
  }
`;

// ── Hero ──────────────────────────────────────────────────
export const HERO_QUERY = groq`
  *[_type == "hero"][0] {
    eyebrow,
    headlinePart1,
    headlineEmphasis,
    headlinePart2,
    subheading,
    primaryCta,
    secondaryCta,
    statNumber,
    statLabel
  }
`;

// ── Stats (Problem section) ────────────────────────────────
export const PROBLEM_QUERY = groq`
  *[_type == "problemSection"][0] {
    sectionLabel,
    headlinePart1,
    headlineEmphasis,
    body,
    stats[] { number, suffix, description }
  }
`;

// ── Product Layers ─────────────────────────────────────────
export const PRODUCT_QUERY = groq`
  *[_type == "productSection"][0] {
    sectionLabel,
    headlinePart1,
    headlineEmphasis,
    intro,
    layers[] {
      number,
      title,
      description,
      icon
    }
  }
`;

// ── Vision ─────────────────────────────────────────────────
export const VISION_QUERY = groq`
  *[_type == "visionSection"][0] {
    sectionLabel,
    headlinePart1,
    headlineEmphasis,
    body,
    ctaLabel,
    ctaHref
  }
`;

// ── Messaging / Why Planet Zero ────────────────────────────
export const MESSAGING_QUERY = groq`
  *[_type == "messagingSection"][0] {
    sectionLabel,
    headlinePart1,
    headlineEmphasis,
    body,
    pillars[] { label, title, body }
  }
`;

// ── Sectors ────────────────────────────────────────────────
export const SECTORS_QUERY = groq`
  *[_type == "sectorsSection"][0] {
    sectionLabel,
    headline,
    sectors[] { emoji, name, description }
  }
`;

// ── CTA / Contact ──────────────────────────────────────────
export const CTA_QUERY = groq`
  *[_type == "ctaSection"][0] {
    headlinePart1,
    headlineEmphasis,
    body,
    primaryLabel,
    primaryHref,
    secondaryLabel,
    secondaryHref,
    contactLine
  }
`;

// ── Ticker ─────────────────────────────────────────────────
export const TICKER_QUERY = groq`
  *[_type == "ticker"][0] {
    items
  }
`;

// ── All page data in one request ───────────────────────────
export const PAGE_QUERY = groq`
  {
    "siteSettings": ${SITE_SETTINGS_QUERY},
    "hero": ${HERO_QUERY},
    "problem": ${PROBLEM_QUERY},
    "product": ${PRODUCT_QUERY},
    "vision": ${VISION_QUERY},
    "messaging": ${MESSAGING_QUERY},
    "sectors": ${SECTORS_QUERY},
    "cta": ${CTA_QUERY},
    "ticker": ${TICKER_QUERY}
  }
`;
