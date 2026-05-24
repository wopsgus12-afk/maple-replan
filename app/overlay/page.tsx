import { ReplanApp } from "@/components/ReplanApp";
import { OverlayBody } from "@/components/OverlayBody";
import { AdBanner } from "@/components/AdPlaceholder";

export default function OverlayPage() {
  return (
    <OverlayBody>
      <main className="electron-drag flex h-[230px] max-h-[230px] min-h-0 flex-col overflow-hidden bg-transparent p-1">
        <div className="min-h-0 flex-1 overflow-hidden">
          <ReplanApp compact />
        </div>
        <AdBanner variant="mini" className="mt-1 w-full shrink-0" />
      </main>
    </OverlayBody>
  );
}
