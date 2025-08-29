'use client';
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

// --------------------------------------------------------------------------

type Props = { children: React.ReactNode; smooth?: boolean };

// --------------------------------------------------------------------------

export default function ScrollToTop({ children, smooth = true }: Props) {
    const pathname = usePathname();
    const searchParams = useSearchParams();

    useEffect(() => {
        // run on first mount + every route/search change
        if (typeof window !== 'undefined') {
            window.scrollTo({ top: 0, left: 0, behavior: smooth ? 'smooth' : 'auto' });
        }
    }, [pathname, searchParams, smooth]);

    return <>{children}</>;
}
