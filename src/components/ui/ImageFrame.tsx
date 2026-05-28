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
    <div className={cn("relative overflow-hidden rounded-lg bg-ink shadow-luxury", className)}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={priority}
        className={cn("object-cover brightness-90 contrast-105 saturate-[0.88]", imageClassName)}
      />
    </div>
  );
}
