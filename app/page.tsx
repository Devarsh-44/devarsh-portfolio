import { About } from "@/components/about/About";
import { Beliefs } from "@/components/beliefs/Beliefs";
import { CaseStudySection } from "@/components/case-study/CaseStudySection";
import { LookForCard } from "@/components/contact/LookForCard";
import { Hero } from "@/components/hero/Hero";
import { IntroCurtain } from "@/components/intro/IntroCurtain";
import { LabStrip } from "@/components/lab/LabStrip";
import { Nav } from "@/components/nav/Nav";
import { SideRail } from "@/components/rail/SideRail";
import { StudioBridge } from "@/components/studio/StudioBridge";
import { Footer } from "@/components/ui/Footer";
import { Work } from "@/components/work/Work";

export default function Home() {
  return (
    <>
      <IntroCurtain />
      <SideRail />
      <div className="relative pb-14 lg:pb-0 lg:pl-14">
        <Nav />
        <main>
          <Hero />
          <About />
          <Work />
          <CaseStudySection />
          <Beliefs />
          <StudioBridge />
          <LabStrip />
          <LookForCard />
        </main>
        <Footer />
      </div>
    </>
  );
}
