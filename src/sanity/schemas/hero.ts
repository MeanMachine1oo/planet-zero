import { defineType, defineField } from "sanity";

export default defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  icon: () => "🏠",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow Text", type: "string" }),
    defineField({ name: "headlinePart1", title: "Headline — Part 1", type: "string", description: 'e.g. "Building for a"' }),
    defineField({ name: "headlineEmphasis", title: "Headline — Emphasis (italic coral)", type: "string", description: 'e.g. "hotter"' }),
    defineField({ name: "headlinePart2", title: "Headline — Part 3", type: "string", description: 'e.g. "planet."' }),
    defineField({ name: "subheading", title: "Subheading", type: "text", rows: 2 }),
    defineField({ name: "primaryCta", title: "Primary CTA Label", type: "string" }),
    defineField({ name: "secondaryCta", title: "Secondary CTA Label", type: "string" }),
    defineField({ name: "statNumber", title: "Hero Stat Number", type: "string", description: 'e.g. "76%"' }),
    defineField({ name: "statLabel", title: "Hero Stat Label", type: "string" }),
  ],
});
