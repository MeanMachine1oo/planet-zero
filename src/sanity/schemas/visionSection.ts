import { defineType, defineField } from "sanity";

export default defineType({
  name: "visionSection",
  title: "Vision Section",
  type: "document",
  icon: () => "🌍",
  fields: [
    defineField({ name: "sectionLabel", title: "Section Label", type: "string" }),
    defineField({ name: "headlinePart1", title: "Headline Part 1", type: "text", rows: 2 }),
    defineField({ name: "headlineEmphasis", title: "Headline Emphasis (italic coral)", type: "string" }),
    defineField({ name: "body", title: "Body Text", type: "text", rows: 3 }),
    defineField({ name: "ctaLabel", title: "CTA Label", type: "string" }),
    defineField({ name: "ctaHref", title: "CTA Href", type: "string" }),
  ],
});
