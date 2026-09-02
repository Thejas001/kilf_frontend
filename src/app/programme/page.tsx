import type { Metadata } from "next";
import ProgrammeContent from "@/components/ProgrammeContent";

export const metadata: Metadata = {
  title: "Programme — KaKhaGa",
};

export default function ProgrammePage() {
  return <ProgrammeContent />;
}
