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
            : "border border-slate-200 bg-white text-slate-800",
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

export default function PhoneMockupDemo() {
  const script = useMemo(
    () => [
      { type: "msg", role: "user", time: "10:12", text: "Hi - I need solar panel cleaning at 14 Palm Ave this Thursday around 3 PM." },
      { type: "typing", role: "assistant", ms: 1100 },
      { type: "msg", role: "assistant", time: "10:12", text: "Absolutely. What name should I put on the appointment?" },
      { type: "typing", role: "user", ms: 900 },
      { type: "msg", role: "user", time: "10:13", text: "Mike Turner." },
      { type: "typing", role: "assistant", ms: 1200 },
      { type: "msg", role: "assistant", time: "10:13", text: "Thanks, Mike. That slot is not available. I can offer Thursday at 2 PM or 4 PM. Which works better?" },
      { type: "typing", role: "user", ms: 950 },
      { type: "msg", role: "user", time: "10:14", text: "4 PM works." },
      { type: "typing", role: "assistant", ms: 1300 },
      { type: "msg", role: "assistant", time: "10:14", text: "Perfect. Your appointment is confirmed for Thursday at 4 PM." },
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
      for (const timeoutId of timeoutsRef.current) clearTimeout(timeoutId);
      timeoutsRef.current = [];
    }

    function schedule(callback, delay) {
      const id = setTimeout(callback, delay);
      timeoutsRef.current.push(id);
    }

    function run() {
      clearAll();
      setMessages([]);
      setTypingRole(null);
      setToast(null);

      let cursor = 250;

      script.forEach((step, index) => {
        if (step.type === "typing") {
          schedule(() => setTypingRole(step.role), cursor);
          cursor += step.ms;
          schedule(() => setTypingRole(null), cursor);
          cursor += 250;
          return;
        }

        schedule(() => {
          setMessages((prev) => [
            ...prev,
            {
              id: `${index}-${step.role}`,
              role: step.role,
              text: step.text,
              time: step.time,
            },
          ]);
        }, cursor);

        if (index === 4) {
          schedule(
            () =>
              setToast({
                label: "Structured lead",
                detail: "Name, address, service, date, and time captured",
              }),
            cursor + 250
          );
        }

        if (index === 8) {
          schedule(
            () =>
              setToast({
                label: "Alternative selected",
                detail: "Thursday at 4 PM is being rechecked",
              }),
            cursor + 250
          );
        }

        if (index === 10) {
          schedule(
            () =>
              setToast({
                label: "Booking confirmed",
                detail: "Verified slot returned to the customer safely",
              }),
            cursor + 250
          );
        }

        cursor += 900;
      });

      schedule(() => setToast(null), cursor + 1400);
      schedule(() => run(), cursor + 2400);
    }

    run();

    return () => {
      for (const timeoutId of timeoutsRef.current) clearTimeout(timeoutId);
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
            <div className="text-sm font-semibold text-slate-950">
              After-hours booking assistant
            </div>
            <div className="text-xs font-semibold text-slate-500">
              Voice intake to confirmation
            </div>
          </div>

          {toast && (
            <div className="border-b border-slate-200 bg-white px-4 py-3">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold text-slate-950">
                    {toast.label}
                  </div>
                  <div className="mt-0.5 text-xs font-semibold text-slate-500">
                    {toast.detail}
                  </div>
                </div>
                <span className="shrink-0 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                  Live
                </span>
              </div>
            </div>
          )}

          <div
            ref={listRef}
            className="flex-1 space-y-4 overflow-y-auto bg-slate-50 px-4 py-4"
          >
            {messages.map((message) => (
              <Bubble
                key={message.id}
                role={message.role}
                text={message.text}
                time={message.time}
              />
            ))}

            {typingRole && (
              <TypingDots align={typingRole === "user" ? "right" : "left"} />
            )}
          </div>

          <div className="border-t border-slate-200 bg-white px-4 py-4">
            <div className="flex items-center gap-3">
              <div className="h-10 flex-1 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-500">
                Type a message...
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-sm">
                Go
              </div>
            </div>
          </div>
        </div>
      </PhoneFrame>
    </div>
  );
}
