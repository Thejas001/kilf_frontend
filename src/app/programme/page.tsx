import type { Metadata } from "next";
import ProgrammeContent from "@/components/ProgrammeContent";

export const metadata: Metadata = {
  title: "Programme — KILF",
};

export default function ProgrammePage() {
  return <ProgrammeContent />;
}
