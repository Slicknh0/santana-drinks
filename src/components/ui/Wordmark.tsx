interface WordmarkProps {
  variant?: "compact" | "hero";
}

/** "Santana" em serifa de alto contraste + plaqueta "Drinks": a marca provisória da casa. */
export function Wordmark({ variant = "compact" }: WordmarkProps) {
  if (variant === "hero") {
    return (
      <span className="flex flex-col items-start gap-4 md:flex-row md:items-end md:gap-7">
        <span className="display block text-mega text-chalk">Santana</span>{" "}
        <span className="brand-plate text-[clamp(1rem,0.55rem+1.5vw,1.75rem)] md:mb-[0.55em]">
          Drinks
        </span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="display text-[1.75rem] leading-none text-chalk">Santana</span>{" "}
      <span className="brand-plate text-[0.625rem]">Drinks</span>
    </span>
  );
}
