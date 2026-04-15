"use client";

import { NextStudio } from "next-sanity/studio";
import config from "../../../sanity.config";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID?.trim();

/**
 * Embedded Sanity Studio at `/studio`.
 * Without a real project ID, Studio cannot talk to the API (and Manage "Studio URL" checks will fail).
 */
export default function StudioPage() {
  if (!projectId) {
    return (
      <div className="flex min-h-dvh flex-col items-center justify-center gap-6 bg-slate-950 px-6 py-16 text-center text-white">
        <h1 className="text-2xl font-bold tracking-tight">Configure Sanity first</h1>
        <div className="max-w-lg space-y-4 text-left text-slate-300">
          <p>
            Create or edit{" "}
            <code className="rounded bg-slate-800 px-2 py-1 text-sm text-white">
              web/.env.local
            </code>{" "}
            in this Next app (not only the parent <code className="text-white">HopeFootball</code>{" "}
            folder).
          </p>
          <ol className="list-decimal space-y-2 pl-5 text-sm leading-relaxed">
            <li>
              Open{" "}
              <a
                href="https://www.sanity.io/manage"
                className="font-medium text-blue-400 underline"
                target="_blank"
                rel="noreferrer"
              >
                sanity.io/manage
              </a>{" "}
              → your project → copy the <strong>Project ID</strong>.
            </li>
            <li>
              Add:{" "}
              <code className="block rounded bg-slate-800 p-3 text-xs text-white">
                NEXT_PUBLIC_SANITY_PROJECT_ID=your_id_here
              </code>
            </li>
            <li>Restart the dev server (<code className="text-white">Ctrl+C</code> then npm run dev).</li>
          </ol>
          <p className="text-sm text-slate-500">
            When adding this app under <strong>Studio</strong> or <strong>CORS</strong> in Manage, use a
            full URL like <code className="text-white">http://localhost:3000</code> (with{" "}
            <code className="text-white">http://</code>) and the studio path{" "}
            <code className="text-white">http://localhost:3000/studio</code> if a field asks for the
            Studio URL.
          </p>
        </div>
      </div>
    );
  }

  return <NextStudio config={config} />;
}
