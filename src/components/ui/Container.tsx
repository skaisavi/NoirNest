import { cn } from "@/lib/utils";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-[min(100%-2rem,1180px)] md:w-[min(100%-3rem,1180px)]", className)}>
      {children}
    </div>
  );
}
