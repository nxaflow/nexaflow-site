import NexaChatWidget from "@/components/NexaChatWidget";
import PhoneMockupDemo from "@/components/PhoneMockupDemo";
import DemoRequestForm from "@/components/DemoRequestForm";
import RevealOnScroll from "@/components/RevealOnScroll";
import HeroBackgroundVideo from "@/components/HeroBackgroundVideo";

function IconShield({ className = "" }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function IconPhone({ className = "" }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.86.3 1.7.54 2.5a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.58-1.06a2 2 0 0 1 2.11-.45c.8.24 1.64.42 2.5.54A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function IconClock({ className = "" }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  );
}

function IconDatabase({ className = "" }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3" />
    </svg>
  );
}

function IconFlow({ className = "" }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M7 7h10v10H7z" />
      <path d="M4 4h4v4H4z" />
      <path d="M16 4h4v4h-4z" />
      <path d="M4 16h4v4H4z" />
      <path d="M16 16h4v4h-4z" />
    </svg>
  );
}

function IconSpark({ className = "" }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 2l1.2 4.2L17 7.4l-3.8 1.2L12 13l-1.2-4.4L7 7.4l3.8-1.2L12 2Z" />
      <path d="M19 13l.7 2.4 2.3.7-2.3.7L19 19l-.7-2.2-2.3-.7 2.3-.7L19 13Z" />
    </svg>
  );
}

function IconMail({ className = "" }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16v16H4z" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function IconChat({ className = "" }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M8 10.5h8M8 14h5" />
      <path d="M6 20 8.2 16.9A8 8 0 1 1 20 12a8 8 0 0 1-8 8H6Z" />
    </svg>
  );
}

function IconBolt({ className = "" }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M13 2 3 14h7l-1 8 12-14h-7l-1-6Z" />
    </svg>
  );
}

function IconInbox({ className = "" }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 12h-5l-2 3H9l-2-3H2" />
      <path d="M5.5 5h13A1.5 1.5 0 0 1 20 6.5v11A1.5 1.5 0 0 1 18.5 19h-13A1.5 1.5 0 0 1 4 17.5v-11A1.5 1.5 0 0 1 5.5 5Z" />
    </svg>
  );
}

