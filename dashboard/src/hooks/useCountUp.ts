'use client';

import { useEffect, useRef, useState } from 'react';
import { useMotionValue, useSpring } from 'framer-motion';

export function useCountUp(target: number, duration: number = 1.5, trigger: boolean = true) {
  const [displayValue, setDisplayValue] = useState(target);
  const motionValue = useMotionValue(target);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const prevTarget = useRef(target);

  useEffect(() => {
    if (!trigger) return;

    if (prevTarget.current !== target) {
      prevTarget.current = target;
      motionValue.set(target);
    }

    const unsubscribe = springValue.on('change', (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return () => unsubscribe();
  }, [target, trigger, motionValue, springValue]);

  return displayValue;
}
