import { defineType, defineField } from "sanity";

export default defineType({
  name: "messagingSection",
  title: "Why Planet Zero Section",
  type: "document",
  icon: () => "💬",
  fields: [
    defineField({ name: "sectionLabel", title: "Section Label", type: "string" }),
    defineField({ name: "headlinePart1", title: "Headline Part 1", type: "string" }),
    defineField({ name: "headlineEmphasis", title: "Headline Emphasis", type: "string" }),
    defineField({ name: "body", title: "Body Text", type: "text", rows: 3 }),
    defineField({
      name: "pillars",
      title: "Pillars",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "label", type: "string", title: "Label (e.g. ↗ Global Impact)" },
          { name: "body", type: "text", title: "Body Text" },
        ],
      }],
    }),
  ],
});
