"use client";

import type { MesoInputMode, ReplanSlot } from "@/lib/types";
import {
  FRAGMENT_GROUNDS,
  GEMSTONE_GROUNDS,
  HUNTING_GROUNDS,
  getGroundById,
  getGroundLabel,
  usesFragmentDrop,
} from "@/lib/huntingGrounds";
import {
  formatMesosInputLive,
  formatMesosKorean,
  parseMesosInput,
} from "@/lib/format";
import type { Locale } from "@/lib/locale";
import { ui } from "@/lib/uiCopy";

type Props = {
  groundId: string;
  mesoInputMode: MesoInputMode;
  mesosBeforeInput: string;
  mesosAfterInput: string;
  expAfterInput: string;
  fragmentCount: number;
  gemstoneCount: number;
  recordSlot: ReplanSlot;
  onGroundChange: (id: string) => void;
  onMesoInputModeChange: (mode: MesoInputMode) => void;
  onMesosBeforeChange: (v: string) => void;
  onMesosAfterChange: (v: string) => void;
  onExpAfterChange: (v: string) => void;
  onFragmentCountChange: (n: number) => void;
  onGemstoneCountChange: (n: number) => void;
  onRecordSlotChange: (slot: ReplanSlot) => void;
  onRecord: () => void;
  locale?: Locale;
};

const INPUT_CLASS =
  "w-full min-w-0 rounded border border-maple-border bg-maple-bg px-1.5 py-1 text-xs tabular-nums text-white focus:border-maple-gold focus:outline-none";

const MODE_BTN =
  "flex-1 rounded border px-1.5 py-1 text-[11px] leading-tight transition-colors";

export function HuntingForm({
  groundId,
  mesoInputMode,
  mesosBeforeInput,
  mesosAfterInput,
  expAfterInput,
  fragmentCount,
  gemstoneCount,
  recordSlot,
  onGroundChange,
  onMesoInputModeChange,
  onMesosBeforeChange,
  onMesosAfterChange,
  onExpAfterChange,
  onFragmentCountChange,
  onGemstoneCountChange,
  onRecordSlotChange,
  onRecord,
  locale = "ko",
}: Props) {
  const ground = getGroundById(groundId) ?? HUNTING_GROUNDS[0];
  const showFragment = usesFragmentDrop(ground.id);
  const copy = ui(locale);

  return (
    <section className="maple-card w-full min-w-0">
      <div className="flex flex-row flex-wrap items-end gap-2 gap-y-3">
        <label className="min-w-[7.5rem] flex-1 basis-[8rem]">
          <span className="mb-0.5 block text-xs text-maple-muted">
            {copy.formGround}
          </span>
          <select
            tabIndex={1}
            value={groundId}
            onChange={(e) => onGroundChange(e.target.value)}
            className={`${INPUT_CLASS} py-1.5 text-xs`}
          >
            <optgroup label={copy.formGroundGemGroup}>
              {GEMSTONE_GROUNDS.map((g) => (
                <option key={g.id} value={g.id}>
                  {getGroundLabel(g, locale)}
                </option>
              ))}
            </optgroup>
            <optgroup label={copy.formGroundFragmentGroup}>
              {FRAGMENT_GROUNDS.map((g) => (
                <option key={g.id} value={g.id}>
                  {getGroundLabel(g, locale)}
                </option>
              ))}
            </optgroup>
          </select>
        </label>

        <div className="flex min-w-[8.5rem] flex-col gap-0.5">
          <span className="text-xs text-maple-muted">{copy.formMesoModeLabel}</span>
          <div className="flex gap-1">
            <button
              type="button"
              tabIndex={2}
              onClick={() => onMesoInputModeChange("net")}
              className={`${MODE_BTN} ${
                mesoInputMode === "net"
                  ? "border-maple-gold bg-maple-gold/15 text-maple-gold"
                  : "border-maple-border text-maple-muted hover:border-maple-gold/50"
              }`}
            >
              {copy.formMesoModeNet}
            </button>
            <button
              type="button"
              tabIndex={3}
              onClick={() => onMesoInputModeChange("range")}
              className={`${MODE_BTN} ${
                mesoInputMode === "range"
                  ? "border-maple-gold bg-maple-gold/15 text-maple-gold"
                  : "border-maple-border text-maple-muted hover:border-maple-gold/50"
              }`}
            >
              {copy.formMesoModeRange}
            </button>
          </div>
        </div>

        {mesoInputMode === "net" ? (
          <MesosField
            shortLabel={copy.formMesoNet}
            tabIndex={4}
            value={mesosAfterInput}
            onChange={onMesosAfterChange}
            wider
          />
        ) : (
          <>
            <MesosField
              shortLabel={copy.formMesoBefore}
              tabIndex={4}
              value={mesosBeforeInput}
              onChange={onMesosBeforeChange}
            />
            <MesosField
              shortLabel={copy.formMesoAfter}
              tabIndex={5}
              value={mesosAfterInput}
              onChange={onMesosAfterChange}
            />
          </>
        )}

        <ExpField
          shortLabel={copy.formExpNet}
          tabIndex={6}
          value={expAfterInput}
          onChange={onExpAfterChange}
        />

        {showFragment ? (
          <ItemCounter
            label={copy.formFragment}
            itemCount={fragmentCount}
            onItemCountChange={onFragmentCountChange}
            addOneLabel={copy.formAddOne}
            addFiveLabel={copy.formAddFive}
            tabStart={7}
          />
        ) : (
          <ItemCounter
            label={copy.formGem}
            itemCount={gemstoneCount}
            onItemCountChange={onGemstoneCountChange}
            addOneLabel={copy.formAddOne}
            addFiveLabel={copy.formAddFive}
            tabStart={7}
          />
        )}

        <div className="flex min-w-[10rem] flex-col gap-1">
          <span className="text-xs text-maple-muted">{copy.slotSelectLabel}</span>
          <div className="flex gap-1">
            {([1, 2, 3] as ReplanSlot[]).map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => onRecordSlotChange(slot)}
                className={`flex-1 rounded border px-1.5 py-1 text-xs ${
                  recordSlot === slot
                    ? "border-maple-gold bg-maple-gold/15 text-maple-gold"
                    : "border-maple-border text-maple-muted hover:border-maple-gold/50"
                }`}
              >
                {copy.slotLabel(slot)}
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onRecord}
          className="shrink-0 rounded-lg border border-maple-accent bg-maple-accent/20 px-3 py-2 text-xs font-semibold text-maple-accent hover:bg-maple-accent/30 sm:text-sm"
        >
          {copy.formRecordCta}
        </button>
      </div>
    </section>
  );
}

