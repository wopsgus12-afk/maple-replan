"use client";

import { useEffect, useId, useState } from "react";
import {
  FRAGMENT_GROUNDS,
  GEMSTONE_GROUNDS,
  getGroundById,
  getGroundLabel,
} from "@/lib/huntingGrounds";
import {
  formatMesosInputLive,
  formatMesosKorean,
  parseMesosInput,
} from "@/lib/format";
import type { Locale } from "@/lib/locale";
import { ui } from "@/lib/uiCopy";
import {
  type ServerMode,
  type UserPreset,
  defaultUserPreset,
} from "@/lib/userPreset";

type Props = {
  open: boolean;
  locale: Locale;
  initial: UserPreset;
  onClose: () => void;
  onSave: (preset: UserPreset) => void;
  onResetPreset: () => void;
};

export function PresetSettingsModal({
  open,
  locale,
  initial,
  onClose,
  onSave,
  onResetPreset,
}: Props) {
  const t = ui(locale);
  const titleId = useId();
  const [draft, setDraft] = useState<UserPreset>(initial);

  useEffect(() => {
    if (open) setDraft(initial);
  }, [open, initial]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const setServer = (serverMode: ServerMode) => {
    setDraft((d) => ({ ...d, serverMode }));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-4 sm:items-center"
      role="presentation"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-xl border border-maple-border bg-maple-panel p-4 shadow-maple sm:p-5"
      >
        <div className="mb-4 flex items-start justify-between gap-3">
          <h2 id={titleId} className="text-base font-bold text-maple-gold">
            {t.presetTitle}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded border border-maple-border px-2 py-1 text-xs text-maple-muted hover:text-maple-gold"
          >
            {t.presetClose}
          </button>
        </div>

        <fieldset className="mb-4">
          <legend className="mb-2 text-xs font-medium text-maple-muted">
            {t.presetServerLabel}
          </legend>
          <div className="grid grid-cols-2 gap-2">
            <ServerToggle
              active={draft.serverMode === "kms"}
              label={t.presetKms}
              onClick={() => setServer("kms")}
            />
            <ServerToggle
              active={draft.serverMode === "gms_heroic"}
              label={t.presetHeroic}
              onClick={() => setServer("gms_heroic")}
            />
          </div>
        </fieldset>

        {draft.serverMode === "kms" ? (
          <div className="mb-4 space-y-3">
            <PriceField
              label={t.presetFragmentPrice}
              value={draft.fragmentPrice}
              onChange={(fragmentPrice) =>
                setDraft((d) => ({ ...d, fragmentPrice }))
              }
            />
            <PriceField
              label={t.presetGemPrice}
              value={draft.gemPrice}
              onChange={(gemPrice) => setDraft((d) => ({ ...d, gemPrice }))}
            />
          </div>
        ) : (
          <p className="mb-4 rounded border border-maple-border/70 bg-maple-bg/60 px-3 py-2.5 text-xs leading-relaxed text-maple-muted">
            {t.presetHeroicHint}
          </p>
        )}

        <label className="mb-5 block">
          <span className="mb-1 block text-xs text-maple-muted">{t.presetGround}</span>
          <select
            value={draft.groundId}
            onChange={(e) => {
              const groundId = e.target.value;
              if (!getGroundById(groundId)) return;
              setDraft((d) => ({ ...d, groundId }));
            }}
            className="w-full rounded border border-maple-border bg-maple-bg px-3 py-2.5 text-sm text-white focus:border-maple-gold focus:outline-none"
          >
            <optgroup label={t.formGroundGemGroup}>
              {GEMSTONE_GROUNDS.map((g) => (
                <option key={g.id} value={g.id}>
                  {getGroundLabel(g, locale)}
                </option>
              ))}
            </optgroup>
            <optgroup label={t.formGroundFragmentGroup}>
              {FRAGMENT_GROUNDS.map((g) => (
                <option key={g.id} value={g.id}>
                  {getGroundLabel(g, locale)}
                </option>
              ))}
            </optgroup>
          </select>
        </label>

        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            onClick={() => onSave(draft)}
            className="flex-1 rounded-lg border border-maple-gold/60 bg-maple-gold/15 px-3 py-2.5 text-sm font-medium text-maple-gold hover:bg-maple-gold/25"
          >
            {t.presetSave}
          </button>
          <button
            type="button"
            onClick={() => {
              const defaults = defaultUserPreset();
              setDraft(defaults);
              onResetPreset();
            }}
            className="flex-1 rounded-lg border border-maple-border px-3 py-2.5 text-sm text-maple-muted hover:border-maple-gold/40 hover:text-maple-gold"
          >
            {t.presetReset}
          </button>
        </div>
      </div>
    </div>
  );
}

function ServerToggle({
  active,
  label,
  onClick,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={
        active
          ? "rounded-lg border border-maple-gold bg-maple-gold/15 px-2 py-2.5 text-xs font-semibold text-maple-gold"
          : "rounded-lg border border-maple-border px-2 py-2.5 text-xs text-maple-muted hover:border-maple-gold/40 hover:text-maple-gold"
      }
    >
      {label}
    </button>
  );
}

function PriceField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
}) {
  const display = formatMesosInputLive(String(value || ""));
  return (
    <label className="block">
      <span className="text-xs text-maple-muted">{label}</span>
      <input
        type="text"
        inputMode="numeric"
        value={display}
        onChange={(e) =>
          onChange(parseMesosInput(formatMesosInputLive(e.target.value)))
        }
        className="mt-1 w-full rounded border border-maple-border bg-maple-bg px-3 py-2.5 text-sm text-white focus:border-maple-gold focus:outline-none"
      />
      <p className="mt-1 text-[11px] text-maple-muted">{formatMesosKorean(value)}</p>
    </label>
  );
}
