import { useEffect, useState } from "react";


{/* A REUSABLE HOOK FOR COUT UP STATS. IT TAKES TWO PARAMETER; end=count threshold, and duration, the time for count to take */}
export function useCountUp(end, duration = 1500, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startValue = 0;
    const startTime = performance.now();

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const value = Math.floor(progress * end);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, duration, start]);

  return count;
}