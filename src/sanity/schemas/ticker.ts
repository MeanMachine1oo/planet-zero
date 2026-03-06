import { defineType, defineField } from "sanity";

export default defineType({
  name: "ticker",
  title: "Ticker Bar",
  type: "document",
  icon: () => "📢",
  fields: [
    defineField({
      name: "items",
      title: "Ticker Items",
      type: "array",
      of: [{ type: "string" }],
    }),
  ],
});
