import Image from "next/image";
import { cn } from "@/lib/utils";

type ImageFrameProps = {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
};

export function ImageFrame({
  src,
  alt,
  className,
  imageClassName,
  priority = false,
}: ImageFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl border border-gold/10 bg-ink shadow-luxury",
        "after:absolute after:inset-0 after:bg-[linear-gradient(180deg,rgba(5,4,4,0.08),rgba(5,4,4,0.42))]",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        className={cn("object-cover brightness-[0.84] contrast-110 saturate-[0.82]", imageClassName)}
      />
    </div>
  );
}
