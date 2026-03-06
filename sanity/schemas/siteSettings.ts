import { defineField, defineType } from "sanity";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "siteName", title: "Site Name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline (below logo)", type: "string" }),
    defineField({ name: "footerTagline", title: "Footer Tagline", type: "string" }),
    defineField({
      name: "navLinks",
      title: "Nav Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "label", title: "Label", type: "string" }),
            defineField({ name: "href", title: "Href (e.g. #product)", type: "string" }),
          ],
        },
      ],
    }),
    defineField({ name: "ctaLabel", title: "Nav CTA Label", type: "string" }),
    defineField({ name: "ctaHref", title: "Nav CTA Href", type: "string" }),
  ],
  preview: { select: { title: "siteName" } },
});
