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
      className="relative h-full w-full overflow-hidden"
      style={{ borderRadius: radius }}
    >
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}
