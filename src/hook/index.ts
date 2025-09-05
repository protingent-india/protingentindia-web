'use client';
import { useMediaQuery } from '@mui/material';

// -------------------------------------------------------------------

export function useBreakpoint() {
    const xs = useMediaQuery('(max-width: 639px)');
    const sm = useMediaQuery('(min-width: 640px)');
    const md = useMediaQuery('(min-width: 768px)');
    const lg = useMediaQuery('(min-width: 1024px)');
    const xl = useMediaQuery('(min-width: 1280px)');
    const lap = useMediaQuery('(min-width: 1440px)');
    const xl3 = useMediaQuery('(min-width: 1536px)');
    const xl4 = useMediaQuery('(min-width: 1536px)');
    const desk = useMediaQuery('(min-width: 1800px)');

    return {
        xs,
        sm,
        md,
        lg,
        xl,
        lap,
        xl3,
        xl4,
        desk
    };
}
