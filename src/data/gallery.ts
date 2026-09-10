import type { StaticImageData } from "next/image";

import g1 from "@/gallery/1000358697.jpg";
import g2 from "@/gallery/1000358698.jpg";
import g3 from "@/gallery/1000358699.jpg";
import g4 from "@/gallery/1000358700.jpg";
import g5 from "@/gallery/1000358701.jpg";
import g6 from "@/gallery/1000358702.jpg";
import g7 from "@/gallery/1000358703.jpg";
import g8 from "@/gallery/1000358704.jpg";
import g9 from "@/gallery/1000358705.jpg";
import g10 from "@/gallery/1000358706.jpg";
import g11 from "@/gallery/1000358707.jpg";
import g12 from "@/gallery/1000358708.jpg";
import g13 from "@/gallery/1000358709.jpg";
import g14 from "@/gallery/1000358710.jpg";
import g15 from "@/gallery/1000358711.jpg";
import g16 from "@/gallery/1000358712.jpg";
import g17 from "@/gallery/1000358713.jpg";
import g18 from "@/gallery/1000358714.jpg";
import g19 from "@/gallery/1000358715.jpg";
import g20 from "@/gallery/1000358716.jpg";
import g21 from "@/gallery/1000358717.jpg";
import g22 from "@/gallery/1000358718.jpg";
import g23 from "@/gallery/1000358719.jpg";
import g24 from "@/gallery/1000358720.jpg";
import g25 from "@/gallery/1000358721.jpg";
import g26 from "@/gallery/1000358722.jpg";

export type GalleryItem = {
  id: string;
  image: StaticImageData;
  alt: string;
};

export const GALLERY_ITEMS: GalleryItem[] = [
  { id: "img-1", image: g1, alt: "Festival gathering 1" },
  { id: "img-2", image: g2, alt: "Festival gathering 2" },
  { id: "img-3", image: g3, alt: "Festival gathering 3" },
  { id: "img-4", image: g4, alt: "Festival gathering 4" },
  { id: "img-5", image: g5, alt: "Festival gathering 5" },
  { id: "img-6", image: g6, alt: "Festival gathering 6" },
  { id: "img-7", image: g7, alt: "Festival gathering 7" },
  { id: "img-8", image: g8, alt: "Festival gathering 8" },
  { id: "img-9", image: g9, alt: "Festival gathering 9" },
  { id: "img-10", image: g10, alt: "Festival gathering 10" },
  { id: "img-11", image: g11, alt: "Festival gathering 11" },
  { id: "img-12", image: g12, alt: "Festival gathering 12" },
  { id: "img-13", image: g13, alt: "Festival gathering 13" },
  { id: "img-14", image: g14, alt: "Festival gathering 14" },
  { id: "img-15", image: g15, alt: "Festival gathering 15" },
  { id: "img-16", image: g16, alt: "Festival gathering 16" },
  { id: "img-17", image: g17, alt: "Festival gathering 17" },
  { id: "img-18", image: g18, alt: "Festival gathering 18" },
  { id: "img-19", image: g19, alt: "Festival gathering 19" },
  { id: "img-20", image: g20, alt: "Festival gathering 20" },
  { id: "img-21", image: g21, alt: "Festival gathering 21" },
  { id: "img-22", image: g22, alt: "Festival gathering 22" },
  { id: "img-23", image: g23, alt: "Festival gathering 23" },
  { id: "img-24", image: g24, alt: "Festival gathering 24" },
  { id: "img-25", image: g25, alt: "Festival gathering 25" },
  { id: "img-26", image: g26, alt: "Festival gathering 26" },
];

export const FESTIVAL_PDF = {
  fileName: "12 X 7 PROGRAM SCEDULE FLEX.pdf",
  publicPath: "/kilf_programme_schedule.pdf",
  title: "Previous Edition Programme Schedule (Archive)",
  description: "Archival reference programme schedule from the previous festival edition.",
  size: "10.3 MB",
};
