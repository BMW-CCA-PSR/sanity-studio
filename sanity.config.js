// sanity.config.js
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { defaultDocumentNode } from "./src/components/previewIFrame";
import { unsplashImageAsset } from "sanity-plugin-asset-source-unsplash";
import { media } from 'sanity-plugin-media'
import schemas from "./schemas/schema";
import deskStructure from "./deskStructure";

export default defineConfig({
  title: "BMW CCA PSR Website",
  projectId: "clgsgxc0",
  dataset: "production",
  plugins: [
    structureTool({
      defaultDocumentNode,
      structure: deskStructure,
    }),
    unsplashImageAsset(),
    media()
  ],
  schema: {
    types: schemas,
  },
});