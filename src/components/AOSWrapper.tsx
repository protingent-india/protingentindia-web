'use client';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AOSWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 100,
      delay: 100,
    });

    // Refresh AOS on route changes
    AOS.refresh();
  }, []);

  return <>{children}</>;
};

export default AOSWrapper;