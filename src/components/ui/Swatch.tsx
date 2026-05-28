type SwatchProps = {
  label: string;
  value: string;
};

export function Swatch({ label, value }: SwatchProps) {
  return (
    <div className="group">
      <div
        className="h-12 rounded-full border border-white/12 shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] transition duration-300 group-hover:-translate-y-0.5"
        style={{ backgroundColor: value }}
      />
      <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.1em] text-ivory/48">
        {label}
      </p>
    </div>
  );
}
