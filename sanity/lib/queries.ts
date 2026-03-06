import { groq } from "next-sanity";

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    footerTagline,
    navLinks[] { label, href },
    ctaLabel,
    ctaHref
  }
`;

export const heroQuery = groq`
  *[_type == "hero"][0] {
    eyebrow,
    headline,
    headlineItalic,
    subheading,
    primaryCta,
    secondaryCta,
    statNumber,
    statLabel
  }
`;

export const problemQuery = groq`
  *[_type == "problemSection"][0] {
    sectionLabel,
    headline,
    headlineHighlight,
    body,
    stats[] { number, suffix, description }
  }
`;

export const productQuery = groq`
  *[_type == "productSection"][0] {
    sectionLabel,
    headline,
    headlineItalic,
    intro,
    layers[] { number, title, description }
  }
`;

export const visionQuery = groq`
  *[_type == "visionSection"][0] {
    sectionLabel,
    headline,
    headlineItalic,
    subheading,
    ctaLabel,
    ctaHref
  }
`;

export const messagingQuery = groq`
  *[_type == "messagingSection"][0] {
    sectionLabel,
    headline,
    headlineItalic,
    body,
    pillars[] { label, text }
  }
`;

export const sectorsQuery = groq`
  *[_type == "sectorsSection"][0] {
    sectionLabel,
    headline,
    sectors[] { icon, name, description }
  }
`;

export const ctaQuery = groq`
  *[_type == "ctaSection"][0] {
    headline,
    headlineItalic,
    description,
    primaryCtaLabel,
    primaryCtaHref,
    secondaryCtaLabel,
    secondaryCtaHref,
    contactNote
  }
`;

// Fetch everything in one round-trip for the homepage
export const homepageQuery = groq`
  {
    "settings": *[_type == "siteSettings"][0] {
      siteName, tagline, footerTagline,
      navLinks[] { label, href }, ctaLabel, ctaHref
    },
    "hero": *[_type == "hero"][0] {
      eyebrow, headline, headlineItalic, subheading,
      primaryCta, secondaryCta, statNumber, statLabel
    },
    "problem": *[_type == "problemSection"][0] {
      sectionLabel, headline, headlineHighlight, body,
      stats[] { number, suffix, description }
    },
    "product": *[_type == "productSection"][0] {
      sectionLabel, headline, headlineItalic, intro,
      layers[] { number, title, description }
    },
    "vision": *[_type == "visionSection"][0] {
      sectionLabel, headline, headlineItalic, subheading, ctaLabel, ctaHref
    },
    "messaging": *[_type == "messagingSection"][0] {
      sectionLabel, headline, headlineItalic, body,
      pillars[] { label, text }
    },
    "sectors": *[_type == "sectorsSection"][0] {
      sectionLabel, headline,
      sectors[] { icon, name, description }
    },
    "cta": *[_type == "ctaSection"][0] {
      headline, headlineItalic, description,
      primaryCtaLabel, primaryCtaHref,
      secondaryCtaLabel, secondaryCtaHref, contactNote
    }
  }
`;