function IconCheckCircle({ className = "" }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

function SectionKicker({ text, hero = false }) {
  return (
    <div
      className={
        hero
          ? "inline-flex items-center gap-2 rounded-full border border-[#10b981] bg-[#022c22] px-4 py-2 text-sm font-semibold text-[#10b981] shadow-sm"
          : "inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm backdrop-blur"
      }
    >
      <span
        className={
          hero
            ? "h-2 w-2 rounded-full bg-[#10b981]"
            : "h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]"
        }
      />
      {text}
    </div>
  );
}

function SectionHeading({ title, description }) {
  return (
    <div className="max-w-2xl">
      <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
        {title}
      </h2>
      {typeof description === "string" ? (
        <p className="mt-3 text-lg leading-7 text-slate-600">{description}</p>
      ) : (
        <div className="mt-3 space-y-4 text-base leading-7 text-slate-600">
          {description}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen w-full max-w-none overflow-x-hidden text-slate-900">
      <section className="relative isolate w-full overflow-hidden pt-12 pb-16 lg:pt-16">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div className="absolute inset-0 overflow-hidden">
            <HeroBackgroundVideo />
          </div>
          <div className="nf-hero-video-tint" />
          <div className="nf-hero-bg-animated" />
          <div className="nf-hero-bottom-fade" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6">
        <header className="relative z-10 flex items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-[0_18px_40px_-18px_rgba(16,185,129,0.65)]">
              <IconSpark className="h-5 w-5" />
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-[#ffffff]">NexaFlow</div>
              <div className="text-xs text-[#94a3b8]">AI answering • CRM pipeline</div>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-[#cbd5f5] md:flex">
            <a className="transition hover:text-[#ffffff]" href="#problem">
              Problem
            </a>
            <a className="transition hover:text-[#ffffff]" href="#features">
              Features
            </a>
            <a className="transition hover:text-[#ffffff]" href="#crm">
              CRM
            </a>
            <a className="transition hover:text-[#ffffff]" href="#pipeline">
              Pipeline
            </a>
            <a className="transition hover:text-[#ffffff]" href="#channels">
              Channels
            </a>
            <a
              className="transition hover:text-[#ffffff]"
              href="#morning-summary"
            >
              Morning summary
            </a>
            <a className="transition hover:text-[#ffffff]" href="#about">
              About
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#cta"
              className="nf-btn-motion hidden rounded-2xl border border-white/20 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur hover:bg-white/15 md:inline-flex"
            >
              See how it works
            </a>
            <a
              href="#cta"
              className="nf-btn-motion inline-flex items-center justify-center rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-900/40 hover:-translate-y-0.5 hover:bg-emerald-400"
            >
              Book a Free Demo
            </a>
          </div>
        </header>

        <div className="relative z-10 mt-10 grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionKicker hero text="Live now — AI responding to leads" />

            <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
              <span className="text-[#ffffff]">Every Missed Call</span>
              <br />
              <span className="text-[#10b981]">Is Money Lost.</span>
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-[#cbd5f5] md:text-4xl">
              We make sure someone always answers.
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-[#94a3b8]">
              NexaFlow answers missed calls instantly, captures lead details, and
              books appointments — even when you can&apos;t pick up.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <a
                href="#cta"
                className="nf-btn-motion rounded-2xl bg-emerald-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_22px_60px_-35px_rgba(16,185,129,0.55)] hover:-translate-y-0.5 hover:bg-emerald-400"
              >
                Book a Free Demo
              </a>
              <a
                href="#problem"
                className="nf-btn-motion rounded-2xl border border-white/25 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur hover:-translate-y-0.5 hover:bg-white/15"
              >
                See How It Works
              </a>

              <div className="flex flex-wrap items-center gap-2 text-sm text-[#94a3b8]">
                {[
                  { label: "Synced", tone: "emerald" },
                  { label: "24/7", tone: "slate" },
                  { label: "< 10 sec", tone: "sky" },
                ].map((t) => (
                  <span
                    key={t.label}
                    className={[
                      "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold shadow-sm",
                      t.tone === "emerald"
                        ? "border-[#10b981] bg-[#022c22] text-[#cbd5f5]"
                        : t.tone === "sky"
                          ? "border-[#38bdf8] bg-[#0f172a] text-[#cbd5f5]"
                          : "border-[#64748b] bg-[#0f172a] text-[#cbd5f5]",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "h-2 w-2 rounded-full",
                        t.tone === "emerald"
                          ? "bg-[#10b981]"
                          : t.tone === "sky"
                            ? "bg-[#38bdf8]"
                            : "bg-[#94a3b8]",
                      ].join(" ")}
                    />
                    {t.label}
                  </span>
                ))}
              </div>
            </div>

            <p className="mt-4 text-sm text-[#94a3b8]">
              Takes 30 seconds. No commitment.
            </p>
          </div>

          <div className="relative rounded-[32px] border border-emerald-100 bg-white/70 p-6 shadow-[0_34px_90px_-45px_rgba(16,185,129,0.45)] backdrop-blur">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500">
                  Live product demo
                </p>
                <h3 className="text-2xl font-bold text-slate-950">
                  AI after-hours agent
                </h3>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1 text-sm font-semibold text-emerald-700">
                <IconPhone className="h-4 w-4" />
                Responding
              </span>
            </div>

            <PhoneMockupDemo />

            <div className="pointer-events-none absolute right-3 top-3 hidden md:block">
              <div className="w-[210px] rounded-2xl border border-slate-200 bg-white/55 p-3 shadow-lg backdrop-blur animate-[nf-float-in_520ms_ease-out_both,nf-card-float_5.4s_ease-in-out_infinite]">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-xs font-semibold text-slate-600">Live</div>
                  <div className="text-xs font-semibold text-slate-500">Processing</div>
                </div>
                <div className="mt-2 text-sm font-semibold text-slate-950">
                  Callback queued
                </div>
                <div className="mt-1 text-xs leading-5 text-slate-600">
                  Assigned to on-call tech • Next: confirm window
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute left-3 bottom-3 hidden md:block">
              <div className="w-[210px] rounded-2xl border border-slate-200 bg-white/55 p-3 shadow-lg backdrop-blur animate-[nf-float-in_620ms_ease-out_both,nf-card-float_6.1s_ease-in-out_infinite]">
                <div className="flex items-center justify-between gap-3">
                  <div className="text-sm font-semibold text-slate-950">
                    Follow-up sent
                  </div>
                  <div className="text-xs font-semibold text-slate-500">1m ago</div>
                </div>
                <div className="mt-1 text-xs leading-5 text-slate-600">
                  Confirmation delivered • Waiting on reply
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      <RevealOnScroll>
      <section id="problem" className="relative mx-auto max-w-7xl px-6 pb-16 pt-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <SectionHeading
            title="The hidden cost of missed calls"
            description="Speed wins. When prospects don’t get an answer, your pipeline quietly leaks. NexaFlow responds instantly, captures the details, and gets the next step booked."
          />

          <div className="mt-2 flex items-start md:mt-0">
            <div className="rounded-3xl border border-slate-100 bg-white/60 p-6 shadow-sm backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-[0_18px_40px_-18px_rgba(16,185,129,0.65)]">
                  <IconFlow className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-950">
                    Built for real teams
                  </div>
                  <div className="mt-1 text-sm leading-6 text-slate-600">
                    Consistent answers, structured lead data, and fewer manual
                    follow-ups.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="group rounded-3xl border border-slate-100 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_30px_70px_-45px_rgba(15,23,42,0.45)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
              <IconPhone className="h-5 w-5" />
            </div>
            <div className="nf-badge-motion inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
              24/7 coverage
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-950">
              Missed calls become lost leads
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              When nobody answers, buyers move on. NexaFlow is always ready to
              respond with intent-first questions.
            </p>
          </div>

          <div className="group rounded-3xl border border-slate-100 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_30px_70px_-45px_rgba(15,23,42,0.45)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
              <IconClock className="h-5 w-5" />
            </div>
            <div className="nf-badge-motion inline-flex rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs font-semibold text-sky-700">
              Auto-reply
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-950">
              Follow-ups get delayed
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Replies without structure lose context. NexaFlow captures details
              and hands them off immediately.
            </p>
          </div>

          <div className="group rounded-3xl border border-slate-100 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_30px_70px_-45px_rgba(15,23,42,0.45)]">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
              <IconDatabase className="h-5 w-5" />
            </div>
            <div className="nf-badge-motion inline-flex rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
              CRM sync
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-950">
              CRM data stays fragmented
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Leads shouldn&apos;t live in spreadsheets. NexaFlow routes clean,
              structured updates to your CRM.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            {
              label: "Inbound (24h)",
              value: "48",
              sub: "Missed calls captured",
              barClass: "bg-gradient-to-r from-emerald-500 to-emerald-300/40",
            },
            {
              label: "Avg. first response",
              value: "6s",
              sub: "AI acknowledgment",
              barClass: "bg-gradient-to-r from-sky-500 to-sky-300/40",
            },
            {
              label: "CRM sync health",
              value: "100%",
              sub: "Last check 1m ago",
              barClass: "bg-gradient-to-r from-indigo-500 to-indigo-300/40",
            },
          ].map((m) => (
            <div
              key={m.label}
              className="nf-card-lift rounded-2xl border border-slate-100 bg-white/90 p-5 shadow-sm"
            >
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                {m.label}
              </div>
              <div className="mt-2 text-3xl font-bold tabular-nums text-slate-950">
                {m.value}
              </div>
              <div className="mt-1 text-xs text-slate-600">{m.sub}</div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div className={`h-full w-4/5 rounded-full ${m.barClass}`} />
              </div>
            </div>
          ))}
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll>
      <section id="features" className="relative mx-auto max-w-7xl px-6 pb-16 pt-0">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-0 overflow-hidden rounded-[48px]"
        >
          <div className="nf-features-blob-a" aria-hidden="true" />
          <div className="nf-features-blob-b" aria-hidden="true" />
        </div>
        <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-stretch">
          <div className="nf-card-lift rounded-[36px] border border-slate-100 bg-white/70 p-8 shadow-sm backdrop-blur hover:shadow-[0_28px_70px_-50px_rgba(15,23,42,0.35)]">
            <div className="flex items-start justify-between gap-6">
              <div>
                <div className="nf-badge-motion inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  <IconBolt className="h-4 w-4" />
                  Instant response
                </div>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-950">
                  Every missed call gets an answer in seconds
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">
                  NexaFlow follows up automatically, asks qualifying questions, and routes clean lead data into your workflow.
                </p>
              </div>
              <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm sm:flex">
                <IconPhone className="h-5 w-5" />
              </div>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="nf-card-lift rounded-3xl border border-slate-100 bg-white/70 p-5 shadow-sm hover:shadow-[0_24px_60px_-45px_rgba(15,23,42,0.5)]">
                <div className="text-sm font-semibold text-slate-950">Qualification</div>
                <div className="mt-1 text-sm leading-6 text-slate-600">
                  Service type, location, urgency, budget—captured consistently.
                </div>
              </div>
              <div className="nf-card-lift rounded-3xl border border-slate-100 bg-white/70 p-5 shadow-sm hover:shadow-[0_24px_60px_-45px_rgba(15,23,42,0.5)]">
                <div className="text-sm font-semibold text-slate-950">Routing</div>
                <div className="mt-1 text-sm leading-6 text-slate-600">
                  Assigns to the right owner with a clear next step.
                </div>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[36px] border border-slate-900 bg-slate-950 p-8 shadow-[0_40px_120px_-70px_rgba(2,6,23,0.85)]">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.22),transparent_55%),radial-gradient(circle_at_bottom,rgba(56,189,248,0.14),transparent_55%)]"
            />
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80">
                <IconSpark className="h-4 w-4" />
                AI after-hours agent
              </div>
              <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">
                Your front desk keeps working after 5pm
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/70">
                Capture intent overnight and wake up to a prioritized list of leads, callbacks, and booked next steps.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]">
                  <div className="text-sm font-semibold text-white">Always on</div>
                  <div className="mt-1 text-sm leading-6 text-white/70">
                    Handles missed calls and chat inquiries while you&apos;re off the clock.
                  </div>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]">
                  <div className="text-sm font-semibold text-white">Clean handoff</div>
                  <div className="mt-1 text-sm leading-6 text-white/70">
                    Summarizes what was said, what was promised, and what&apos;s next.
                  </div>
                </div>
              </div>

              <div className="mt-7 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white">
                    <IconShield className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Premium UX, serious reliability
                    </div>
                    <div className="mt-1 text-sm leading-6 text-white/70">
                      Designed for service businesses that can&apos;t afford to miss calls.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll>
      <section
        id="crm"
        className="relative mx-auto max-w-7xl bg-[linear-gradient(135deg,#f8fbff,#eef6ff)] px-6 pb-16 pt-0"
      >
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-start">
          <div aria-hidden="true" className="pointer-events-none absolute -inset-x-6 -top-10 -z-10">
            <div className="absolute left-10 top-10 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.25),transparent_60%)] blur-2xl" />
            <div className="absolute right-0 top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.20),transparent_60%)] blur-2xl" />
          </div>

          <div>
            <SectionHeading
              title="CRM-ready lead capture"
              description={
                <>
                  <p>Every conversation becomes a structured lead record—so your team can move fast with confidence.</p>
                  <p>Instead of chasing voicemail, piecing together half-complete notes, or asking the same questions twice, NexaFlow turns each interaction into a clean, usable record the moment it happens. Service type, urgency, location, timestamps, and next step all stay organized automatically.</p>
                  <p>That means dispatch, sales, and office staff can open the dashboard and immediately understand what came in, who needs attention first, and what action should happen next. No manual cleanup, no messy handoff, and no lost context between the first contact and the booking decision.</p>
                </>
              }
            />

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-100 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-45px_rgba(15,23,42,0.5)]">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Sync
                </div>
                <div className="mt-2 text-2xl font-bold text-slate-950">
                  Instant
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  Synced instantly • Statuses + timestamps
                </div>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-45px_rgba(15,23,42,0.5)]">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Structure
                </div>
                <div className="mt-2 text-2xl font-bold text-slate-950">
                  Consistent
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  Same fields, statuses, and handoff logic
                </div>
              </div>
            </div>

            <div className="mt-4 inline-flex flex-wrap items-center gap-2">
              {["Synced instantly", "Lead statuses", "Processing", "2 min ago"].map((chip) => (
                <span
                  key={chip}
                  className="inline-flex items-center rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur"
                >
                  {chip}
                </span>
              ))}
            </div>

            <div className="mt-4 rounded-3xl border border-slate-100 bg-white/70 p-5 shadow-sm backdrop-blur">
              <div className="text-sm font-semibold text-slate-950">
                Leads arrive already structured so your team can act immediately.
              </div>
              <div className="mt-1 text-sm leading-6 text-slate-600">
                Leads arrive structured — service, status, and timing — so dispatch and sales can act fast without digging through notes.
              </div>
              <ul className="mt-3 space-y-1 text-sm font-medium text-slate-700">
                <li>No manual data entry</li>
                <li>Clear statuses</li>
                <li>Real-time updates</li>
              </ul>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-100 bg-white/60 p-6 shadow-sm backdrop-blur">
            <div className="flex items-center justify-between gap-4 rounded-3xl border border-slate-100 bg-white/70 px-5 py-4">
              <div>
                <div className="text-sm font-semibold text-slate-950">
                  Leads dashboard
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  Structured fields, statuses, owners, and timestamps.
                </div>
              </div>
              <div className="hidden items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-600 sm:inline-flex">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Synced
              </div>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-100 bg-white/70 px-4 py-3">
              <div className="nf-dashboard-shimmer h-2 w-full rounded-full" />
              <div className="mt-2 flex items-center justify-between text-xs font-semibold text-slate-500">
                <span>Activity</span>
                <span>Updated just now</span>
              </div>
            </div>

            <div className="mt-5 overflow-hidden rounded-3xl border border-slate-100 bg-white/70">
              <div className="grid grid-cols-12 border-b border-slate-100 bg-slate-50/70 px-5 py-3 text-[11px] font-semibold uppercase tracking-wide text-slate-500">
                <div className="col-span-4">Name</div>
                <div className="col-span-4">Service</div>
                <div className="col-span-2">Status</div>
                <div className="col-span-2 text-right">Time</div>
              </div>

              {[
                {
                  name: "Marcus T.",
                  service: "Water heater replacement",
                  status: "Hot",
                  tone: "hot",
                  time: "2 min ago",
                },
                {
                  name: "Jenna L.",
                  service: "AC repair",
                  status: "Warm",
                  tone: "warm",
                  time: "10 min ago",
                },
                {
                  name: "Luis R.",
                  service: "Roof quote",
                  status: "Warm",
                  tone: "warm",
                  time: "18 min ago",
                },
                {
                  name: "Harper S.",
                  service: "Plumbing service",
                  status: "Booked",
                  tone: "booked",
                  time: "1 hr ago",
                },
              ].map((row) => (
                <div
                  key={row.name}
                  className="grid grid-cols-12 items-center gap-3 border-b border-slate-100 px-5 py-4 transition hover:bg-slate-50/60 last:border-b-0"
                >
                  <div className="col-span-4 min-w-0">
                    <div className="truncate text-sm font-semibold text-slate-950">
                      {row.name}
                    </div>
                    <div className="mt-0.5 text-xs font-semibold text-slate-500">
                      Synced • Processing
                    </div>
                  </div>
                  <div className="col-span-4 min-w-0">
                    <div className="truncate text-sm font-semibold text-slate-800">
                      {row.service}
                    </div>
                    <div className="mt-0.5 text-xs font-semibold text-slate-500">
                      Lead source: Missed call
                    </div>
                  </div>
                  <div className="col-span-2">
                    <span
                      className={[
                        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
                        row.tone === "hot"
                          ? "border-rose-200 bg-rose-50 text-rose-700"
                          : row.tone === "warm"
                            ? "border-amber-200 bg-amber-50 text-amber-800"
                            : "border-emerald-200 bg-emerald-50 text-emerald-700",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "h-2 w-2 rounded-full",
                          row.tone === "hot"
                            ? "bg-rose-500"
                            : row.tone === "warm"
                              ? "bg-amber-500"
                              : "bg-emerald-500",
                        ].join(" ")}
                      />
                      {row.status}
                    </span>
                  </div>
                  <div className="col-span-2 text-right text-sm font-semibold text-slate-500">
                    {row.time}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              {[
                { title: "Lead quality", value: "High intent", note: "More booked outcomes" },
                { title: "Status clarity", value: "Visible", note: "Hot, Warm, Booked" },
                { title: "Data hygiene", value: "Structured", note: "Clean CRM fields" },
              ].map((kpi) => (
                <div
                  key={kpi.title}
                  className="rounded-3xl border border-slate-100 bg-white/70 p-5"
                >
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {kpi.title}
                  </div>
                  <div className="mt-2 text-2xl font-bold text-slate-950">
                    {kpi.value}
                  </div>
                  <div className="mt-1 text-sm text-slate-600">{kpi.note}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="nf-card-lift rounded-2xl border border-slate-100 bg-slate-50/90 p-4 shadow-sm">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
                  <span>Automation log</span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Live
                  </span>
                </div>
                <div className="mt-3 space-y-2 font-mono text-[11px] leading-relaxed text-slate-600">
                  <div>06:42:01 · Lead · Missed call</div>
                  <div>06:42:03 · Fields · Service + location</div>
                  <div>06:42:05 · CRM · Synced</div>
                </div>
              </div>
              <div className="nf-card-lift rounded-2xl border border-slate-100 bg-slate-50/90 p-4 shadow-sm">
                <div className="text-xs font-semibold text-slate-500">
                  Queue depth
                </div>
                <div className="mt-3 flex h-14 items-end gap-1.5">
                  {[32, 48, 40, 56, 44, 36].map((px, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-t bg-gradient-to-t from-sky-500 to-sky-300/50"
                      style={{ height: `${px}px` }}
                    />
                  ))}
                </div>
                <div className="mt-2 text-xs text-slate-500">
                  Inbound events (last hour)
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll>
      <section
        id="pipeline"
        className="relative mx-auto max-w-7xl bg-[linear-gradient(135deg,#f6fffb,#e8fff5)] px-6 pb-16 pt-0"
      >
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-start">
          <div aria-hidden="true" className="pointer-events-none absolute -inset-x-6 -top-10 -z-10">
            <div className="absolute left-0 top-12 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.24),transparent_62%)] blur-2xl" />
            <div className="absolute right-12 top-4 h-44 w-44 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.20),transparent_62%)] blur-2xl" />
          </div>

          <div>
            <SectionHeading
              title="A pipeline that moves on its own"
              description={
                <>
                  <p>From first response to booked appointment, NexaFlow keeps the flow tight—so your team can focus on conversations that matter.</p>
                  <p>Each step is connected to the next. The system responds, qualifies intent, updates the CRM, and pushes the lead toward the right outcome without relying on someone to manually move information around. Instead of scattered follow-up and inconsistent next steps, your workflow stays visible and structured.</p>
                  <p>That creates a cleaner operating rhythm for the business: fewer dropped leads, faster qualification, clearer ownership, and a process that feels dependable every time a new opportunity comes in.</p>
                </>
              }
            />

            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-slate-100 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-45px_rgba(15,23,42,0.5)]">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Average time to qualify
                </div>
                <div className="mt-2 text-2xl font-bold text-slate-950">
                  Under 2 min
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  Questions → fields → next step
                </div>
              </div>

              <div className="rounded-3xl border border-slate-100 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-45px_rgba(15,23,42,0.5)]">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Flow
                </div>
                <div className="mt-2 text-2xl font-bold text-slate-950">
                  4-step
                </div>
                <div className="mt-1 text-sm text-slate-600">
                  Missed call → booked appointment
                </div>
              </div>
            </div>

            <div className="mt-4 rounded-3xl border border-slate-100 bg-white/70 p-5 shadow-sm backdrop-blur">
              <div className="flex flex-wrap items-center gap-2">
                {[
                  { label: "CRM updated automatically", tone: "emerald" },
                  { label: "Responding now", tone: "sky" },
                  { label: "Qualified", tone: "indigo" },
                ].map((c) => (
                  <span
                    key={c.label}
                    className={[
                      "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
                      c.tone === "emerald"
                        ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                        : c.tone === "sky"
                          ? "border-sky-200 bg-sky-50 text-sky-700"
                          : "border-indigo-200 bg-indigo-50 text-indigo-700",
                    ].join(" ")}
                  >
                    <span
                      className={[
                        "h-2 w-2 rounded-full",
                        c.tone === "emerald"
                          ? "bg-emerald-500"
                          : c.tone === "sky"
                            ? "bg-sky-500"
                            : "bg-indigo-500",
                      ].join(" ")}
                    />
                    {c.label}
                  </span>
                ))}
              </div>
              <div className="mt-3 text-sm leading-6 text-slate-600">
                Each step is tracked with statuses, timestamps, and a clean summary so nothing falls through the cracks.
              </div>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-100 bg-white/60 p-7 shadow-sm backdrop-blur">
            <div className="rounded-3xl border border-slate-100 bg-white/70 p-6">
              <div className="text-sm font-semibold text-slate-950">
                From missed call to booked job
              </div>
              <div className="mt-4 hidden md:block">
                <div className="relative overflow-x-auto pb-2">
                  <div
                    aria-hidden="true"
                    className="absolute left-6 right-6 top-[26px] h-px bg-[linear-gradient(90deg,rgba(59,130,246,0.10),rgba(99,102,241,0.20),rgba(16,185,129,0.22),rgba(59,130,246,0.10))] [background-size:220%_100%] animate-[nf-flow_3.2s_linear_infinite]"
                  />
                  <div className="grid min-w-[560px] grid-cols-4 gap-3">
                    {[
                      { label: "Missed call", tone: "slate" },
                      { label: "AI responds", tone: "emerald" },
                      { label: "Qualified", tone: "indigo" },
                      { label: "Booked", tone: "emerald" },
                    ].map((n, idx) => (
                      <div key={n.label} className="relative">
                        <div className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-sm">
                          <div
                            className={[
                              "flex h-10 w-10 items-center justify-center rounded-2xl border text-sm font-bold",
                              n.tone === "emerald"
                                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                                : n.tone === "indigo"
                                  ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                                  : "border-slate-200 bg-slate-50 text-slate-700",
                            ].join(" ")}
                          >
                            {idx + 1}
                          </div>
                          <div className="min-w-0">
                            <div className="truncate text-sm font-semibold text-slate-950">
                              {n.label}
                            </div>
                            <div className="mt-0.5 text-xs font-semibold text-slate-500">
                              {idx === 0
                                ? "Inbound"
                                : idx === 1
                                  ? "Auto-reply"
                                  : idx === 2
                                    ? "Fields captured"
                                    : "Next step set"}
                            </div>
                          </div>
                        </div>

                        <div className="mt-3 grid gap-2">
                          {idx === 0 && (
                            <>
                              <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-xs font-semibold text-slate-700">
                                Captures caller intent
                              </div>
                              <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-xs font-semibold text-slate-700">
                                Creates a lead record
                              </div>
                            </>
                          )}
                          {idx === 1 && (
                            <>
                              <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-xs font-semibold text-slate-700">
                                Responding now
                              </div>
                              <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-xs font-semibold text-slate-700">
                                Asks qualifying questions
                              </div>
                            </>
                          )}
                          {idx === 2 && (
                            <>
                              <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-xs font-semibold text-slate-700">
                                Qualifies intent
                              </div>
                              <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-xs font-semibold text-slate-700">
                                Updates CRM fields
                              </div>
                            </>
                          )}
                          {idx === 3 && (
                            <>
                              <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-xs font-semibold text-slate-700">
                                Appointment booked
                              </div>
                              <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-xs font-semibold text-slate-700">
                                Confirmation sent
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <ol className="mt-5 space-y-4 md:hidden">
                {[
                  {
                    title: "Answer instantly",
                    desc: "Ask the right questions to understand intent and timing.",
                  },
                  {
                    title: "Log the lead",
                    desc: "Create structured CRM fields and keep the conversation context.",
                  },
                  {
                    title: "Book the next step",
                    desc: "Route to the right owner and schedule follow-ups when needed.",
                  },
                ].map((step, idx) => (
                  <li key={step.title} className="flex gap-4">
                    <div className="mt-0.5 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
                      <span className="text-sm font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-slate-950">
                        {step.title}
                      </div>
                      <div className="mt-1 text-sm leading-6 text-slate-600">
                        {step.desc}
                      </div>
                    </div>
                  </li>
                ))}
              </ol>

              <div className="mt-6 hidden grid-cols-3 gap-3 md:grid">
                <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-xs font-semibold text-slate-700">
                  Qualifies intent
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-xs font-semibold text-slate-700">
                  Updates CRM fields
                </div>
                <div className="rounded-2xl border border-slate-100 bg-white px-4 py-3 text-xs font-semibold text-slate-700">
                  Triggers booking flow
                </div>
              </div>
            </div>

            <div className="mt-7 rounded-3xl border border-slate-100 bg-white/70 p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <IconShield className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-slate-950">
                    Premium UX, enterprise reliability
                  </div>
                  <div className="mt-1 text-sm leading-6 text-slate-600">
                    Designed to fit cleanly into existing workflows without forcing
                    your team to change habits.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll>
      <section id="channels" className="relative mx-auto max-w-7xl px-6 pb-16 pt-0">
        <div className="rounded-[36px] border border-slate-100 bg-white/60 p-8 shadow-sm backdrop-blur">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
            <div>
              <SectionHeading
                title="Multi-channel coverage"
                description="NexaFlow handles missed calls, website chat, and incoming emails—so every customer gets a timely, consistent response."
              />
              <p className="mt-4 text-sm leading-6 text-slate-600">
                All channels feed into one unified system — no missed messages, no fragmentation.
              </p>
              <ul className="mt-3 space-y-1 text-sm font-medium text-slate-700">
                <li>Unified inbox logic</li>
                <li>Same response behavior</li>
                <li>Same CRM structure</li>
              </ul>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Missed calls",
                  desc: "Capture intent, qualify quickly, and route to the right owner.",
                  icon: IconPhone,
                  badge: "24/7",
                },
                {
                  title: "Incoming emails",
                  desc: "Summarize and extract fields into tasks and CRM updates.",
                  icon: IconMail,
                  badge: "Auto-reply",
                },
                {
                  title: "Website chat",
                  desc: "Convert on-site visitors into structured leads in real time.",
                  icon: IconChat,
                  badge: "Live",
                },
              ].map((c) => {
                const I = c.icon;
                return (
                  <div
                    key={c.title}
                    className="group flex items-start gap-4 rounded-3xl border border-slate-100 bg-white/75 p-5 transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-45px_rgba(15,23,42,0.5)]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
                      <I className="h-5 w-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="text-lg font-semibold text-slate-950">
                          {c.title}
                        </div>
                        <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                          {c.badge}
                        </div>
                      </div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">
                        {c.desc}
                      </div>
                    </div>
                    <div className="hidden rounded-2xl border border-slate-100 bg-white px-3 py-2 text-xs font-semibold text-slate-600 sm:block">
                      &lt;10s
                    </div>
                  </div>
                );
              })}

              <div className="rounded-3xl border border-emerald-100 bg-emerald-50/60 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-600 text-white">
                    <IconFlow className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-950">
                      One orchestration layer
                    </div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">
                      Calls, chat, and emails feed one unified pipeline with the same CRM structure.
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/90 p-4">
                <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                  <span className="inline-flex items-center gap-2 font-semibold text-slate-950">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    API · Healthy
                  </span>
                  <span className="text-slate-500">Webhooks · 99.9%</span>
                  <span className="text-slate-500">Sync p95 · 120ms</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll>
      <section
        id="morning-summary"
        className="relative mx-auto max-w-7xl px-6 pb-16 pt-0"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <SectionHeading
            title="Morning summary for your team"
            description="Get an actionable view of what happened overnight—without digging through notes."
          />

          <div className="relative overflow-hidden rounded-[32px] border border-slate-900 bg-[linear-gradient(135deg,#0F172A,#1E293B,#0B3B2E)] p-8 shadow-[0_40px_120px_-70px_rgba(2,6,23,0.85)]">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.22),transparent_55%),radial-gradient(circle_at_right,rgba(59,130,246,0.18),transparent_55%)]"
            />
            <div className="flex items-center justify-between gap-6">
              <div>
                <div className="relative text-sm font-semibold text-white">
                  NexaFlow daily digest
                </div>
                <div className="relative mt-1 text-sm text-white/70">
                  What needs attention, who owns it, and what&apos;s next.
                </div>
              </div>
              <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white shadow-sm ring-1 ring-white/10">
                <IconClock className="h-5 w-5" />
              </div>
            </div>

            <div className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
              <div className="border-b border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold text-white/70">
                Today • 7:05 AM
              </div>
              <div className="space-y-4 px-5 py-5">
                {[
                  {
                    tag: "New lead",
                    tone: "emerald",
                    title: "Water heater replacement • Palm Coast",
                    meta: "Owner: Dispatch • Callback: Afternoon",
                    time: "6:41 AM",
                    icon: IconPhone,
                  },
                  {
                    tag: "Needs callback",
                    tone: "sky",
                    title: "AC repair • Ormond Beach",
                    meta: "Owner: On-call • Customer asked for pricing",
                    time: "6:12 AM",
                    icon: IconInbox,
                  },
                  {
                    tag: "Booked",
                    tone: "emerald",
                    title: "Plumbing service • Palm Coast",
                    meta: "Owner: Scheduler • Confirmed for 2:30 PM",
                    time: "5:58 AM",
                    icon: IconCheckCircle,
                  },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div
                      className={[
                        "mt-0.5 flex h-9 w-9 items-center justify-center rounded-2xl border",
                        item.tone === "emerald"
                          ? "border-emerald-200 bg-emerald-50"
                          : "border-sky-200 bg-sky-50",
                      ].join(" ")}
                    >
                      <item.icon
                        className={
                          item.tone === "emerald"
                            ? "h-4 w-4 text-emerald-700"
                            : "h-4 w-4 text-sky-700"
                        }
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={[
                            "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold",
                            item.tone === "emerald"
                              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                              : "border-sky-200 bg-sky-50 text-sky-700",
                          ].join(" ")}
                        >
                          {item.tag}
                        </span>
                        <div className="truncate text-sm font-semibold text-white">
                          {item.title}
                        </div>
                      </div>
                      <div className="mt-1 text-sm leading-6 text-white/70">
                        {item.meta}
                      </div>
                    </div>
                    <div className="ml-auto hidden text-xs font-semibold text-white/50 sm:block">
                      {item.time}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10">
                  <IconShield className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">
                    Built for speed, not busywork
                  </div>
                  <p className="mt-1 text-sm leading-6 text-white/70">
                    Keeps the team aligned so every lead gets the next step without delay.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll>
      <section
        id="about"
        className="nf-section-about relative mx-auto max-w-7xl px-6 pb-16 pt-0"
      >
        <div className="relative grid gap-10 lg:grid-cols-2 lg:items-start">
          <div aria-hidden="true" className="pointer-events-none absolute -inset-x-6 -top-10 -z-10">
            <div className="absolute left-8 top-8 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.22),transparent_62%)] blur-2xl" />
            <div className="absolute right-6 top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_62%)] blur-2xl" />
            <div className="absolute left-40 top-40 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.16),transparent_62%)] blur-2xl" />
          </div>
          <div>
            <SectionHeading
              title="Built for service businesses"
              description={
                <>
                  <p>NexaFlow is designed for small, busy teams where missed calls cost real revenue. It answers fast, captures details cleanly, and gives your team a clear next step.</p>
                  <p>Most service businesses do not lose deals because they lack demand—they lose deals in the gap between first contact and follow-up. When calls go unanswered, messages sit too long, or information gets written down inconsistently, good leads cool off before anyone on the team can act.</p>
                  <p>NexaFlow closes that gap by creating a reliable front-desk layer across calls, website chat, and inbound email. It gives the customer a faster experience, while giving your team cleaner records, clearer handoffs, and more confidence in what should happen next.</p>
                  <p>Instead of depending on voicemail, memory, sticky notes, or scattered inboxes, your business gets a structured system that captures context automatically, keeps status visible, and makes each new lead easier to act on.</p>
                  <p>That is the real value: not just speed, but consistency. Not just automation, but cleaner operations. Not just a nicer customer interaction, but a system your team can actually rely on day after day.</p>
                </>
              }
            />
          </div>

          <div className="relative rounded-[32px] border border-slate-100 bg-white/60 p-6 shadow-sm backdrop-blur">
            <div className="overflow-hidden rounded-[26px] border border-slate-100 bg-white">
              <div className="h-48 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.35),transparent_55%),linear-gradient(135deg,#f1f5f9,#ffffff)]" />
              <div className="grid gap-4 border-t border-slate-100 p-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Mission
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-950">
                    Help small teams respond like large teams
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Focus
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-950">
                    Calls, chat, and CRM workflow automation
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Reliability
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-950">
                    Consistent tone + structured data
                  </div>
                </div>
                <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Clarity
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-950">
                    Summaries your team can act on
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -left-3 top-10 hidden w-48 md:block">
              <div className="rounded-2xl border border-slate-200 bg-white/85 p-3 shadow-lg backdrop-blur">
                <div className="text-xs font-semibold text-slate-500">Trusted workflow</div>
                <div className="mt-1 text-sm font-semibold text-slate-950">Structured handoffs</div>
              </div>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                { label: "Reliability", value: "Always on" },
                { label: "Speed", value: "< 10 sec" },
                { label: "Handoff", value: "Structured" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-slate-100 bg-white/70 p-4"
                >
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {s.label}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-950">
                    {s.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-4 overflow-hidden rounded-3xl border border-slate-100 bg-white/70">
              <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50/70 px-5 py-3">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  System preview
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-600">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  Live
                </div>
              </div>
              <div className="space-y-3 px-5 py-5">
                {[
                  { title: "Missed call handled", meta: "Palm Coast • 2 min ago", tone: "emerald" },
                  { title: "Lead qualified", meta: "Service + location captured", tone: "indigo" },
                  { title: "Booking in progress", meta: "Confirmation pending", tone: "sky" },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-start justify-between gap-4 rounded-2xl border border-slate-100 bg-white px-4 py-3"
                  >
                    <div className="min-w-0">
                      <div className="truncate text-sm font-semibold text-slate-950">
                        {item.title}
                      </div>
                      <div className="mt-1 text-xs font-semibold text-slate-500">
                        {item.meta}
                      </div>
                    </div>
                    <span
                      className={[
                        "shrink-0 rounded-full border px-3 py-1 text-xs font-semibold",
                        item.tone === "emerald"
                          ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                          : item.tone === "indigo"
                            ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                            : "border-sky-200 bg-sky-50 text-sky-700",
                      ].join(" ")}
                    >
                      {item.tone === "emerald"
                        ? "Synced"
                        : item.tone === "indigo"
                          ? "Qualified"
                          : "Processing"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <RevealOnScroll>
      <section id="cta" className="relative mx-auto max-w-7xl px-6 pb-28 pt-0">
        <div className="relative overflow-hidden rounded-[40px] border border-emerald-100 bg-white/70 p-10 shadow-[0_40px_120px_-65px_rgba(16,185,129,0.55)] backdrop-blur">
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(16,185,129,0.20),transparent_55%),radial-gradient(circle_at_right,rgba(16,185,129,0.12),transparent_50%)]"
          />
          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-semibold text-emerald-700 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Premium answer engine
              </div>

              <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                Turn every missed call into a booked appointment
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Book a free demo and see how NexaFlow captures lead intent, updates your CRM, and keeps your pipeline moving.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#cta"
                  className="nf-btn-motion rounded-2xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-[0_18px_55px_-35px_rgba(16,185,129,0.95)] hover:-translate-y-0.5 hover:bg-emerald-700"
                >
                  Book a Free Demo
                </a>
                <a
                  href="#pipeline"
                  className="nf-btn-motion rounded-2xl border border-slate-200 bg-white px-8 py-4 text-lg font-semibold text-slate-800 hover:-translate-y-0.5 hover:bg-slate-50"
                >
                  See the pipeline
                </a>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                Takes 30 seconds. No commitment.
              </p>
            </div>

            <div className="rounded-[28px] border border-slate-100 bg-white/60 p-8 shadow-sm backdrop-blur">
              <div className="text-sm font-semibold text-slate-950">
                Request a demo
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Tell us where to send the walkthrough. We&apos;ll reply quickly.
              </p>
              <DemoRequestForm />
            </div>
          </div>
        </div>
      </section>
      </RevealOnScroll>

      <NexaChatWidget />
    </main>
  );
}