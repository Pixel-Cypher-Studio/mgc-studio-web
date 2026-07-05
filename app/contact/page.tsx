import { Mail } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with MGC Studio.',
};

export default function ContactPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-950 px-4 font-sans">
      <div className="flex flex-col items-center gap-8 text-center">
        <div className="rounded-full border border-zinc-800 bg-zinc-900 p-6">
          <Mail className="h-10 w-10 text-zinc-100" strokeWidth={1.5} />
        </div>

        <div className="space-y-3">
          <h1 className="text-sm font-medium tracking-widest text-zinc-500 uppercase">
            Get in touch
          </h1>
          <a
            href="mailto:reachmgcstudio@gmail.com"
            className="font-sans text-2xl font-medium tracking-tight text-white transition-colors hover:text-zinc-400 sm:text-3xl"
          >
            reachmgcstudio@gmail.com
          </a>
        </div>

        <p className="max-w-sm text-sm leading-relaxed text-zinc-500">
          We&apos;d love to hear from you. Whether you have a question, a
          project idea, or just want to say hello — drop us a line.
        </p>
      </div>
    </main>
  );
}
