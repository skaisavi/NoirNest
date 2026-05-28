import { GlassCard } from "@/components/ui/GlassCard";

type StatCardProps = {
  value: string;
  label: string;
};

export function StatCard({ value, label }: StatCardProps) {
  return (
    <GlassCard className="p-6">
      <strong className="block font-serif text-5xl leading-none text-gold">{value}</strong>
      <span className="mt-3 block text-sm leading-6 text-ivory/58">{label}</span>
    </GlassCard>
  );
}
