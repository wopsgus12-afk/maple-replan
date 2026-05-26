import { ReplanApp } from "@/components/ReplanApp";
import { OverlayBody } from "@/components/OverlayBody";
import { AdBanner } from "@/components/AdPlaceholder";

export default function OverlayPage() {
  return (
    <OverlayBody>
      <div className="flex h-[230px] max-h-[230px] min-h-0 flex-col overflow-hidden">
        <div
          className="electron-drag-handle h-3 shrink-0 rounded-t bg-maple-panel/30"
          aria-hidden
          title="창 이동"
        />
        <main className="electron-no-drag flex min-h-0 flex-1 flex-col overflow-hidden p-1">
          <div className="min-h-0 flex-1 overflow-hidden">
            <ReplanApp compact />
          </div>
          <AdBanner variant="mini" className="electron-no-drag mt-1 w-full shrink-0" />
        </main>
      </div>
    </OverlayBody>
  );
}
