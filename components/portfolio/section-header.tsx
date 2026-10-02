type SectionHeaderProps = {
  index: string;
  label: string;
  title: string;
  children?: React.ReactNode;
};

/** Shared header for every content section: eyebrow, title, optional action. */
export default function SectionHeader({ index, label, title, children }: SectionHeaderProps) {
  return (
    <div className="mb-12 flex flex-col gap-4 border-b border-line pb-6 sm:mb-16 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="mb-3 flex items-center gap-3 font-mono text-sm tracking-widest text-crimson-soft uppercase">
          <span>{index}</span>
          <span aria-hidden className="h-px w-8 bg-crimson" />
          <span>{label}</span>
        </p>
        <h2 className="font-serif text-4xl tracking-tight text-paper sm:text-5xl">{title}</h2>
      </div>
      {children}
    </div>
  );
}
