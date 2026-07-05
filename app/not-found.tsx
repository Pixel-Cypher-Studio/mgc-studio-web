import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4 font-sans">
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="space-y-3">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">
            404
          </h1>
          <p className="text-xl font-medium text-zinc-400 sm:text-2xl">
            Either <span className="text-white">we 🤦‍♂️</span> f*cked up or <br />
            <span className="text-white">U 🫵</span> f*cked up
          </p>
        </div>

        <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
          Either the page doesn&apos;t exist or something went wrong on our end.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-6 py-3 text-sm font-medium text-zinc-100 transition-colors hover:bg-zinc-800"
        >
          Go back home
        </Link>
      </div>
    </main>
  );
}
