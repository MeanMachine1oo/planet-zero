import { defineType, defineField } from "sanity";

export default defineType({
  name: "productSection",
  title: "Product Section",
  type: "document",
  icon: () => "🏗️",
  fields: [
    defineField({ name: "sectionLabel", title: "Section Label", type: "string" }),
    defineField({ name: "headlinePart1", title: "Headline Part 1", type: "string" }),
    defineField({ name: "headlineEmphasis", title: "Headline Emphasis", type: "string" }),
    defineField({ name: "intro", title: "Intro paragraph", type: "text", rows: 3 }),
    defineField({
      name: "layers",
      title: "Product Layers",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "number", type: "string", title: "Layer Number (e.g. Layer 01)" },
          { name: "title", type: "string", title: "Title" },
          { name: "description", type: "text", title: "Description" },
          {
            name: "icon",
            type: "string",
            title: "Icon type",
            options: {
              list: [
                { title: "Foundation", value: "foundation" },
                { title: "Structure", value: "structure" },
                { title: "Systems", value: "systems" },
                { title: "Layers", value: "layers" },
              ],
            },
          },
        ],
      }],
    }),
  ],
});
