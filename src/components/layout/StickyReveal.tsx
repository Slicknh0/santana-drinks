"use client";

import { useEffect, useState, type ReactNode } from "react";

/** Mobile only: shows its children while no other CTA zone ([data-cta-zone]) is on screen. */
export function StickyReveal({ children }: { children: ReactNode }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const zones = document.querySelectorAll("[data-cta-zone]");
    const onScreen = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) =>
          entry.isIntersecting ? onScreen.add(entry.target) : onScreen.delete(entry.target),
        );
        setVisible(onScreen.size === 0);
      },
      { rootMargin: "0px 0px -12% 0px" },
    );
    zones.forEach((zone) => observer.observe(zone));
    return () => observer.disconnect();
  }, []);

  return (
    <div
      data-visible={visible}
      inert={!visible}
      className="sticky-cta fixed inset-x-0 bottom-0 z-20 translate-y-full bg-linear-to-t from-asphalt via-asphalt/90 to-transparent px-gutter pb-[max(1rem,env(safe-area-inset-bottom))] pt-8 transition-transform duration-700 ease-out-expo data-[visible=true]:translate-y-0 md:hidden"
    >
      {children}
    </div>
  );
}
