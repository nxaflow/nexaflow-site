import NexaChatWidget from "@/sites/marketing/components/NexaChatWidget";
import PhoneMockupDemo from "@/sites/marketing/components/PhoneMockupDemo";
import DemoRequestForm from "@/sites/marketing/components/DemoRequestForm";
import RevealOnScroll from "@/sites/marketing/components/RevealOnScroll";
import HeroBackgroundVideo from "@/sites/marketing/components/HeroBackgroundVideo";

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

const problemCards = [
  {
    badge: "Voice AI",
    title: "Voice intake via Telnyx",
    text: "The system captures name, address, service, date, and time from voice turns while n8n stays the backend booking engine.",
    icon: IconPhone,
  },
  {
    badge: "Structured capture",
    title: "Lead data lands in a stable payload",
    text: "Partial lead data is saved immediately so the conversation keeps context instead of relying on scattered notes.",
    icon: IconDatabase,
  },
  {
    badge: "Booking qualification",
    title: "The next missing field is asked on purpose",
    text: "Before booking, NexaFlow checks if the request is complete and asks exactly for the next required detail.",
    icon: IconFlow,
  },
];

const engineCards = [
  {
    title: "Availability check",
    text: "Core Booking checks the requested slot instead of pretending availability is known.",
  },
  {
    title: "Alternative slots",
    text: "If a time is busy, the flow can return alternate options and safely process the customer's selection.",
  },
];

const crmRows = [
  {
    name: "Marcus T.",
    service: "Solar panel cleaning",
    status: "Ready",
    tone: "emerald",
    source: "Voice intake",
    time: "2 min ago",
  },
  {
    name: "Jenna L.",
    service: "Warranty question",
    status: "Review",
    tone: "indigo",
    source: "FAQ queue",
    time: "11 min ago",
  },
  {
    name: "Luis R.",
    service: "Panel inspection",
    status: "Alt slots",
    tone: "amber",
    source: "Chat front desk",
    time: "18 min ago",
  },
  {
    name: "Harper S.",
    service: "System service call",
    status: "Booked",
    tone: "emerald",
    source: "Email handoff",
    time: "1 hr ago",
  },
];

const channelCards = [
  {
    title: "Voice AI intake",
    desc: "Capture booking details from voice turns while keeping n8n as the booking backend.",
    icon: IconPhone,
    badge: "Telnyx",
  },
  {
    title: "Chat front desk",
    desc: "Use the same intake logic for text-based booking and FAQ flows.",
    icon: IconChat,
    badge: "Front desk",
  },
  {
    title: "Incoming emails",
    desc: "Route FAQ and sales questions through an email front desk workflow.",
    icon: IconMail,
    badge: "Email",
  },
  {
    title: "Website product chat",
    desc: "Answer product questions through a separate product-sales RAG flow that can be trained by the owner.",
    icon: IconInbox,
    badge: "RAG",
  },
];

const safeguardCards = [
  {
    tag: "FAQ answered",
    title: "Approved answer returned before booking handoff",
    text: "FAQ and RAG can answer service questions without derailing the booking path.",
    icon: IconChat,
    tone: "emerald",
  },
  {
    tag: "Boss review",
    title: "Unknown question queued for approval",
    text: "New approved answers can be added back into the knowledge base automatically.",
    icon: IconInbox,
    tone: "sky",
  },
  {
    tag: "Human escalation",
    title: "Sensitive issues leave the booking path",
    text: "Refund, legal, and manager or owner requests can be routed to a person instead of improvised by AI.",
    icon: IconShield,
    tone: "emerald",
  },
];

