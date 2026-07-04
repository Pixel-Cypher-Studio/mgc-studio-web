'use client';
import React, { Suspense, useEffect, useRef, useState } from 'react';
import { ShaderGradient, ShaderGradientCanvas } from '@shadergradient/react';
import { useMediaQuery } from '@/components/use-media-query';
import MotionDrawer from '@/components/ui/motion-drawer';
import CalEmbed from '@/components/cal-embed';
import { getCalApi } from '@calcom/embed-react';

export const HeroDigitalSuccess = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [shaderLoaded, setShaderLoaded] = useState(false);

  useEffect(() => {
    // Give shader time to initialize before showing elements
    const timer = setTimeout(() => {
      setShaderLoaded(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({
        namespace: process.env.NEXT_PUBLIC_CAL_BOOK_A_CALL || '',
      });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <section
      ref={timelineRef}
      className="relative flex min-h-screen flex-col overflow-hidden bg-black text-white"
    >
      <Suspense>
        <ShaderGradientCanvas
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            opacity: 0.6,
          }}
          lazyLoad={false}
          pixelDensity={isMobile ? 0.7 : 1}
          pointerEvents="none"
        >
          <ShaderGradient
            animate="on"
            type="sphere"
            wireframe={false}
            shader="defaults"
            uTime={0}
            uSpeed={0.3}
            uStrength={0.3}
            uDensity={0.8}
            uFrequency={5.5}
            uAmplitude={3.2}
            positionX={-0.1}
            positionY={0}
            positionZ={0}
            rotationX={0}
            rotationY={130}
            rotationZ={70}
            color1="#92dbe0"
            color2="#0b7bff"
            color3="#3865cf"
            reflection={0.4}
            // View (camera) props
            cAzimuthAngle={270}
            cPolarAngle={180}
            cDistance={0.5}
            cameraZoom={15.1}
            // Effect props
            lightType="env"
            brightness={0.8}
            envPreset="city"
            grain="on"
            // Tool props
            toggleAxis={false}
            zoomOut={false}
            hoverState=""
            // Optional - if using transition features
            enableTransition={false}
          />
        </ShaderGradientCanvas>
      </Suspense>

      {/* All content wrapper - hidden until shader loads */}
      <div
        className={`relative z-10 flex min-h-screen flex-col transition-opacity duration-500 ${shaderLoaded ? 'opacity-100' : 'opacity-0'}`}
      >
        {isMobile && (
          <header className="flex items-center justify-between gap-4 px-4 pt-4">
            <MotionDrawer
              direction="left"
              width={260}
              backgroundColor={'#000000'}
              clsBtnClassName="bg-neutral-800 border-r border-neutral-900 text-white"
              contentClassName="bg-black border-r border-neutral-900 text-white"
              btnClassName="bg-white text-black relative w-fit p-2 left-0 top-0"
            >
              <nav className="space-y-4">
                <div className="flex items-center gap-2 text-white">
                  <img
                    src="/MGCSTUDIO.svg"
                    alt="MCG Studio Logo"
                    className="h-4 w-auto md:h-5"
                  />
                </div>
                <a
                  href="#"
                  className="block rounded-sm p-2 hover:bg-neutral-100 hover:text-black"
                >
                  Our Service
                </a>
                <a
                  href="#"
                  className="block rounded-sm p-2 hover:bg-neutral-100 hover:text-black"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="block rounded-sm p-2 hover:bg-neutral-100 hover:text-black"
                >
                  Contact
                </a>
              </nav>
            </MotionDrawer>
            <CalEmbed
              calLink={process.env.NEXT_PUBLIC_CAL_BOOK_A_CALL || ''}
              className="flex w-fit cursor-pointer items-center gap-2 rounded-full bg-neutral-800 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-neutral-700"
            >
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              <span className="text-xs font-medium">Book a call</span>
            </CalEmbed>
          </header>
        )}
        {/* Header */}
        {!isMobile && (
          <header className="relative flex items-center justify-between p-4 px-10">
            <div className="flex items-center gap-2">
              <img
                src="/MGCSTUDIO.svg"
                alt="MCG Studio Logo"
                className="h-5 w-auto md:h-6"
              />
            </div>

            <nav className="hidden items-center gap-12 text-sm font-medium text-white md:flex">
              <a href="#" className="transition hover:text-white">
                Our Services
              </a>
              <a href="#" className="transition hover:text-white">
                About Us
              </a>
              <a href="#" className="transition hover:text-white">
                Contact
              </a>
            </nav>
            <CalEmbed
              calLink={process.env.NEXT_PUBLIC_CAL_BOOK_A_CALL || ''}
              className="flex w-fit cursor-pointer items-center gap-2 rounded-full bg-neutral-800 px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-neutral-700"
            >
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              <span className="text-sm font-medium">Book a call</span>
            </CalEmbed>
          </header>
        )}

        {/* Main Hero Content */}
        <div className="flex grow flex-col justify-center px-5 md:px-12 lg:px-24">
          <h1 className="flex flex-col items-baseline gap-x-8 gap-y-2 pb-6 text-[8vw] leading-[100%] font-medium sm:text-[10vw] md:pb-10 xl:flex-row xl:text-[6.5vw]">
            Unlocking
            <span className="block bg-linear-to-r from-white via-red-500 to-red-500 bg-clip-text pb-8 text-transparent xl:inline-block">
              Digital Success
            </span>
          </h1>

          <div className="flex flex-col items-start gap-10 lg:flex-row lg:items-center">
            <div className="flex flex-wrap justify-start gap-4">
              <CalEmbed
                calLink={process.env.NEXT_PUBLIC_CAL_BOOK_A_CALL || ''}
                className="group relative flex cursor-pointer items-center gap-3 overflow-hidden rounded-full bg-white px-5 py-3 text-base font-medium text-black shadow-[0_0_20px_rgba(255,60,60,0.4)] transition-shadow hover:shadow-[0_0_30px_rgba(255,60,60,0.6)] md:px-8 md:py-4 md:text-lg"
              >
                <img
                  src="https://picsum.photos/seed/ds/50"
                  className="h-5 w-5 rounded-full md:h-6 md:w-6"
                  alt="Digital Success Hero Image"
                  loading="lazy"
                  decoding="async"
                />
                Book a Call
              </CalEmbed>
              <button className="cursor-pointer rounded-full border border-white/20 bg-white/5 px-5 py-3 text-base font-medium backdrop-blur-md md:px-8 md:py-4 md:text-lg">
                More about us
              </button>
            </div>
            <p className="max-w-md text-base leading-relaxed font-light text-neutral-100 md:text-xl">
              We are a full-stack agency creating captivating web experiences,
              driving e-commerce growth, and maximizing digital impact.
            </p>
          </div>
        </div>

        {/* Footer Info */}
        <div className="flex flex-wrap items-end justify-end p-4 md:p-8 lg:p-12">
          <div className="grid grid-cols-2 gap-x-6 gap-y-4 rounded-lg bg-black/20 p-4 backdrop-blur-lg md:grid-cols-4 md:gap-x-12">
            <div>
              <p className="mb-1 text-sm text-white">Web Design</p>
              <p className="text-xs text-neutral-300">Ecommerce Design</p>
            </div>
            <div>
              <p className="mb-1 text-sm text-white">Social Media Marketing</p>
              <p className="text-xs text-neutral-300">Email Marketing</p>
            </div>
            <div>
              <p className="mb-1 text-sm text-white">
                Conversion Rate Optimization
              </p>
              <p className="text-xs text-neutral-300">Paid Traffic & Ad</p>
            </div>
            <div>
              <p className="mb-1 text-sm text-white">User Generated Content</p>
              <p className="text-xs text-neutral-300">and more</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
