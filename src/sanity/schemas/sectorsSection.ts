import { defineType, defineField } from "sanity";

export default defineType({
  name: "sectorsSection",
  title: "Sectors Section",
  type: "document",
  icon: () => "🏭",
  fields: [
    defineField({ name: "sectionLabel", title: "Section Label", type: "string" }),
    defineField({ name: "headline", title: "Headline", type: "string" }),
    defineField({
      name: "sectors",
      title: "Sectors",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "emoji", type: "string", title: "Emoji" },
          { name: "name", type: "string", title: "Sector Name" },
          { name: "description", type: "text", title: "Description" },
        ],
      }],
    }),
  ],
});
