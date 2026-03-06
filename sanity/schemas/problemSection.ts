import { defineField, defineType } from "sanity";

export const problemSection = defineType({
  name: "problemSection",
  title: "Problem / Stats Section",
  type: "document",
  fields: [
    defineField({ name: "sectionLabel", title: "Section Label", type: "string",
      description: 'e.g. "The Challenge"' }),
    defineField({ name: "headline", title: "Headline", type: "string",
      description: 'e.g. "Climate is changing."' }),
    defineField({ name: "headlineHighlight", title: "Headline Highlighted Part", type: "string",
      description: 'e.g. "hasn\'t." — shown in coral' }),
    defineField({ name: "body", title: "Body Text", type: "text", rows: 3 }),
    defineField({
      name: "stats",
      title: "Stat Cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "number", title: "Number", type: "string", description: 'e.g. "5"' }),
            defineField({ name: "suffix", title: "Suffix", type: "string", description: 'e.g. "B+" or "%"' }),
            defineField({ name: "description", title: "Description", type: "string" }),
          ],
          preview: { select: { title: "number", subtitle: "description" } },
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
  ],
  preview: { select: { title: "headline" } },
});
