import { defineField, defineType } from "sanity";

export const visionSection = defineType({
  name: "visionSection",
  title: "Vision Section",
  type: "document",
  fields: [
    defineField({ name: "sectionLabel", title: "Section Label", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "text", rows: 3 }),
    defineField({ name: "headlineItalic", title: "Headline Italic Part", type: "string",
      description: 'e.g. "accessible to all." — shown in coral italic' }),
    defineField({ name: "subheading", title: "Subheading", type: "text", rows: 2 }),
    defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
    defineField({ name: "ctaHref", title: "CTA Href", type: "string" }),
  ],
  preview: { select: { title: "headline" } },
});
