/**
 * SEED SCRIPT
 * Run once to populate Sanity with all default content from the landing page.
 *
 * Usage:
 *   npx ts-node --esm sanity/seed.ts
 *   OR (easier via Node):
 *   npx sanity exec sanity/seed.ts --with-user-token
 */

import { createClient } from "@sanity/client";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_API_READ_TOKEN, // needs write permissions — use editor/admin token
});

const documents = [
  {
    _id: "siteSettings",
    _type: "siteSettings",
    siteName: "Planet Zero",
    tagline: "Design for Net Zero Living",
    footerTagline: "Design for Net Zero Living · New Delhi, India · 2026",
    navLinks: [
      { _key: "1", label: "Product", href: "#product" },
      { _key: "2", label: "Vision", href: "#vision" },
      { _key: "3", label: "Sectors", href: "#sectors" },
    ],
    ctaLabel: "Get in Touch",
    ctaHref: "#contact",
  },
  {
    _id: "hero",
    _type: "hero",
    eyebrow: "Design for Net Zero Living",
    headline: "Building for a",
    headlineItalic: "hotter",
    subheading:
      "Climate-adaptive infrastructure engineered for thermal comfort, wherever people live and work.",
    primaryCta: "Explore the Product",
    secondaryCta: "Our vision",
    statNumber: "76%",
    statLabel: "of India's population at risk of extreme heat",
  },
  {
    _id: "problemSection",
    _type: "problemSection",
    sectionLabel: "The Challenge",
    headline: "Climate is changing.",
    headlineHighlight: "Infrastructure hasn't.",
    body: "India's path to inclusive growth for over 1.4 billion people is unfolding in a rapidly changing climate. Conventional buildings weren't designed for this reality. Planet Zero builds the infrastructure that was.",
    stats: [
      { _key: "1", number: "5", suffix: "B+", description: "People exposed to extreme heat and cold every year globally" },
      { _key: "2", number: "76", suffix: "%", description: "Of India's population at risk of exposure to extreme heat" },
      { _key: "3", number: "1.4", suffix: "B", description: "People whose livelihoods depend on climate-ready infrastructure" },
    ],
  },
  {
    _id: "productSection",
    _type: "productSection",
    sectionLabel: "The Product",
    headline: "4 Layered",
    headlineItalic: "Smart Living Infrastructure",
    intro:
      "Designed for thermal comfort across extreme climates. Each layer builds on the last — from a simple foundation to a fully integrated smart living capsule, deployable in under 6 weeks.",
    layers: [
      { _key: "1", number: "Layer 01", title: "Foundation & Platform", description: "Elevated, relocatable base structure engineered for any terrain and extreme weather conditions." },
      { _key: "2", number: "Layer 02", title: "Roof & Walls", description: "Thermally optimised enclosure built around solar geometry to manage heat gain and energy load." },
      { _key: "3", number: "Layer 03", title: "Interior & Systems", description: "Pre-fitted utility systems including HVAC, water, power, and smart home integration." },
      { _key: "4", number: "Layer 04", title: "Final Touches & Customisation", description: "Sector-specific fitouts tailored for healthcare, hospitality, labour housing, and more." },
    ],
  },
  {
    _id: "visionSection",
    _type: "visionSection",
    sectionLabel: "Our Vision",
    headline: "A future where\ncomfort, efficiency,\nand sustainability are",
    headlineItalic: "accessible to all.",
    subheading:
      "We believe climate resilience shouldn't be a luxury. Planet Zero designs infrastructure that puts people and planet at the centre — making net zero a practical, liveable reality.",
    ctaLabel: "Partner with us",
    ctaHref: "#contact",
  },
  {
    _id: "messagingSection",
    _type: "messagingSection",
    sectionLabel: "Why Planet Zero",
    headline: "— a plan for the planet.",
    headlineItalic: "Plan-net Zero",
    body: "The brand name carries a double meaning: Planet Zero and Plan-net Zero. It's not just a statement — it's a commitment to making net-zero a practical, grounded reality across regions, sectors, and communities.",
    pillars: [
      { _key: "1", label: "↗ Global Impact", text: "Over five billion people are exposed to extreme heat and cold every year. The scale of the challenge demands infrastructure-level solutions." },
      { _key: "2", label: "↗ India-First", text: "India's path to inclusive growth for 1.4 billion people is unfolding in a rapidly changing climate. We design for the realities of the subcontinent and beyond." },
      { _key: "3", label: "↗ Dual Mission", text: "Planet Zero designs climate infrastructure that simultaneously addresses human comfort and environmental impact — not one at the expense of the other." },
    ],
  },
  {
    _id: "sectorsSection",
    _type: "sectorsSection",
    sectionLabel: "Built for Every Sector",
    headline: "Wherever people need thermal comfort.",
    sectors: [
      { _key: "1", icon: "🏥", name: "Healthcare", description: "Climate-controlled medical infrastructure for remote and underserved regions. From primary health centres to diagnostic units in extreme environments like Ladakh." },
      { _key: "2", icon: "🏗️", name: "Labour Housing", description: "Dignified, thermally comfortable living quarters for workers in construction, mining, and infrastructure projects across harsh climates." },
      { _key: "3", icon: "🏨", name: "Hospitality", description: "Rapidly deployable eco-resort and glamping capsules designed for sustainability and thermal comfort, without sacrificing guest experience." },
    ],
  },
  {
    _id: "ctaSection",
    _type: "ctaSection",
    headline: "Ready to build for the",
    headlineItalic: "planet?",
    description:
      "Whether you're a government body, development organisation, or enterprise looking to deploy resilient infrastructure — let's talk about what Planet Zero can build for you.",
    primaryCtaLabel: "Get in Touch",
    primaryCtaHref: "mailto:kaushikee@planetzero.in",
    secondaryCtaLabel: "Visit planetzero.in",
    secondaryCtaHref: "https://planetzero.in",
    contactNote:
      "Or reach Kaushikee Singh, Co-Founder & CEO at kaushikee@planetzero.in",
  },
];

async function seed() {
  console.log("🌱 Seeding Sanity with default content...\n");
  for (const doc of documents) {
    await client.createOrReplace(doc);
    console.log(`✅ Created: ${doc._type} (${doc._id})`);
  }
  console.log("\n🎉 Seed complete! Open /studio to see your content.");
}

seed().catch(console.error);
