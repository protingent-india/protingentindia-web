"use client"
import { useEffect, useState } from "react";

// ----------------------------------------------------------

// Animated Counter Component
const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps

        const timer = setInterval(() => {
            setCount(prev => {
                const next = prev + increment;
                if (next >= target) {
                    clearInterval(timer);
                    return target;
                }
                return next;
            });
        }, 16);

        return () => clearInterval(timer);
    }, [target]);

    return <>{Math.floor(count)}{suffix}</>;
};

export default AnimatedCounter;
