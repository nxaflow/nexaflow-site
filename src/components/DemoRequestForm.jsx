"use client";

import { useState } from "react";

export default function DemoRequestForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="mt-5 space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="flex flex-wrap items-center gap-2">
        {["30-sec setup", "No commitment", "Fast response"].map((chip) => (
          <span
            key={chip}
            className="inline-flex rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600"
          >
            {chip}
          </span>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Name
          </div>
          <input
            type="text"
            name="name"
            autoComplete="name"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
            placeholder="Your name"
            required
          />
        </label>
        <label className="block">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            Company
          </div>
          <input
            type="text"
            name="company"
            autoComplete="organization"
            className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
            placeholder="Service business"
          />
        </label>
      </div>

      <label className="block">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          Email
        </div>
        <input
          type="email"
          name="email"
          autoComplete="email"
          className="mt-2 w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
          placeholder="you@company.com"
          required
        />
      </label>

      <label className="block">
        <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          What do you want NexaFlow to handle?
        </div>
        <textarea
          name="notes"
          rows={3}
          className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-100"
          placeholder="Missed calls, website chat, email automation, booking…"
        />
      </label>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-2xl bg-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_55px_-35px_rgba(16,185,129,0.95)] transition hover:-translate-y-0.5 hover:bg-emerald-700"
      >
        {submitted ? "Request received" : "Request demo"}
      </button>

      {submitted ? (
        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-xs font-semibold text-emerald-700">
          Thanks. We&apos;ll follow up with a tailored demo shortly.
        </div>
      ) : (
        <div className="text-xs text-slate-500">
          No spam. Professional follow-up only.
        </div>
      )}
    </form>
  );
}

