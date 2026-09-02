import Image from "next/image";

export default function ImageSlot({
  src,
  alt,
  radius = 20,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: {
  src: string;
  alt: string;
  radius?: number;
  sizes?: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        borderRadius: radius,
        overflow: "hidden",
      }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} style={{ objectFit: "cover" }} />
    </div>
  );
}
