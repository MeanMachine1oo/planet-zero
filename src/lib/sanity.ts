import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export const PAGE_QUERY = `{
  "siteSettings": *[_type == "siteSettings"][0] {
    tagline, footerTagline,
    navLinks[]{ label, href },
    ctaLabel, ctaHref
  },
  "hero": *[_type == "hero"][0] {
    eyebrow, headlinePart1, headlineEmphasis, headlinePart2,
    subheading, primaryCta, secondaryCta, statNumber, statLabel
  },
  "problem": *[_type == "problemSection"][0] {
    sectionLabel, headlinePart1, headlineEmphasis, body,
    stats[]{ number, suffix, description }
  },
  "product": *[_type == "productSection"][0] {
    sectionLabel, headlinePart1, headlineEmphasis, intro,
    layers[]{ number, title, description, icon }
  },
  "vision": *[_type == "visionSection"][0] {
    sectionLabel, headlinePart1, headlineEmphasis, body, ctaLabel, ctaHref
  },
  "messaging": *[_type == "messagingSection"][0] {
    sectionLabel, headlinePart1, headlineEmphasis, body,
    pillars[]{ label, body }
  },
  "sectors": *[_type == "sectorsSection"][0] {
    sectionLabel, headline,
    sectors[]{ emoji, name, description }
  },
  "cta": *[_type == "ctaSection"][0] {
    headlinePart1, headlineEmphasis, body,
    primaryLabel, primaryHref, secondaryLabel, secondaryHref, contactLine
  },
  "ticker": *[_type == "ticker"][0]{ items }
}`;
