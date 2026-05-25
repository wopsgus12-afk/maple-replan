const CHROME_STORE_URL = "https://chromewebstore.google.com/";

const FEATURES = [
  {
    icon: "⚡",
    title: "Real-time Ping Tracking",
    description: "Check server status before joining.",
  },
  {
    icon: "🤝",
    title: "Auto-Matchmaking",
    description: "Automatically connect to the cleanest region.",
  },
  {
    icon: "🔒",
    title: "100% Safe & Secure",
    description: "Fully compliant with Roblox terms.",
  },
] as const;

export function GgPassLanding() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0B0E14] text-white antialiased">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#10B981]/10 blur-[120px]" />
        <div className="absolute -right-24 top-1/3 h-[360px] w-[360px] rounded-full bg-[#10B981]/6 blur-[100px]" />
        <div className="absolute bottom-0 left-1/2 h-[280px] w-[560px] -translate-x-1/2 rounded-full bg-[#10B981]/5 blur-[90px]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
          }}
        />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pb-16 pt-10 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#10B981]/15 ring-1 ring-[#10B981]/30"
              aria-hidden
            >
              <svg
                viewBox="0 0 24 24"
                className="h-5 w-5 text-[#10B981]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
              </svg>
            </span>
            <span className="text-sm font-semibold tracking-[0.2em] text-white/90">
              GG-PASS
            </span>
          </div>
          <span className="hidden rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[11px] font-medium tracking-wide text-white/50 sm:inline">
            Roblox Ping Scanner
          </span>
        </header>

        <main className="flex flex-1 flex-col items-center justify-center py-16 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#10B981]/25 bg-[#10B981]/10 px-4 py-1.5 text-xs font-medium tracking-wide text-[#6EE7B7]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#10B981] opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#10B981]" />
              </span>
              Built for global Roblox players
            </p>

            <h1 className="text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[3.5rem]">
              No More High Ping.
              <br />
              <span className="bg-gradient-to-r from-white via-white to-[#10B981] bg-clip-text text-transparent">
                No More Lags.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/55 sm:text-lg sm:leading-relaxed">
              Find the Best Roblox Servers with 1-Click. Maximize your gaming
              experience with GG-PASS Ping Scanner.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#10B981] px-8 py-4 text-sm font-semibold text-[#0B0E14] shadow-[0_0_40px_rgba(16,185,129,0.35)] transition hover:bg-[#34D399] hover:shadow-[0_0_48px_rgba(16,185,129,0.45)] active:scale-[0.98]"
              >
                <ChromeIcon className="h-5 w-5 transition group-hover:scale-105" />
                Add to Chrome — It&apos;s Free
              </a>
            </div>

            <p className="mt-5 text-xs text-white/35">
              Free extension · No account required · Works in seconds
            </p>
          </div>

          <section
            className="mt-20 grid w-full max-w-4xl gap-4 sm:grid-cols-3 sm:gap-5"
            aria-label="Features"
          >
            {FEATURES.map((feature) => (
              <article
                key={feature.title}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.03] p-6 text-left backdrop-blur-sm transition hover:border-[#10B981]/25 hover:bg-white/[0.05]"
              >
                <span
                  className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#10B981]/10 text-xl ring-1 ring-[#10B981]/20 transition group-hover:bg-[#10B981]/15"
                  aria-hidden
                >
                  {feature.icon}
                </span>
                <h2 className="text-sm font-semibold text-white">{feature.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-white/45">
                  {feature.description}
                </p>
              </article>
            ))}
          </section>
        </main>

        <footer className="border-t border-white/[0.06] pt-8 text-center text-xs text-white/30">
          © {new Date().getFullYear()} GG-PASS · Unofficial fan utility · Not affiliated with Roblox
          Corp.
        </footer>
      </div>
    </div>
  );
}

function ChromeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
    </svg>
  );
}
