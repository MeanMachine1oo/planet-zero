import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  title: "Planet Zero CMS",
  schema: { types: schemaTypes },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(
                S.document()
                  .schemaType("siteSettings")
                  .documentId("siteSettings")
              ),
            S.divider(),
            S.listItem()
              .title("Hero Section")
              .id("hero")
              .child(
                S.document().schemaType("hero").documentId("hero")
              ),
            S.listItem()
              .title("Problem / Stats Section")
              .id("problemSection")
              .child(
                S.document()
                  .schemaType("problemSection")
                  .documentId("problemSection")
              ),
            S.listItem()
              .title("Product Section")
              .id("productSection")
              .child(
                S.document()
                  .schemaType("productSection")
                  .documentId("productSection")
              ),
            S.listItem()
              .title("Vision Section")
              .id("visionSection")
              .child(
                S.document()
                  .schemaType("visionSection")
                  .documentId("visionSection")
              ),
            S.listItem()
              .title("Why Planet Zero Section")
              .id("messagingSection")
              .child(
                S.document()
                  .schemaType("messagingSection")
                  .documentId("messagingSection")
              ),
            S.listItem()
              .title("Sectors Section")
              .id("sectorsSection")
              .child(
                S.document()
                  .schemaType("sectorsSection")
                  .documentId("sectorsSection")
              ),
            S.listItem()
              .title("CTA / Contact Section")
              .id("ctaSection")
              .child(
                S.document()
                  .schemaType("ctaSection")
                  .documentId("ctaSection")
              ),
          ]),
    }),
    visionTool(),
  ],
});
