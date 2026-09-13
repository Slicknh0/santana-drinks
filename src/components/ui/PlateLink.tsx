import type { ReactNode } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";

interface PlateLinkProps {
  href: string;
  children: ReactNode;
  variant?: "solid" | "ghost";
  icon?: IconName;
  external?: boolean;
  className?: string;
}

export function PlateLink({
  href,
  children,
  variant = "solid",
  icon,
  external = false,
  className = "",
}: PlateLinkProps) {
  return (
    <a
      href={href}
      className={`plate plate-${variant} ${className}`}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span>
        {children}
        {external && <span className="sr-only"> (abre em nova aba)</span>}
      </span>
      {icon && (
        <span className="plate-icon">
          <Icon name={icon} className="size-[1.125rem]" />
        </span>
      )}
    </a>
  );
}
