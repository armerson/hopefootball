import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schemaTypes";
import { structure } from "./sanity/structure";

/**
 * Sanity Studio — embedded at `/studio` and used by `npx sanity dev`.
 * Do not mark this file as `"use client"`; it must load in Node and the browser build.
 */
export default defineConfig({
  name: "hope-football",
  title: "Hope Football CMS",
  basePath: "/studio",
  projectId: projectId || "placeholder",
  dataset: dataset || "production",
  schema,
  plugins: [
    structureTool({ structure }),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
});
