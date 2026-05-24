import { Nav } from "@/components/nav";
import { HeroV2 } from "@/components/hero-v2";
import { Marquee } from "@/components/marquee";
import { LiquidShowcase } from "@/components/liquid-showcase";
import { Services } from "@/components/services";
import { Work } from "@/components/work";
import { Process } from "@/components/process";
import { Quote } from "@/components/quote";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export const metadata = {
  title: "Liquid · v2 design experiment",
  description:
    "The Liquid theme — Define AI's showcase for glass-on-water UI. A design experiment retained for reference.",
};

export default function V2Page() {
  return (
    <div data-theme="v2">
      <Nav />
      <main>
        <HeroV2 />
        <Marquee />
        <LiquidShowcase />
        <Services />
        <Work />
        <Process />
        <Quote />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
