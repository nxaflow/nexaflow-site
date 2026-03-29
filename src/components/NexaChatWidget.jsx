"use client";

import { useEffect, useMemo, useRef, useState } from "react";

const WEBHOOK_URL =
  "https://vonychka.app.n8n.cloud/webhook/9a75071e-ec82-437c-bbbc-1c0c589a2bc8/chat";

function TypingDots() {
  return (
    <div className="flex justify-start">
      <div className="inline-flex items-center gap-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm">
        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.2s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.1s]" />
        <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
      </div>
    </div>
  );
}

function MessageBubble({ role, text }) {
  const isUser = role === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={[
          "max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 shadow-sm",
          isUser
            ? "bg-emerald-600 text-white"
            : "border border-slate-200 bg-white text-slate-800",
        ].join(" ")}
      >
        {text}
      </div>
    </div>
  );
}

export default function NexaChatWidget() {
  const [open, setOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "welcome",
      role: "assistant",
      text: "Hi — I can help with missed calls, booking, chat, or email automation.",
    },
  ]);

  const listRef = useRef(null);

  const sessionId = useMemo(() => {
    if (typeof window === "undefined") return "server-session";
    const key = "nexaflow_chat_session_id";
    let value = localStorage.getItem(key);
    if (!value) {
      value = crypto.randomUUID();
      localStorage.setItem(key, value);
    }
    return value;
  }, []);

  useEffect(() => {
    if (!listRef.current) return;
    listRef.current.scrollTop = listRef.current.scrollHeight;
  }, [messages, loading, open]);

  async function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    const userMessage = {
      id: crypto.randomUUID(),
      role: "user",
      text: trimmed,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "sendMessage",
          sessionId,
          chatInput: trimmed,
        }),
      });

      const data = await response.json();

      let assistantText = "";

      if (typeof data === "string") {
        assistantText = data;
      } else if (data?.output) {
        assistantText = data.output;
      } else if (data?.text) {
        assistantText = data.text;
      } else if (data?.message) {
        assistantText = data.message;
      } else if (Array.isArray(data) && data[0]?.output) {
        assistantText = data[0].output;
      } else {
        assistantText =
          "The chat is connected, but the response format from n8n needs adjustment.";
      }

      const assistantMessage = {
        id: crypto.randomUUID(),
        role: "assistant",
        text: assistantText,
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          role: "assistant",
          text: "Request failed. Check the webhook, workflow status, or browser console.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <>
      {showHint && !open && (
        <div className="fixed bottom-28 right-6 z-[9998] w-[290px] rounded-2xl border border-rose-100 bg-white p-4 shadow-xl">
          <div className="flex items-start gap-3">
            <div className="mt-1 h-3 w-3 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />
            <div className="min-w-0">
              <p className="text-[15px] font-semibold text-slate-900">
                Still missing calls?
              </p>
              <p className="mt-1 text-sm leading-6 text-slate-500">
                I can show you how this works in 30 seconds.
              </p>
            </div>
            <button
              onClick={() => setShowHint(false)}
              className="text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => {
          setOpen((v) => !v);
          setShowHint(false);
        }}
        className="fixed bottom-6 right-6 z-[9999] flex h-16 w-16 items-center justify-center rounded-full bg-emerald-600 text-white shadow-[0_20px_45px_rgba(16,185,129,0.32)] transition hover:scale-[1.03] hover:bg-emerald-700"
        aria-label="Open chat"
      >
        <svg
          className="h-7 w-7"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M8 10.5h8M8 14h5m-7 6 2.2-3.1A8 8 0 1 1 20 12a8 8 0 0 1-8 8H6Z" />
        </svg>
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-[9999] flex h-[620px] w-[380px] max-w-[calc(100vw-24px)] flex-col overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-2xl">
          <div className="border-b border-slate-200 bg-white px-5 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-lg font-bold text-white">
                  N
                </div>
                <div>
                  <div className="text-[15px] font-semibold text-slate-900">
                    NexaFlow Assistant
                  </div>
                  <div className="flex items-center gap-2 text-sm text-emerald-600">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    Live now
                  </div>
                </div>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:bg-slate-50"
              >
                ✕
              </button>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Ask about missed calls, booking, chat, or email automation.
            </p>
          </div>

          <div
            ref={listRef}
            className="flex-1 space-y-4 overflow-y-auto bg-slate-50 px-4 py-4"
          >
            {messages.map((msg) => (
              <MessageBubble key={msg.id} role={msg.role} text={msg.text} />
            ))}

            {loading && <TypingDots />}
          </div>

          <div className="border-t border-slate-200 bg-white p-4">
            <div className="flex items-end gap-3">
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                rows={1}
                placeholder="Type your message..."
                className="max-h-32 min-h-[52px] flex-1 resize-none rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
              />
              <button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="flex h-[52px] w-[52px] items-center justify-center rounded-2xl bg-emerald-600 text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}