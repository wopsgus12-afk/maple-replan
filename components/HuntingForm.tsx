"use client";

import type { ReplanSlot } from "@/lib/types";
import {
  FRAGMENT_GROUNDS,
  GEMSTONE_GROUNDS,
  HUNTING_GROUNDS,
  getGroundById,
} from "@/lib/huntingGrounds";
import {
  formatMesosInputLive,
  formatMesosKorean,
  parseMesosInput,
} from "@/lib/format";

type Props = {
  groundId: string;
  mesosBeforeInput: string;
  mesosAfterInput: string;
  expBeforeInput: string;
  expAfterInput: string;
  fragmentCount: number;
  gemstoneCount: number;
  recordSlot: ReplanSlot;
  onGroundChange: (id: string) => void;
  onMesosBeforeChange: (v: string) => void;
  onMesosAfterChange: (v: string) => void;
  onExpBeforeChange: (v: string) => void;
  onExpAfterChange: (v: string) => void;
  onFragmentCountChange: (n: number) => void;
  onGemstoneCountChange: (n: number) => void;
  onRecordSlotChange: (slot: ReplanSlot) => void;
  onRecord: () => void;
};

const INPUT_CLASS =
  "w-full min-w-0 rounded border border-maple-border bg-maple-bg px-1.5 py-1 text-xs tabular-nums text-white focus:border-maple-gold focus:outline-none";

export function HuntingForm({
  groundId,
  mesosBeforeInput,
  mesosAfterInput,
  expBeforeInput,
  expAfterInput,
  fragmentCount,
  gemstoneCount,
  recordSlot,
  onGroundChange,
  onMesosBeforeChange,
  onMesosAfterChange,
  onExpBeforeChange,
  onExpAfterChange,
  onFragmentCountChange,
  onGemstoneCountChange,
  onRecordSlotChange,
  onRecord,
}: Props) {
  const ground = getGroundById(groundId) ?? HUNTING_GROUNDS[0];
  void ground;

  return (
    <section className="maple-card w-full min-w-0">
      <div className="flex flex-row flex-wrap items-end gap-2 gap-y-3">
        <label className="min-w-[7.5rem] flex-1 basis-[8rem]">
          <span className="mb-0.5 block text-xs text-maple-muted">사냥터</span>
          <select
            tabIndex={1}
            value={groundId}
            onChange={(e) => onGroundChange(e.target.value)}
            className={`${INPUT_CLASS} py-1.5 text-xs`}
          >
            <optgroup label="260 미만 · 코어 젬스톤">
              {GEMSTONE_GROUNDS.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.label}
                </option>
              ))}
            </optgroup>
            <optgroup label="260 이상 · 솔 에르다 조각">
              {FRAGMENT_GROUNDS.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.label}
                </option>
              ))}
            </optgroup>
          </select>
        </label>

        <MesosField
          shortLabel="시작 메소"
          tabIndex={2}
          value={mesosBeforeInput}
          onChange={onMesosBeforeChange}
        />
        <MesosField
          shortLabel="종료 메소"
          tabIndex={3}
          value={mesosAfterInput}
          onChange={onMesosAfterChange}
        />

        <ExpField
          shortLabel="시작 EXP %"
          tabIndex={4}
          value={expBeforeInput}
          onChange={onExpBeforeChange}
        />
        <ExpField
          shortLabel="종료 EXP %"
          tabIndex={5}
          value={expAfterInput}
          onChange={onExpAfterChange}
        />

        <ItemCounter
          label="솔 에르다"
          itemCount={fragmentCount}
          onItemCountChange={onFragmentCountChange}
          tabStart={6}
        />
        <ItemCounter
          label="코어 젬"
          itemCount={gemstoneCount}
          onItemCountChange={onGemstoneCountChange}
          tabStart={9}
        />

        <div className="flex min-w-[10rem] flex-col gap-1">
          <span className="text-xs text-maple-muted">재획 차수</span>
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
                {slot}차
              </button>
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={onRecord}
          className="shrink-0 rounded-lg border border-maple-accent bg-maple-accent/20 px-3 py-2 text-xs font-semibold text-maple-accent hover:bg-maple-accent/30 sm:text-sm"
        >
          정산 결과 확인
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
}: {
  shortLabel: string;
  tabIndex: number;
  value: string;
  onChange: (v: string) => void;
}) {
  const mesosNumeric = parseMesosInput(value);

  return (
    <label className="w-[5.5rem] min-w-[4.5rem] shrink-0 sm:w-[6rem]">
      <span className="mb-0.5 block truncate text-xs text-maple-muted">{shortLabel}</span>
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
    <label className="w-[4.25rem] min-w-[3.75rem] shrink-0">
      <span className="mb-0.5 block truncate text-xs text-maple-muted">{shortLabel}</span>
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
  tabStart,
}: {
  label: string;
  itemCount: number;
  onItemCountChange: (n: number) => void;
  tabStart: number;
}) {
  return (
    <div className="shrink-0">
      <span className="mb-0.5 block text-xs text-maple-muted">{label}</span>
      <div className="flex items-center gap-0.5">
        <button
          type="button"
          tabIndex={tabStart}
          aria-label="감소"
          onClick={() => onItemCountChange(Math.max(0, itemCount - 1))}
          className="h-7 w-7 rounded border border-maple-border text-sm text-maple-gold hover:bg-maple-border/30"
        >
          −
        </button>
        <input
          type="number"
          min={0}
          tabIndex={tabStart + 1}
          value={itemCount}
          onChange={(e) =>
            onItemCountChange(Math.max(0, parseInt(e.target.value, 10) || 0))
          }
          className="w-12 rounded border border-maple-border bg-maple-bg px-1 py-1 text-center text-xs text-white focus:border-maple-gold focus:outline-none"
        />
        <button
          type="button"
          tabIndex={tabStart + 2}
          aria-label="증가"
          onClick={() => onItemCountChange(itemCount + 1)}
          className="h-7 w-7 rounded border border-maple-border text-sm text-maple-gold hover:bg-maple-border/30"
        >
          +
        </button>
      </div>
    </div>
  );
}
