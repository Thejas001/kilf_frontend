import type { Metadata } from "next";
import VoicesContent from "@/components/VoicesContent";

export const metadata: Metadata = {
  title: "Voices — KaKhaGa",
};

export default function VoicesPage() {
  return <VoicesContent />;
}
