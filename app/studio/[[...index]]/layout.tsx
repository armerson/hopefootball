import type { Metadata, Viewport } from "next";
import { metadata as studioMetadata } from "next-sanity/studio";

export const metadata: Metadata = {
  ...studioMetadata,
  title: "Hope Football — CMS",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /* Nested under root `app/layout.tsx` — do not add a second <html> */
  return <div className="min-h-dvh">{children}</div>;
}
