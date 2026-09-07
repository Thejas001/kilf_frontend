import type { Metadata } from "next";
import VoicesContent from "@/components/VoicesContent";

export const metadata: Metadata = {
  title: "Voices — KILF",
};

export default function VoicesPage() {
  return <VoicesContent />;
}
