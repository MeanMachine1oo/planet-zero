import { defineField, defineType } from "sanity";

export const ctaSection = defineType({
  name: "ctaSection",
  title: "CTA / Contact Section",
  type: "document",
  fields: [
    defineField({ name: "headline", title: "Headline", type: "string", description: 'e.g. "Ready to build for the"' }),
    defineField({ name: "headlineItalic", title: "Headline Italic Part", type: "string", description: 'e.g. "planet?" — shown in coral italic' }),
    defineField({ name: "description", title: "Description", type: "text", rows: 2 }),
    defineField({ name: "primaryCtaLabel", title: "Primary CTA Label", type: "string" }),
    defineField({ name: "primaryCtaHref", title: "Primary CTA Href (mailto: or URL)", type: "string" }),
    defineField({ name: "secondaryCtaLabel", title: "Secondary CTA Label", type: "string" }),
    defineField({ name: "secondaryCtaHref", title: "Secondary CTA Href", type: "string" }),
    defineField({ name: "contactNote", title: "Contact Note (below buttons)", type: "string",
      description: 'e.g. "Or reach Kaushikee Singh, Co-Founder & CEO at kaushikee@planetzero.in"' }),
  ],
  preview: { select: { title: "headline" } },
});
