"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";

export type ToastVariant = "default" | "success";

type ToastItem = { id: string; message: string; variant: ToastVariant };

type ToastContextValue = {
  showToast: (message: string, variant?: ToastVariant) => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const AUTO_DISMISS_MS = 3200;

export function ToastProvider({ children }: { children: ReactNode }) {
  const baseId = useId();
  const [toasts, setToasts] = useState<ToastItem[]>([]);

  const showToast = useCallback(
    (message: string, variant: ToastVariant = "default") => {
      const id = `${baseId}-${Date.now()}`;
      setToasts((prev) => [...prev, { id, message, variant }]);
    },
    [baseId],
  );

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div
        className="pointer-events-none fixed inset-x-0 bottom-6 z-[100] flex flex-col items-center gap-2 px-4"
        aria-live="polite"
      >
        {toasts.map((t) => (
          <ToastBubble
            key={t.id}
            item={t}
            variant={t.variant}
            onDismiss={() => dismiss(t.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

const TOAST_STYLES: Record<ToastVariant, string> = {
  default:
    "border-maple-gold/40 text-maple-gold shadow-[0_0_24px_rgba(212,168,75,0.2)]",
  success:
    "border-emerald-400/50 text-emerald-100 shadow-[0_0_24px_rgba(62,207,110,0.35)]",
};

function ToastBubble({
  item,
  variant,
  onDismiss,
}: {
  item: ToastItem;
  variant: ToastVariant;
  onDismiss: () => void;
}) {
  useEffect(() => {
    const t = window.setTimeout(onDismiss, AUTO_DISMISS_MS);
    return () => window.clearTimeout(t);
  }, [onDismiss]);

  return (
    <div
      className={`pointer-events-auto max-w-sm animate-[fadeIn_0.25s_ease-out] rounded-lg border bg-maple-panel/95 px-4 py-2.5 text-center text-xs backdrop-blur-sm ${TOAST_STYLES[variant]}`}
    >
      {item.message}
    </div>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return ctx;
}