function MesosField({
  shortLabel,
  tabIndex,
  value,
  onChange,
  wider = false,
}: {
  shortLabel: string;
  tabIndex: number;
  value: string;
  onChange: (v: string) => void;
  wider?: boolean;
}) {
  const mesosNumeric = parseMesosInput(value);

  return (
    <label
      className={
        wider
          ? "w-[7.5rem] min-w-[6rem] shrink-0 sm:w-[8.5rem]"
          : "w-[5.5rem] min-w-[4.5rem] shrink-0 sm:w-[6rem]"
      }
    >
      <span className="mb-0.5 block truncate text-xs text-maple-muted">
        {shortLabel}
      </span>
      <input
        type="text"
        inputMode="numeric"
        tabIndex={tabIndex}
        value={value}
        onChange={(e) => onChange(formatMesosInputLive(e.target.value))}
        placeholder="0"
        className={INPUT_CLASS}
      />
      {value.trim() !== "" && (
        <p className="mt-0.5 truncate text-[9px] leading-tight text-maple-muted">
          {formatMesosKorean(mesosNumeric)}
        </p>
      )}
    </label>
  );
}

function ExpField({
  shortLabel,
  tabIndex,
  value,
  onChange,
}: {
  shortLabel: string;
  tabIndex: number;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <label className="w-[5.5rem] min-w-[4.75rem] shrink-0 sm:w-[6.25rem]">
      <span className="mb-0.5 block truncate text-xs text-maple-muted">
        {shortLabel}
      </span>
      <input
        type="text"
        inputMode="decimal"
        tabIndex={tabIndex}
        value={value}
        onChange={(e) => onChange(e.target.value.replace(/[^\d.]/g, ""))}
        placeholder="0"
        className={INPUT_CLASS}
      />
    </label>
  );
}

function ItemCounter({
  label,
  itemCount,
  onItemCountChange,
  addOneLabel,
  addFiveLabel,
  tabStart,
}: {
  label: string;
  itemCount: number;
  onItemCountChange: (n: number) => void;
  addOneLabel: string;
  addFiveLabel: string;
  tabStart: number;
}) {
  return (
    <div className="shrink-0">
      <span className="mb-0.5 block text-xs text-maple-muted">{label}</span>
      <div className="flex items-center gap-0.5">
        <input
          type="number"
          min={0}
          tabIndex={tabStart}
          value={itemCount}
          onChange={(e) =>
            onItemCountChange(Math.max(0, parseInt(e.target.value, 10) || 0))
          }
          className="w-12 rounded border border-maple-border bg-maple-bg px-1 py-1 text-center text-xs text-white focus:border-maple-gold focus:outline-none"
        />
        <button
          type="button"
          tabIndex={tabStart + 1}
          aria-label={addOneLabel}
          onClick={() => onItemCountChange(itemCount + 1)}
          className="h-7 min-w-[1.75rem] rounded border border-maple-border px-1 text-[11px] font-medium text-maple-gold hover:bg-maple-border/30"
        >
          {addOneLabel}
        </button>
        <button
          type="button"
          tabIndex={tabStart + 2}
          aria-label={addFiveLabel}
          onClick={() => onItemCountChange(itemCount + 5)}
          className="h-7 min-w-[1.75rem] rounded border border-maple-border px-1 text-[11px] font-medium text-maple-gold hover:bg-maple-border/30"
        >
          {addFiveLabel}
        </button>
      </div>
    </div>
  );
}
