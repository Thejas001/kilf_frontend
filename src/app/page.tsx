import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StarInteractions from "@/components/StarInteractions";
import FestivalPillars from "@/components/FestivalPillars";
import FeaturedSessions from "@/components/FeaturedSessions";
import GalleryPreview from "@/components/GalleryPreview";
import AboutPreview from "@/components/AboutPreview";
import VoicesPreview from "@/components/VoicesPreview";

export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee />
      <StarInteractions limit={6} />
      <FestivalPillars />
      <FeaturedSessions />
      <GalleryPreview />
      <AboutPreview />
      <VoicesPreview />
    </div>
  );
}
