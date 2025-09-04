'use client';
import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

type Props = { children: React.ReactNode };

export default function ScrollToTop({ children }: Props) {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }, [pathname]);

    return <>{children}</>;
}
