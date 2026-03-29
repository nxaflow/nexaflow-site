"use client";

import { useEffect, useMemo, useRef, useState } from "react";

function cx(...parts) {
  return parts.filter(Boolean).join(" ");
}

function TypingDots({ align = "left" }) {
  return (
    <div className={cx("flex", align === "right" ? "justify-end" : "justify-start")}>
      <div className="inline-flex items-center gap-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.2s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.1s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
      </div>
    </div>
  );
}

function Bubble({ role, text, time }) {
  const isUser = role === "user";
  return (
    <div className={cx("flex", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cx(
          "max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm",
          "animate-[nf-fade-up_420ms_ease-out_both]",
          isUser
            ? "bg-emerald-600 text-white"
            : "border border-slate-200 bg-white text-slate-800"
        )}
      >
        <div className="whitespace-pre-wrap">{text}</div>
        <div className={cx("mt-1 text-[11px]", isUser ? "text-emerald-50/80" : "text-slate-400")}>
          {time}
        </div>
      </div>
    </div>
  );
}

function PhoneFrame({ children }) {
  return (
    <div className="relative mx-auto w-[340px] max-w-full">
      <div className="absolute -inset-6 -z-10 rounded-[44px] bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.26),transparent_55%)] blur-2xl" />
      <div className="absolute -inset-10 -z-10 rounded-[56px] bg-[radial-gradient(circle_at_right,rgba(56,189,248,0.14),transparent_60%)] blur-3xl" />

      <div className="relative overflow-hidden rounded-[44px] border border-slate-200 bg-white shadow-[0_56px_130px_-78px_rgba(15,23,42,0.62)]">
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-emerald-600 text-sm font-bold text-white">
              N
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-slate-950">NexaFlow</div>
              <div className="flex items-center gap-2 text-xs text-emerald-700">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-[nf-soft-pulse_1.4s_ease-in-out_infinite] rounded-full bg-emerald-400" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                Live demo
              </div>
            </div>
          </div>

          <div className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-600">
            10:12 AM
          </div>
        </div>

        <div className="bg-slate-50 p-4">
          <div className="h-[520px] overflow-hidden rounded-[28px] border border-slate-200 bg-white">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusToast({ title, detail, tone = "emerald" }) {
  const toneClasses =
    tone === "emerald"
      ? "border-emerald-100 bg-white/80"
      : tone === "slate"
        ? "border-slate-200 bg-white/80"
        : "border-sky-100 bg-white/80";

  return (
    <div
      className={cx(
        "rounded-2xl border p-4 shadow-lg backdrop-blur",
        "animate-[nf-float-in_460ms_ease-out_both]",
        toneClasses
      )}
    >
      <div className="text-sm font-semibold text-slate-950">{title}</div>
      <div className="mt-1 text-sm leading-6 text-slate-600">{detail}</div>
    </div>
  );
}

export default function PhoneMockupDemo() {
  const script = useMemo(
    () => [
      { type: "msg", role: "user", time: "10:12", text: "Hi — I missed your call. Can you help me book an estimate?" },
      { type: "typing", role: "assistant", ms: 1200 },
      {
        type: "msg",
        role: "assistant",
        time: "10:12",
        text: "Absolutely. What service do you need and what city are you in?",
      },
      { type: "typing", role: "user", ms: 1000 },
      { type: "msg", role: "user", time: "10:13", text: "Water heater replacement in Palm Coast." },
      { type: "typing", role: "assistant", ms: 1350 },
      {
        type: "msg",
        role: "assistant",
        time: "10:13",
        text: "Got it. What’s the best time window for a call back today — morning, afternoon, or evening?",
      },
      { type: "typing", role: "user", ms: 950 },
      { type: "msg", role: "user", time: "10:13", text: "Afternoon works." },
      { type: "typing", role: "assistant", ms: 1400 },
      {
        type: "msg",
        role: "assistant",
        time: "10:14",
        text: "Perfect — I’ll log this as a new lead and route it to the right tech. You’ll get a confirmation shortly.",
      },
    ],
    []
  );

  const [messages, setMessages] = useState([]);
  const [typingRole, setTypingRole] = useState(null);
  const [toast, setToast] = useState(null);
  const listRef = useRef(null);

  const timeoutsRef = useRef([]);

  useEffect(() => {
    function clearAll() {
      for (const t of timeoutsRef.current) clearTimeout(t);
      timeoutsRef.current = [];
    }

    async function run() {
      clearAll();
      setMessages([]);
      setTypingRole(null);
      setToast(null);

      let cursor = 250;

      const pushTimeout = (fn, ms) => {
        const id = setTimeout(fn, ms);
        timeoutsRef.current.push(id);
      };

      for (let i = 0; i < script.length; i++) {
        const step = script[i];

        if (step.type === "typing") {
          pushTimeout(() => setTypingRole(step.role), cursor);
          cursor += step.ms;
          pushTimeout(() => setTypingRole(null), cursor);
          cursor += 250;
          continue;
        }

        if (step.type === "msg") {
          pushTimeout(() => {
            setMessages((prev) => [
              ...prev,
              { id: `${i}-${step.role}`, role: step.role, text: step.text, time: step.time },
            ]);
          }, cursor);

          if (i === 6) {
            pushTimeout(
              () =>
                setToast({
                  title: "Lead captured",
                  detail: "Palm Coast • Water heater • Priority: High",
                  tone: "emerald",
                }),
              cursor + 250
            );
          }

          if (i === 10) {
            pushTimeout(
              () =>
                setToast({
                  title: "Booking in progress",
                  detail: "Routing to on-call tech • Afternoon window",
                  tone: "slate",
                }),
              cursor + 250
            );
          }

          cursor += 900;
        }
      }

      pushTimeout(() => setToast(null), cursor + 1400);
      pushTimeout(() => run(), cursor + 2200);
    }

    run();
    return () => {
      for (const t of timeoutsRef.current) clearTimeout(t);
      timeoutsRef.current = [];
    };
  }, [script]);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTo({
      top: listRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typingRole]);

  return (
    <div className="relative">
      <PhoneFrame>
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b border-slate-200 bg-white px-4 py-3">
            <div className="text-sm font-semibold text-slate-950">After-hours assistant</div>
            <div className="text-xs font-semibold text-slate-500">Missed call → booked</div>
          </div>

          {toast && (
            <div className="border-b border-slate-200 bg-white px-4 py-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-slate-950">
                    {toast.title}
                  </div>
                  <div className="mt-0.5 text-xs font-semibold text-slate-500">
                    {toast.detail}
                  </div>
                </div>
                <span
                  className={cx(
                    "shrink-0 rounded-full border px-3 py-1 text-xs font-semibold",
                    toast.tone === "emerald"
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : toast.tone === "slate"
                        ? "border-slate-200 bg-slate-50 text-slate-700"
                        : "border-sky-200 bg-sky-50 text-sky-700"
                  )}
                >
                  Live
                </span>
              </div>
            </div>
          )}

          <div
            ref={listRef}
            className="flex-1 space-y-4 overflow-y-auto bg-slate-50 px-4 py-4"
          >
            {messages.map((m) => (
              <Bubble key={m.id} role={m.role} text={m.text} time={m.time} />
            ))}

            {typingRole && (
              <TypingDots align={typingRole === "user" ? "right" : "left"} />
            )}
          </div>

          <div className="border-t border-slate-200 bg-white px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="h-10 flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500">
                Type a message…
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M22 2 11 13" />
                  <path d="M22 2 15 22l-4-9-9-4Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}

