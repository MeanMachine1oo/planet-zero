import { defineField, defineType } from "sanity";

export const hero = defineType({
  name: "hero",
  title: "Hero Section",
  type: "document",
  fields: [
    defineField({ name: "eyebrow", title: "Eyebrow Text", type: "string",
      description: "Small uppercase text above the headline" }),
    defineField({ name: "headline", title: "Headline (first part)", type: "string",
      description: 'e.g. "Building for a"' }),
    defineField({ name: "headlineItalic", title: "Headline Italic Word", type: "string",
      description: 'e.g. "hotter" — shown in coral italic' }),
    defineField({ name: "subheading", title: "Subheading", type: "text", rows: 2 }),
    defineField({ name: "primaryCta", title: "Primary CTA Label", type: "string" }),
    defineField({ name: "secondaryCta", title: "Secondary CTA Label", type: "string" }),
    defineField({ name: "statNumber", title: "Stat Number", type: "string",
      description: 'e.g. "76%"' }),
    defineField({ name: "statLabel", title: "Stat Label", type: "string",
      description: 'e.g. "of India\'s population at risk of extreme heat"' }),
  ],
  preview: { select: { title: "headline" } },
});
