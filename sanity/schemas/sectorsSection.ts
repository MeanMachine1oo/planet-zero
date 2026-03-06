import { defineField, defineType } from "sanity";

export const sectorsSection = defineType({
  name: "sectorsSection",
  title: "Sectors Section",
  type: "document",
  fields: [
    defineField({ name: "sectionLabel", title: "Section Label", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({
      name: "sectors",
      title: "Sectors",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "icon", title: "Icon (emoji)", type: "string", description: 'e.g. "🏥"' }),
            defineField({ name: "name", title: "Sector Name", type: "string" }),
            defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
          ],
          preview: { select: { title: "name", subtitle: "icon" } },
        },
      ],
    }),
  ],
  preview: { select: { title: "headline" } },
});
