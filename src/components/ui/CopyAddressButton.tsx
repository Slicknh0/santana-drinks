"use client";

import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/ui/Icon";
import { content } from "@/data/content";
import { fullAddress } from "@/lib/maps";

type CopyState = "idle" | "done" | "failed";

export function CopyAddressButton() {
  const [state, setState] = useState<CopyState>("idle");
  const timer = useRef<number | undefined>(undefined);
  const { copy } = content.visit;

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setState("done");
    } catch {
      setState("failed");
    }
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setState("idle"), 3000);
  };

  return (
    <div className="flex flex-col gap-1">
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex min-h-11 items-center gap-2.5 self-start text-sm text-dust transition-colors duration-300 hover:text-chalk"
      >
        <Icon name={state === "done" ? "check" : "copy"} className="size-[1.125rem] text-champagne" />
        {state === "done" ? copy.done : copy.idle}
      </button>
      <p role="status" className="text-sm text-champagne-bright empty:hidden">
        {state === "failed" ? copy.failed : ""}
      </p>
    </div>
  );
}
