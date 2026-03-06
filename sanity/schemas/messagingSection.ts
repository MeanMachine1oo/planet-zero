import { defineField, defineType } from "sanity";

export const messagingSection = defineType({
  name: "messagingSection",
  title: "Why Planet Zero Section",
  type: "document",
  fields: [
    defineField({ name: "sectionLabel", title: "Section Label", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "headlineItalic", title: "Headline Italic Part", type: "string",
      description: 'e.g. "Plan-net Zero" — shown in green italic' }),
    defineField({ name: "body", title: "Body Text", type: "text", rows: 3 }),
    defineField({
      name: "pillars",
      title: "Pillars",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string", description: 'e.g. "↗ Global Impact"' }),
            defineField({ name: "text", title: "Text", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "label" } },
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
  ],
  preview: { select: { title: "headline" } },
});
