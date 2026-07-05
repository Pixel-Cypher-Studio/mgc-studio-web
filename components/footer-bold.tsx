'use client';

export const BoldFooter = () => {
  return (
    <footer className="font-dmSans min-h-screen w-full overflow-hidden border-t border-zinc-200 bg-white text-zinc-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-20 flex w-full flex-col items-start justify-between gap-12 md:flex-row">
          <div className="max-w-md">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-pretty">
              Have a project in mind? Let&apos;s build something exceptional.
            </h2>
            <a
              href="mailto:reachmgcstudio@gmail.com"
              className="border-b-2 border-zinc-900 pb-1 text-lg font-medium transition-all hover:border-zinc-500 hover:text-zinc-500"
            >
              reachmgcstudio@gmail.com
            </a>
          </div>

          <div className="grid grid-cols-3 gap-12 sm:gap-24">
            <div>
              <p className="mb-4 text-xs font-bold tracking-widest text-zinc-400 uppercase">
                Location
              </p>
              <address className="space-y-1 text-sm not-italic">
                <p>New Rachana Park</p>
                <p>Kalyan, TH 421306</p>
              </address>
            </div>
            <div>
              <p className="mb-4 text-xs font-bold tracking-widest text-zinc-400 uppercase">
                Social
              </p>
              <nav className="flex flex-col gap-2">
                <a
                  href="https://www.instagram.com/mgcstudio.in"
                  className="text-sm font-medium hover:underline"
                >
                  Instagram
                </a>
              </nav>
            </div>
            <div>
              <p className="mb-4 text-xs font-bold tracking-widest text-zinc-400 uppercase">
                Quick Links
              </p>
              <nav className="flex flex-col gap-2">
                <a
                  href="/contact"
                  className="text-sm font-medium hover:underline"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </div>

        <div className="relative w-full">
          <h1 className="pointer-events-none -mb-[2vw] text-[12vw] leading-none font-black tracking-tighter text-zinc-950 opacity-5 select-none">
            MGC Studio
          </h1>
          <div className="relative z-10 flex items-end justify-between border-t border-zinc-200 pt-8 pb-6 backdrop-blur">
            <span className="text-xs font-medium tracking-widest text-zinc-400 uppercase">
              © 2026 MGC Studio{' '}
            </span>
            <div className="flex gap-8">
              <span className="text-xs text-zinc-400">001 — 2026</span>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="text-xs font-bold tracking-widest uppercase transition-colors hover:text-zinc-500"
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
