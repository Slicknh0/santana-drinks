import { CopyButton } from "@/components/ui/CopyButton";
import { Icon } from "@/components/ui/Icon";
import { content } from "@/data/content";
import { fullAddress } from "@/lib/maps";

export function CopyAddressButton() {
  return (
    <CopyButton
      text={fullAddress}
      labels={content.visit.copy}
      idleIcon={<Icon name="copy" className="size-[1.125rem] text-champagne" />}
      doneIcon={<Icon name="check" className="size-[1.125rem] text-champagne" />}
    />
  );
}
