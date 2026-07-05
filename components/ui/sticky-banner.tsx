'use client';
import React, { SVGProps, useState } from 'react';
import { motion, useMotionValueEvent, useScroll } from 'motion/react';
import { cn } from '@/lib/utils';

const STORAGE_KEY = 'mgc-studio-banner-closed';

export const StickyBanner = ({
  className,
  children,
  hideOnScroll = false,
}: {
  className?: string;
  children: React.ReactNode;
  hideOnScroll?: boolean;
}) => {
  const [open, setOpen] = useState(
    () => typeof window === 'undefined' || !localStorage.getItem(STORAGE_KEY),
  );
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (hideOnScroll && latest > 40) {
      setOpen(false);
    } else if (!localStorage.getItem(STORAGE_KEY)) {
      setOpen(true);
    }
  });

  return (
    <div
      className={cn(
        'sticky inset-x-0 top-0 z-40 w-full overflow-hidden',
        className,
      )}
    >
      <motion.div
        className="flex w-full items-center justify-center px-4 py-1"
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: open ? 1 : 0,
          height: open ? 'auto' : 0,
          paddingTop: open ? 4 : 0,
          paddingBottom: open ? 4 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {children}

        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
          onClick={() => {
            setOpen(false);
            localStorage.setItem(STORAGE_KEY, '1');
          }}
        >
          <CloseIcon className="h-5 w-5 text-white" />
        </motion.button>
      </motion.div>
    </div>
  );
};

const CloseIcon = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </svg>
  );
};
