/**
 * Sanity CLI — run from the `web/` folder.
 * Load `.env.local` here (Node only). Do not put this in `sanity/env.ts` — that file is bundled for the browser.
 */
import path from "node:path";
import { config as loadEnv } from "dotenv";
import { defineCliConfig } from "sanity/cli";

loadEnv({ path: path.join(process.cwd(), ".env.local") });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export default defineCliConfig({ api: { projectId, dataset } });
