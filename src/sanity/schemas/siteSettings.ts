import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  icon: () => "⚙️",
  fields: [
    defineField({ name: "tagline", title: "Tagline (nav/meta)", type: "string" }),
    defineField({ name: "footerTagline", title: "Footer Tagline", type: "string" }),
    defineField({
      name: "navLinks",
      title: "Nav Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string", title: "Label" },
            { name: "href", type: "string", title: "Href (e.g. #product)" },
          ],
        },
      ],
    }),
    defineField({ name: "ctaLabel", title: "Nav CTA Label", type: "string" }),
    defineField({ name: "ctaHref", title: "Nav CTA Href", type: "string" }),
  ],
});
