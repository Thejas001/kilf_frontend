import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import FeaturedSessions from "@/components/FeaturedSessions";
import AboutPreview from "@/components/AboutPreview";
import VoicesPreview from "@/components/VoicesPreview";

export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee />
      <FeaturedSessions />
      <AboutPreview />
      <VoicesPreview />
    </div>
  );
}
