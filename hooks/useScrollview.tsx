import { useMotionValue, useScroll } from 'framer-motion';
import { useEffect, useRef } from 'react';

const useScrollViewEffect = () => {
    const ref = useRef<any>(null);
    const { scrollY } = useScroll();
    const progress = useMotionValue(0);

    useEffect(() => {
        const elemRect = ref.current?.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        const updateProgress = (scrollYValue: number) => progress.set(Math.min(Math.max((scrollYValue - elemRect.top + windowHeight) / windowHeight, 0), 2));
        const unsubscribeScrollY = scrollY.onChange(updateProgress);
        return () => {
            unsubscribeScrollY();
        };
    }, [progress, scrollY]);

    return [ref, progress];
};

export default useScrollViewEffect;
