import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans, Geist_Mono } from 'next/font/google';
import './globals.css';
import { suppressThreeClockWarning } from '@/lib/suppress-three-deprecation';
import { StickyBanner } from '@/components/ui/sticky-banner';

suppressThreeClockWarning();

const jakartaSans = Plus_Jakarta_Sans({
  variable: '--font-sans',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    default: 'MCG Studio | Unlocking Digital Success',
    template: '%s | MCG Studio',
  },
  description:
    'Full-stack digital agency creating captivating web experiences, driving e-commerce growth, and maximizing digital impact.',
  keywords: [
    'video editing',
    'reels edits',
    'web design',
    'ecommerce',
    'digital agency',
    'social media marketing',
    'conversion rate optimization',
    'paid traffic',
    'email marketing',
  ],
  icons: {
    icon: '/MGCSTUDIO.svg',
  },
  openGraph: {
    title: 'MCG Studio | Unlocking Digital Success',
    description:
      'Full-stack digital agency creating captivating web experiences, driving e-commerce growth, and maximizing digital impact.',
    type: 'website',
    locale: 'en_US',
    siteName: 'MCG Studio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MCG Studio | Unlocking Digital Success',
    description:
      'Full-stack digital agency creating captivating web experiences, driving e-commerce growth, and maximizing digital impact.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jakartaSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <StickyBanner
          hideOnScroll
          className="bg-gradient-to-r from-blue-600 to-cyan-500"
        >
          <p className="text-sm font-medium text-white">
            PixelCypherStudio is now{' '}
            <span className="font-bold">MGC Studio</span>
          </p>
        </StickyBanner>
        {children}
      </body>
    </html>
  );
}
