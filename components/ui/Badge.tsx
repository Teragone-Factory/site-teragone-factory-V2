type BadgeProps = {
  label: string
}

export function Badge({ label }: BadgeProps) {
  return (
    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-zinc-300">
      {label}
    </span>
  )
}
