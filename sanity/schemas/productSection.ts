import { defineField, defineType } from "sanity";

export const productSection = defineType({
  name: "productSection",
  title: "Product Section",
  type: "document",
  fields: [
    defineField({ name: "sectionLabel", title: "Section Label", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({ name: "headlineItalic", title: "Headline Italic Part", type: "string",
      description: 'e.g. "Smart Living" — shown in green italic' }),
    defineField({ name: "intro", title: "Intro Paragraph", type: "text", rows: 3 }),
    defineField({
      name: "layers",
      title: "Product Layers",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "number", title: "Layer Number", type: "string", description: 'e.g. "Layer 01"' }),
            defineField({ name: "title", title: "Title", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "number", subtitle: "title" } },
        },
      ],
      validation: (Rule) => Rule.max(4),
    }),
  ],
  preview: { select: { title: "headline" } },
});
