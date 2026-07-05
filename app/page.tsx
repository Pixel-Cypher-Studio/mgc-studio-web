import type { Metadata } from 'next';
import { HeroDigitalSuccess } from '@/components/hero-digital-success';
import { BoldFooter } from '@/components/footer-bold';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <main>
      <HeroDigitalSuccess />
      <BoldFooter />
    </main>
  );
}
