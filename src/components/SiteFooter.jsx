export default function SiteFooter() {
  return (
    <footer
      className="border-t border-slate-200/90 bg-[#e8edf4] text-slate-600"
      role="contentinfo"
    >
      <div className="mx-auto max-w-7xl px-6 py-10 md:py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold tracking-tight text-slate-900">
              NexaFlow
            </p>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-600 md:text-sm md:leading-relaxed">
              AI-powered front desk automation for service businesses.
            </p>
            <p className="mt-2 max-w-xl text-xs leading-relaxed text-slate-600 md:text-sm md:leading-relaxed">
              We help companies capture leads, respond instantly, and book
              appointments automatically.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-1 lg:gap-10">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Contact
              </p>
              <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-slate-600 md:text-sm">
                <li className="text-slate-800">Andrii Pastukhov</li>
                <li>
                  <a
                    className="underline decoration-slate-300 underline-offset-2 transition hover:text-slate-900 hover:decoration-slate-400"
                    href="mailto:mamyibavvv@gmail.com"
                  >
                    mamyibavvv@gmail.com
                  </a>
                </li>
                <li>
                  <a
                    className="tabular-nums underline decoration-slate-300 underline-offset-2 transition hover:text-slate-900 hover:decoration-slate-400"
                    href="tel:+13863634056"
                  >
                    386-363-4056
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-500">
                Location
              </p>
              <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-slate-600 md:text-sm">
                <li>Based in Florida</li>
                <li>Serving businesses across the United States</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 text-[11px] text-slate-500 md:flex-row md:items-center md:justify-between md:text-xs">
          <p className="text-slate-600">
            © 2026 NexaFlow. All rights reserved.
          </p>
          <p className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <a
              className="underline decoration-slate-300 underline-offset-2 transition hover:text-slate-800 hover:decoration-slate-400"
              href="#privacy"
            >
              Privacy Policy
            </a>
            <span className="text-slate-300" aria-hidden="true">
              |
            </span>
            <a
              className="underline decoration-slate-300 underline-offset-2 transition hover:text-slate-800 hover:decoration-slate-400"
              href="#terms"
            >
              Terms of Service
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
