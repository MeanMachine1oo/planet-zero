import { defineType, defineField } from "sanity";

export default defineType({
  name: "problemSection",
  title: "Problem Section",
  type: "document",
  icon: () => "⚠️",
  fields: [
    defineField({ name: "sectionLabel", title: "Section Label", type: "string" }),
    defineField({ name: "headlinePart1", title: "Headline Part 1", type: "string" }),
    defineField({ name: "headlineEmphasis", title: "Headline Emphasis (italic coral)", type: "string" }),
    defineField({ name: "body", title: "Body Text", type: "text", rows: 3 }),
    defineField({
      name: "stats",
      title: "Stat Cards",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "number", type: "string", title: "Number (e.g. 5)" },
          { name: "suffix", type: "string", title: "Suffix (e.g. B+, %)" },
          { name: "description", type: "string", title: "Description" },
        ],
      }],
    }),
  ],
});
