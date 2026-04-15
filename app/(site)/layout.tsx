import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { SiteMain } from "@/components/site-main";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <SiteMain>{children}</SiteMain>
      <Footer />
    </>
  );
}
