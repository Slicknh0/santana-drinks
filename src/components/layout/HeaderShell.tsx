"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";

interface NavItem {
  label: string;
  href: string;
}

interface HeaderShellProps {
  logo: ReactNode;
  homeLabel: string;
  navigation: ReadonlyArray<NavItem>;
  menuLabels: { open: string; close: string; label: string };
  desktopCta: ReactNode;
  menuFooter: ReactNode;
}

function lockPage(locked: boolean) {
  const root = document.documentElement;
  root.style.overflow = locked ? "hidden" : "";
  root.toggleAttribute("data-menu-open", locked);
  document.querySelectorAll<HTMLElement>("[data-menu-inert]").forEach((region) => {
    region.inert = locked;
  });
}

/** Client half of the header: scroll state and mobile menu. Everything visual arrives pre-rendered as props. */
export function HeaderShell({
  logo,
  homeLabel,
  navigation,
  menuLabels,
  desktopCta,
  menuFooter,
}: HeaderShellProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const sentinel = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const target = sentinel.current;
    if (!target) return;
    const observer = new IntersectionObserver(([entry]) => setScrolled(!entry.isIntersecting));
    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    lockPage(true);
    firstLink.current?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      toggle.current?.focus();
    };
    const desktop = window.matchMedia("(min-width: 48rem)");
    const onResize = () => desktop.matches && setOpen(false);

    window.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onResize);
    return () => {
      lockPage(false);
      window.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

  // Unlock before scrolling: an inert, overflow-locked page cannot receive the anchor jump.
  const goTo = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    lockPage(false);
    setOpen(false);
    document.querySelector(href)?.scrollIntoView();
    history.replaceState(null, "", href);
  };

  return (
    <>
      <div
        ref={sentinel}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-20"
      />
      <header
        data-scrolled={scrolled || open}
        className="fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow,backdrop-filter] duration-500 ease-out-expo data-[scrolled=true]:bg-asphalt/85 data-[scrolled=true]:shadow-[inset_0_-1px_0_var(--color-line)] data-[scrolled=true]:backdrop-blur-md"
      >
        <div className="mx-auto flex h-[4.5rem] max-w-page items-center justify-between gap-6 px-gutter">
          <a href="#inicio" className="-m-2 p-2" aria-label={homeLabel}>
            {logo}
          </a>

          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex items-center gap-9">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block py-2 text-sm text-dust transition-colors duration-300 hover:text-chalk"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li>{desktopCta}</li>
            </ul>
          </nav>

          <button
            ref={toggle}
            type="button"
            className="relative -mr-3 grid size-12 place-items-center md:hidden"
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? menuLabels.close : menuLabels.open}
            onClick={() => setOpen((value) => !value)}
          >
            <span
              className="burger-line absolute h-px w-6 bg-chalk"
              style={{ transform: open ? "rotate(45deg)" : "translateY(-4px)" }}
            />
            <span
              className="burger-line absolute h-px w-6 bg-chalk"
              style={{ transform: open ? "rotate(-45deg)" : "translateY(4px)" }}
            />
          </button>
        </div>
      </header>

      <div
        id="menu-mobile"
        data-open={open}
        className="menu-panel fixed inset-0 z-30 flex flex-col bg-asphalt px-gutter pb-[max(2rem,env(safe-area-inset-bottom))] pt-28 md:hidden"
      >
        <nav aria-label={menuLabels.label}>
          <ul className="flex flex-col gap-1">
            {navigation.map((item, index) => (
              <li key={item.href} className="menu-item" style={{ "--i": index } as CSSProperties}>
                <a
                  ref={index === 0 ? firstLink : undefined}
                  href={item.href}
                  onClick={(event) => goTo(event, item.href)}
                  className="display block py-2 text-[3.25rem] leading-none text-chalk"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className="menu-item mt-auto flex flex-col gap-6"
          style={{ "--i": navigation.length } as CSSProperties}
        >
          {menuFooter}
        </div>
      </div>
    </>
  );
}
