/**
 * Seed Sanity with default Planet Zero content.
 * Run ONCE after setup:  node scripts/seed-sanity.mjs
 *
 * Requires NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET,
 * and SANITY_API_TOKEN in your .env.local
 */
import { createClient } from "@sanity/client";
import { config } from "dotenv";
config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2024-01-01",
  useCdn: false,
});

const docs = [
  {
    _id: "siteSettings", _type: "siteSettings",
    tagline: "Design for Net Zero Living",
    footerTagline: "Design for Net Zero Living · New Delhi, India · 2026",
    navLinks: [
      { label: "Product", href: "#product" },
      { label: "Vision", href: "#vision" },
      { label: "Sectors", href: "#sectors" },
    ],
    ctaLabel: "Get in Touch",
    ctaHref: "#contact",
  },
  {
    _id: "hero", _type: "hero",
    eyebrow: "Design for Net Zero Living",
    headlinePart1: "Building for a",
    headlineEmphasis: "hotter",
    headlinePart2: "planet.",
    subheading: "Climate-adaptive infrastructure engineered for thermal comfort, wherever people live and work.",
    primaryCta: "Explore the Product",
    secondaryCta: "Our vision",
    statNumber: "76%",
    statLabel: "of India's population at risk of extreme heat",
  },
  {
    _id: "problemSection", _type: "problemSection",
    sectionLabel: "The Challenge",
    headlinePart1: "Climate is changing.",
    headlineEmphasis: "hasn't.",
    body: "India's path to inclusive growth for over 1.4 billion people is unfolding in a rapidly changing climate. Conventional buildings weren't designed for this reality. Planet Zero builds the infrastructure that was.",
    stats: [
      { number: "5", suffix: "B+", description: "People exposed to extreme heat and cold every year globally" },
      { number: "76", suffix: "%", description: "Of India's population at risk of exposure to extreme heat" },
      { number: "1.4", suffix: "B", description: "People whose livelihoods depend on climate-ready infrastructure" },
    ],
  },
  {
    _id: "productSection", _type: "productSection",
    sectionLabel: "The Product",
    headlinePart1: "4 Layered",
    headlineEmphasis: "Smart Living",
    intro: "Designed for thermal comfort across extreme climates. Each layer builds on the last — from a simple foundation to a fully integrated smart living capsule, deployable in under 6 weeks.",
    layers: [
      { number: "Layer 01", title: "Foundation & Platform", description: "Elevated, relocatable base structure engineered for any terrain and extreme weather conditions.", icon: "foundation" },
      { number: "Layer 02", title: "Roof & Walls", description: "Thermally optimised enclosure built around solar geometry to manage heat gain and energy load.", icon: "structure" },
      { number: "Layer 03", title: "Interior & Systems", description: "Pre-fitted utility systems including HVAC, water, power, and smart home integration.", icon: "systems" },
      { number: "Layer 04", title: "Final Touches & Customisation", description: "Sector-specific fitouts tailored for healthcare, hospitality, labour housing, and more.", icon: "layers" },
    ],
  },
  {
    _id: "visionSection", _type: "visionSection",
    sectionLabel: "Our Vision",
    headlinePart1: "A future where\ncomfort, efficiency,\nand sustainability are",
    headlineEmphasis: "accessible to all.",
    body: "We believe climate resilience shouldn't be a luxury. Planet Zero designs infrastructure that puts people and planet at the centre — making net zero a practical, liveable reality.",
    ctaLabel: "Partner with us",
    ctaHref: "#contact",
  },
  {
    _id: "messagingSection", _type: "messagingSection",
    sectionLabel: "Why Planet Zero",
    headlinePart1: "Plan-net Zero",
    headlineEmphasis: "a plan for the planet.",
    body: "The brand name carries a double meaning: Planet Zero and Plan-net Zero. It's not just a statement — it's a commitment to making net-zero a practical, grounded reality.",
    pillars: [
      { label: "↗ Global Impact", body: "Over five billion people are exposed to extreme heat and cold every year. The scale of the challenge demands infrastructure-level solutions." },
      { label: "↗ India-First", body: "India's path to inclusive growth for 1.4 billion people is unfolding in a rapidly changing climate. We design for the realities of the subcontinent and beyond." },
      { label: "↗ Dual Mission", body: "Planet Zero designs climate infrastructure that simultaneously addresses human comfort and environmental impact — not one at the expense of the other." },
    ],
  },
  {
    _id: "sectorsSection", _type: "sectorsSection",
    sectionLabel: "Built for Every Sector",
    headline: "Wherever people need thermal comfort.",
    sectors: [
      { emoji: "🏥", name: "Healthcare", description: "Climate-controlled medical infrastructure for remote and underserved regions. From primary health centres to diagnostic units in extreme environments like Ladakh." },
      { emoji: "🏗️", name: "Labour Housing", description: "Dignified, thermally comfortable living quarters for workers in construction, mining, and infrastructure projects across harsh climates." },
      { emoji: "🏨", name: "Hospitality", description: "Rapidly deployable eco-resort and glamping capsules designed for sustainability and thermal comfort, without sacrificing guest experience." },
    ],
  },
  {
    _id: "ctaSection", _type: "ctaSection",
    headlinePart1: "Ready to\nbuild for\nthe",
    headlineEmphasis: "planet?",
    body: "Whether you're a government body, development organisation, or enterprise looking to deploy resilient infrastructure — let's talk about what Planet Zero can build for you.",
    primaryLabel: "Get in Touch",
    primaryHref: "mailto:kaushikee@planetzero.in",
    secondaryLabel: "Visit planetzero.in",
    secondaryHref: "https://planetzero.in",
    contactLine: "Or reach Kaushikee Singh, Co-Founder & CEO at kaushikee@planetzero.in",
  },
  {
    _id: "ticker", _type: "ticker",
    items: [
      "Relocatable Asset", "Pre-Fitted Utility Systems",
      "Custom Built for Solar Geometry", "Tailored for Sector-Specific Needs",
      "Setup in Under 6 Weeks", "Net Zero Infrastructure",
    ],
  },
];

async function seed() {
  console.log("🌱 Seeding Sanity...\n");
  for (const doc of docs) {
    await client.createOrReplace(doc);
    console.log(`  ✓ ${doc._type} (${doc._id})`);
  }
  console.log("\n✅ Done! Open http://localhost:3000/studio to edit content.");
}

seed().catch((err) => { console.error(err); process.exit(1); });
