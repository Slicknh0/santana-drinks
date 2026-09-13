"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type CopyState = "idle" | "done" | "failed";

interface CopyButtonProps {
  text: string;
  labels: { idle: string; done: string; failed: string };
  idleIcon: ReactNode;
  doneIcon: ReactNode;
}

export function CopyButton({ text, labels, idleIcon, doneIcon }: CopyButtonProps) {
  const [state, setState] = useState<CopyState>("idle");
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
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
        {state === "done" ? doneIcon : idleIcon}
        {state === "done" ? labels.done : labels.idle}
      </button>
      <p role="status" className="text-sm text-champagne-bright empty:hidden">
        {state === "failed" ? labels.failed : ""}
      </p>
    </div>
  );
}
