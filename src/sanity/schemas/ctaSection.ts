import { defineType, defineField } from "sanity";

export default defineType({
  name: "ctaSection",
  title: "CTA / Contact Section",
  type: "document",
  icon: () => "📬",
  fields: [
    defineField({ name: "headlinePart1", title: "Headline Part 1", type: "string" }),
    defineField({ name: "headlineEmphasis", title: "Headline Emphasis (italic coral)", type: "string" }),
    defineField({ name: "body", title: "Body Text", type: "text", rows: 3 }),
    defineField({ name: "primaryLabel", title: "Primary CTA Label", type: "string" }),
    defineField({ name: "primaryHref", title: "Primary CTA Href", type: "string" }),
    defineField({ name: "secondaryLabel", title: "Secondary CTA Label", type: "string" }),
    defineField({ name: "secondaryHref", title: "Secondary CTA Href", type: "string" }),
    defineField({ name: "contactLine", title: "Contact Line (plain text)", type: "string" }),
  ],
});
