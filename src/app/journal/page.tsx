import type { Metadata } from "next";
import JournalContent from "@/components/JournalContent";

export const metadata: Metadata = {
  title: "Journal — KILF",
};

export default function JournalPage() {
  return <JournalContent />;
}
