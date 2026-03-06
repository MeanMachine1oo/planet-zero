import { groq } from "next-sanity";

const SITE_SETTINGS_QUERY = groq`*[_type == "siteSettings"][0] {
  tagline, footerTagline,
  navLinks[] { label, href },
  ctaLabel, ctaHref
}`;

const HERO_QUERY = groq`*[_type == "hero"][0] {
  eyebrow, headlinePart1, headlineEmphasis, headlinePart2,
  subheading, primaryCta, secondaryCta, statNumber, statLabel
}`;

const PROBLEM_QUERY = groq`*[_type == "problemSection"][0] {
  sectionLabel, headlinePart1, headlineEmphasis, body,
  stats[] { number, suffix, description }
}`;

const PRODUCT_QUERY = groq`*[_type == "productSection"][0] {
  sectionLabel, headlinePart1, headlineEmphasis, intro,
  layers[] { number, title, description, icon }
}`;

const VISION_QUERY = groq`*[_type == "visionSection"][0] {
  sectionLabel, headlinePart1, headlineEmphasis, body, ctaLabel, ctaHref
}`;

const MESSAGING_QUERY = groq`*[_type == "messagingSection"][0] {
  sectionLabel, headlinePart1, headlineEmphasis, body,
  pillars[] { label, body }
}`;

const SECTORS_QUERY = groq`*[_type == "sectorsSection"][0] {
  sectionLabel, headline,
  sectors[] { emoji, name, description }
}`;

const CTA_QUERY = groq`*[_type == "ctaSection"][0] {
  headlinePart1, headlineEmphasis, body,
  primaryLabel, primaryHref, secondaryLabel, secondaryHref, contactLine
}`;

const TICKER_QUERY = groq`*[_type == "ticker"][0] { items }`;

export const PAGE_QUERY = groq`{
  "siteSettings": ${SITE_SETTINGS_QUERY},
  "hero": ${HERO_QUERY},
  "problem": ${PROBLEM_QUERY},
  "product": ${PRODUCT_QUERY},
  "vision": ${VISION_QUERY},
  "messaging": ${MESSAGING_QUERY},
  "sectors": ${SECTORS_QUERY},
  "cta": ${CTA_QUERY},
  "ticker": ${TICKER_QUERY}
}`;
