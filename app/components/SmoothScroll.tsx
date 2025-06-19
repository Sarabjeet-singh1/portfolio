'use client';

import { useEffect } from 'react';

const SmoothScroll = () => {
  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      if (e.target instanceof HTMLAnchorElement) {
        const href = e.target.getAttribute('href');
        if (href?.startsWith('#')) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    };

    document.addEventListener('click', smoothScroll);
    return () => document.removeEventListener('click', smoothScroll);
  }, []);

  return null;
};

export default SmoothScroll;
