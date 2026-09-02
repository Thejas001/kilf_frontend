import type { Metadata } from "next";
import JournalContent from "@/components/JournalContent";

export const metadata: Metadata = {
  title: "Journal — KaKhaGa",
};

export default function JournalPage() {
  return <JournalContent />;
}