const aboutPreview = [
  {
    title: "Voice intake active",
    meta: "Lead fields saved before booking",
    tone: "emerald",
    badge: "Synced",
  },
  {
    title: "FAQ answer approved",
    meta: "Knowledge stays controlled instead of invented",
    tone: "indigo",
    badge: "Reviewed",
  },
  {
    title: "Alternative slot offered",
    meta: "Busy time rerouted to the next valid option",
    tone: "sky",
    badge: "Processing",
  },
];

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
                <div className="text-sm font-semibold text-white">NexaFlow</div>
                <div className="text-xs text-[#94a3b8]">
                  Voice intake + booking engine
                </div>
              </div>
            </div>

            <nav className="hidden items-center gap-8 text-sm text-[#cbd5f5] md:flex">
              <a className="transition hover:text-white" href="#problem">
                Problem
              </a>
              <a className="transition hover:text-white" href="#engine">
                Engine
              </a>
              <a className="transition hover:text-white" href="#crm">
                CRM
              </a>
              <a className="transition hover:text-white" href="#channels">
                Channels
              </a>
              <a className="transition hover:text-white" href="#safeguards">
                Safeguards
              </a>
              <a className="transition hover:text-white" href="#about">
                About
              </a>
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#engine"
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
              <SectionKicker
                hero
                text="Live now - voice, chat, and booking orchestration"
              />

              <h1 className="mt-5 max-w-3xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                <span className="text-white">AI Intake That</span>
                <br />
                <span className="text-[#10b981]">
                  Actually Gets The Booking Done.
                </span>
              </h1>

              <h2 className="mt-4 text-2xl font-semibold text-[#cbd5f5] md:text-4xl">
                Voice, chat, email, and booking logic in one backend.
              </h2>

              <p className="mt-4 max-w-2xl text-lg leading-8 text-[#94a3b8]">
                NexaFlow captures lead details, qualifies the request, checks
                availability, offers alternate slots, and returns customer-safe
                replies across voice, chat, and email.
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
                  See the core flow
                </a>

                <div className="flex flex-wrap items-center gap-2 text-sm text-[#94a3b8]">
                  {[
                    { label: "Voice + chat", tone: "emerald" },
                    { label: "Booking engine", tone: "slate" },
                    { label: "FAQ + RAG", tone: "sky" },
                  ].map((chip) => (
                    <span
                      key={chip.label}
                      className={[
                        "inline-flex items-center gap-2 rounded-full border px-3 py-2 text-xs font-semibold shadow-sm",
                        chip.tone === "emerald"
                          ? "border-[#10b981] bg-[#022c22] text-[#cbd5f5]"
                          : chip.tone === "sky"
                            ? "border-[#38bdf8] bg-[#0f172a] text-[#cbd5f5]"
                            : "border-[#64748b] bg-[#0f172a] text-[#cbd5f5]",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "h-2 w-2 rounded-full",
                          chip.tone === "emerald"
                            ? "bg-[#10b981]"
                            : chip.tone === "sky"
                              ? "bg-[#38bdf8]"
                              : "bg-[#94a3b8]",
                        ].join(" ")}
                      />
                      {chip.label}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-sm text-[#94a3b8]">
                Built for service businesses that need structured intake and
                safer automation.
              </p>
            </div>

            <div className="relative rounded-[32px] border border-emerald-100 bg-white/70 p-6 shadow-[0_34px_90px_-45px_rgba(16,185,129,0.45)] backdrop-blur">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    Live product demo
                  </p>
                  <h3 className="text-2xl font-bold text-slate-950">
                    Voice booking flow
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
                    <div className="text-xs font-semibold text-slate-600">
                      Live
                    </div>
                    <div className="text-xs font-semibold text-slate-500">
                      Structured
                    </div>
                  </div>
                  <div className="mt-2 text-sm font-semibold text-slate-950">
                    Lead captured
                  </div>
                  <div className="mt-1 text-xs leading-5 text-slate-600">
                    Name, service, address, and timing saved
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute left-3 bottom-3 hidden md:block">
                <div className="w-[210px] rounded-2xl border border-slate-200 bg-white/55 p-3 shadow-lg backdrop-blur animate-[nf-float-in_620ms_ease-out_both,nf-card-float_6.1s_ease-in-out_infinite]">
                  <div className="flex items-center justify-between gap-3">
                    <div className="text-sm font-semibold text-slate-950">
                      Booking outcome
                    </div>
                    <div className="text-xs font-semibold text-slate-500">
                      1m ago
                    </div>
                  </div>
                  <div className="mt-1 text-xs leading-5 text-slate-600">
                    Availability checked, next step returned safely
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
              title="Most teams do not need another chatbot"
              description="They need a front desk layer that captures structured lead data, asks the next missing question, and moves qualified requests toward a real booking outcome."
            />

            <div className="mt-2 flex items-start md:mt-0">
              <div className="rounded-3xl border border-slate-100 bg-white/60 p-6 shadow-sm backdrop-blur">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-[0_18px_40px_-18px_rgba(16,185,129,0.65)]">
                    <IconFlow className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-950">
                      Real intake, not surface-level replies
                    </div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">
                      Structured lead capture, booking qualification, and safer
                      follow-through across channels.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {problemCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="group rounded-3xl border border-slate-100 bg-white/70 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:shadow-[0_30px_70px_-45px_rgba(15,23,42,0.45)]"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="nf-badge-motion inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    {card.badge}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-950">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {card.text}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              {
                label: "Voice + chat",
                value: "1",
                sub: "Unified intake layer",
                barClass: "bg-gradient-to-r from-emerald-500 to-emerald-300/40",
              },
              {
                label: "Booking-ready",
                value: "Next",
                sub: "One missing field at a time",
                barClass: "bg-gradient-to-r from-sky-500 to-sky-300/40",
              },
              {
                label: "Calendar-aware",
                value: "Live",
                sub: "Availability plus alternatives",
                barClass: "bg-gradient-to-r from-indigo-500 to-indigo-300/40",
              },
            ].map((metric) => (
              <div
                key={metric.label}
                className="nf-card-lift rounded-2xl border border-slate-100 bg-white/90 p-5 shadow-sm"
              >
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  {metric.label}
                </div>
                <div className="mt-2 text-3xl font-bold tabular-nums text-slate-950">
                  {metric.value}
                </div>
                <div className="mt-1 text-xs text-slate-600">{metric.sub}</div>
                <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-100">
                  <div className={`h-full w-4/5 rounded-full ${metric.barClass}`} />
                </div>
              </div>
            ))}
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section id="engine" className="relative mx-auto max-w-7xl px-6 pb-16 pt-0">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-0 overflow-hidden rounded-[48px]"
          >
            <div className="nf-features-blob-a" />
            <div className="nf-features-blob-b" />
          </div>
          <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-stretch">
            <div className="nf-card-lift rounded-[36px] border border-slate-100 bg-white/70 p-8 shadow-sm backdrop-blur hover:shadow-[0_28px_70px_-50px_rgba(15,23,42,0.35)]">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <div className="nf-badge-motion inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                    <IconBolt className="h-4 w-4" />
                    Booking engine
                  </div>
                  <h3 className="mt-4 text-2xl font-bold tracking-tight text-slate-950">
                    Not just answers - a booking engine
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    NexaFlow does more than reply. It captures the lead,
                    qualifies the request, checks availability, suggests
                    alternatives, and only confirms when the booking path is
                    actually verified.
                  </p>
                </div>
                <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm sm:flex">
                  <IconPhone className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {engineCards.map((card) => (
                  <div
                    key={card.title}
                    className="nf-card-lift rounded-3xl border border-slate-100 bg-white/70 p-5 shadow-sm hover:shadow-[0_24px_60px_-45px_rgba(15,23,42,0.5)]"
                  >
                    <div className="text-sm font-semibold text-slate-950">
                      {card.title}
                    </div>
                    <div className="mt-1 text-sm leading-6 text-slate-600">
                      {card.text}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-7 rounded-3xl border border-slate-100 bg-slate-50/90 p-5">
                <div className="text-sm font-semibold text-slate-950">
                  Deterministic booking outcomes
                </div>
                <div className="mt-2 text-sm leading-6 text-slate-600">
                  The flow can move a lead into needs-more-info, booked,
                  unavailable-with-alternatives, cancelled, escalated, or
                  safe-fallback states without forcing a free-form answer.
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
                  Deterministic safety layer
                </div>
                <h3 className="mt-4 text-2xl font-bold tracking-tight text-white">
                  Business rules keep automation honest
                </h3>
                <p className="mt-3 text-sm leading-6 text-white/70">
                  NexaFlow does not just push everything toward a booking. It
                  respects working hours, closed days, holidays, date
                  overrides, minimum notice, service duration, and
                  buffer-aware late starts.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]">
                    <div className="text-sm font-semibold text-white">
                      Business-hour logic
                    </div>
                    <div className="mt-1 text-sm leading-6 text-white/70">
                      Requests outside the allowed window are blocked with a
                      clear customer-safe reply.
                    </div>
                  </div>
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:bg-white/[0.08]">
                    <div className="text-sm font-semibold text-white">
                      Safe handoff
                    </div>
                    <div className="mt-1 text-sm leading-6 text-white/70">
                      Sensitive requests can move to a human instead of being
                      forced through an unsafe automation path.
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
                        Real guardrails, not just polished copy
                      </div>
                      <div className="mt-1 text-sm leading-6 text-white/70">
                        This is the layer that makes the booking flow more
                        usable in a real service business.
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
                title="CRM and ops-friendly lead structure"
                description={
                  <>
                    <p>Every conversation becomes a structured lead record with statuses, timestamps, and a stable response contract.</p>
                    <p>Instead of piecing together half-complete notes, your team gets service details, timing, source, and next-step context in a format that is easier to route and act on.</p>
                    <p>This is what makes NexaFlow ops-friendly: structured fields, normalized payloads, tenant config, and lead states that are easier to plug into real business workflows.</p>
                  </>
                }
              />

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-slate-100 bg-white/70 p-5 shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-45px_rgba(15,23,42,0.5)]">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Contract
                  </div>
                  <div className="mt-2 text-2xl font-bold text-slate-950">
                    Stable
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    Status, message, fields, and timestamps
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
                    Same lead shape across channels
                  </div>
                </div>
              </div>

              <div className="mt-4 inline-flex flex-wrap items-center gap-2">
                {[
                  "Structured lead",
                  "Lead statuses",
                  "Timestamps",
                  "Next action",
                ].map((chip) => (
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
                  Leads arrive already structured so dispatch, sales, and office
                  staff can act immediately.
                </div>
                <div className="mt-1 text-sm leading-6 text-slate-600">
                  No manual cleanup, fewer messy handoffs, and less guessing
                  about what the customer actually asked for.
                </div>
              </div>
            </div>

            <div className="rounded-[32px] border border-slate-100 bg-white/60 p-6 shadow-sm backdrop-blur">
              <div className="flex items-center justify-between gap-4 rounded-3xl border border-slate-100 bg-white/70 px-5 py-4">
                <div>
                  <div className="text-sm font-semibold text-slate-950">
                    Structured lead record
                  </div>
                  <div className="mt-1 text-sm text-slate-600">
                    Fields, statuses, source, and next-step context.
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
                  <span>Payload health</span>
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

                {crmRows.map((row) => (
                  <div
                    key={row.name}
                    className="grid grid-cols-12 items-center gap-3 border-b border-slate-100 px-5 py-4 transition hover:bg-slate-50/60 last:border-b-0"
                  >
                    <div className="col-span-4 min-w-0">
                      <div className="truncate text-sm font-semibold text-slate-950">
                        {row.name}
                      </div>
                      <div className="mt-0.5 text-xs font-semibold text-slate-500">
                        Structured and timestamped
                      </div>
                    </div>
                    <div className="col-span-4 min-w-0">
                      <div className="truncate text-sm font-semibold text-slate-800">
                        {row.service}
                      </div>
                      <div className="mt-0.5 text-xs font-semibold text-slate-500">
                        Source: {row.source}
                      </div>
                    </div>
                    <div className="col-span-2">
                      <span
                        className={[
                          "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold",
                          row.tone === "emerald"
                            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                            : row.tone === "indigo"
                              ? "border-indigo-200 bg-indigo-50 text-indigo-700"
                              : "border-amber-200 bg-amber-50 text-amber-800",
                        ].join(" ")}
                      >
                        <span
                          className={[
                            "h-2 w-2 rounded-full",
                            row.tone === "emerald"
                              ? "bg-emerald-500"
                              : row.tone === "indigo"
                                ? "bg-indigo-500"
                                : "bg-amber-500",
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
                  {
                    title: "Lead quality",
                    value: "Structured",
                    note: "Cleaner ops handoffs",
                  },
                  {
                    title: "Status clarity",
                    value: "Visible",
                    note: "Ready, review, booked",
                  },
                  {
                    title: "Payload hygiene",
                    value: "Stable",
                    note: "Same field shape each time",
                  },
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
                  title="Voice, chat, email, and website product chat"
                  description="NexaFlow combines Telnyx voice intake, text front desk flows, inbound email handling, and a separate product-sales RAG path for the website."
                />
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  All of these surfaces can feed the same backend logic so the
                  response path stays more consistent and easier to manage.
                </p>
                <ul className="mt-3 space-y-1 text-sm font-medium text-slate-700">
                  <li>Same structured lead format</li>
                  <li>Same booking logic</li>
                  <li>Same customer-safe response contract</li>
                </ul>
              </div>

              <div className="space-y-4">
                {channelCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <div
                      key={card.title}
                      className="group flex items-start gap-4 rounded-3xl border border-slate-100 bg-white/75 p-5 transition hover:-translate-y-0.5 hover:shadow-[0_24px_60px_-45px_rgba(15,23,42,0.5)]"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <div className="text-lg font-semibold text-slate-950">
                            {card.title}
                          </div>
                          <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                            {card.badge}
                          </div>
                        </div>
                        <div className="mt-2 text-sm leading-6 text-slate-600">
                          {card.desc}
                        </div>
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
                        Voice, chat, and email can share one backend source of
                        truth for lead capture, booking logic, and safe replies.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl border border-slate-100 bg-slate-50/90 p-4">
                  <div className="flex flex-wrap items-center justify-between gap-3 text-xs">
                    <span className="inline-flex items-center gap-2 font-semibold text-slate-950">
                      <span className="h-2 w-2 rounded-full bg-emerald-500" />
                      Google Calendar - booking logic
                    </span>
                    <span className="text-slate-500">
                      Supabase FAQ/RAG - knowledge
                    </span>
                    <span className="text-slate-500">
                      Telegram alerts - optional
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </RevealOnScroll>

      <RevealOnScroll>
        <section id="safeguards" className="relative mx-auto max-w-7xl px-6 pb-16 pt-0">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <SectionHeading
              title="Safeguards that keep automation usable"
              description="Controlled knowledge, human escalation, and safe fallbacks matter as much as speed."
            />

            <div className="relative overflow-hidden rounded-[32px] border border-slate-900 bg-[linear-gradient(135deg,#0F172A,#1E293B,#0B3B2E)] p-8 shadow-[0_40px_120px_-70px_rgba(2,6,23,0.85)]">
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.22),transparent_55%),radial-gradient(circle_at_right,rgba(59,130,246,0.18),transparent_55%)]"
              />
              <div className="relative flex items-center justify-between gap-6">
                <div>
                  <div className="text-sm font-semibold text-white">
                    NexaFlow safeguard layer
                  </div>
                  <div className="mt-1 text-sm text-white/70">
                    What happens when the system should answer, pause, or
                    escalate.
                  </div>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-white shadow-sm ring-1 ring-white/10">
                  <IconShield className="h-5 w-5" />
                </div>
              </div>

              <div className="relative mt-6 overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                <div className="border-b border-white/10 bg-white/5 px-5 py-3 text-xs font-semibold text-white/70">
                  Customer-safe outcomes
                </div>
                <div className="space-y-4 px-5 py-5">
                  {safeguardCards.map((item) => (
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
                          <div className="text-sm font-semibold text-white">
                            {item.title}
                          </div>
                        </div>
                        <div className="mt-1 text-sm leading-6 text-white/70">
                          {item.text}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative mt-4 rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/10">
                    <IconCheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Safe mode and safe capture
                    </div>
                    <p className="mt-1 text-sm leading-6 text-white/70">
                      If the system should not continue, it can return a
                      customer-safe fallback or capture name, phone, and issue
                      for follow-up instead of guessing.
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wide text-white/50">
                      Optional Telegram notifications can support ops handoff.
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
                title="Built for service businesses that need controlled automation"
                description={
                  <>
                    <p>NexaFlow is designed for teams that need more than fast replies. They need structured intake, safer automation, and booking logic that respects real business constraints.</p>
                    <p>This is why the product leans into qualification, availability checks, alternate-slot handling, FAQ control, and human escalation instead of pretending every request should be answered free-form.</p>
                    <p>The result is a front-desk layer that can help service businesses respond faster while keeping more control over what gets promised, booked, escalated, or saved for follow-up.</p>
                    <p>That is the differentiator: not just AI that talks, but AI orchestration that can support real operations.</p>
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
                      Help small teams run a more reliable front desk
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Focus
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-950">
                      Voice, booking, FAQ, and channel orchestration
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Safety
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-950">
                      Human escalation + safe fallback
                    </div>
                  </div>
                  <div className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      Clarity
                    </div>
                    <div className="mt-2 text-sm font-semibold text-slate-950">
                      Structured statuses your team can act on
                    </div>
                  </div>
                </div>
              </div>

              <div className="pointer-events-none absolute -left-3 top-10 hidden w-48 md:block">
                <div className="rounded-2xl border border-slate-200 bg-white/85 p-3 shadow-lg backdrop-blur">
                  <div className="text-xs font-semibold text-slate-500">
                    Trusted workflow
                  </div>
                  <div className="mt-1 text-sm font-semibold text-slate-950">
                    Controlled handoffs
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Reliability", value: "Always on" },
                  { label: "Knowledge", value: "Controlled" },
                  { label: "Handoff", value: "Structured" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-slate-100 bg-white/70 p-4"
                  >
                    <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                      {stat.label}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-950">
                      {stat.value}
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
                  {aboutPreview.map((item) => (
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
                        {item.badge}
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
                  Voice + booking engine
                </div>

                <h2 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
                  Put voice intake, FAQ, and booking logic in one system
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-600">
                  Book a demo and see how NexaFlow handles structured intake,
                  booking qualification, availability checks, FAQ control, and
                  safe handoffs for service businesses.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#cta"
                    className="nf-btn-motion rounded-2xl bg-emerald-600 px-8 py-4 text-lg font-semibold text-white shadow-[0_18px_55px_-35px_rgba(16,185,129,0.95)] hover:-translate-y-0.5 hover:bg-emerald-700"
                  >
                    Book a Free Demo
                  </a>
                  <a
                    href="#engine"
                    className="nf-btn-motion rounded-2xl border border-slate-200 bg-white px-8 py-4 text-lg font-semibold text-slate-800 hover:-translate-y-0.5 hover:bg-slate-50"
                  >
                    See the engine
                  </a>
                </div>

                <p className="mt-4 text-sm text-slate-500">
                  Built for managed rollouts, not vague AI promises.
                </p>
              </div>

              <div className="rounded-[28px] border border-slate-100 bg-white/60 p-8 shadow-sm backdrop-blur">
                <div className="text-sm font-semibold text-slate-950">
                  Request a demo
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Tell us which flows you want to automate first.
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
