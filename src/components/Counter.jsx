import { useEffect, useRef } from "react";
import { inView } from "motion";

const Counter = ({ value }) => {
  const wrapperRef = useRef(null);
  const numberRef = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    inView(wrapperRef.current, () => {
      if (started.current) return;
      started.current = true;

      const duration = 2000;
      const startTime = performance.now();

      const animate = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const current = Math.floor(easeOutQuart * value);

        if (numberRef.current) {
          numberRef.current.textContent = current;
        }

        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          if (numberRef.current)
            numberRef.current.textContent = value;
        }
      };

      requestAnimationFrame(animate);

      wrapperRef.current.animate(
        [
          { opacity: 0, transform: "translateY(10px)" },
          { opacity: 1, transform: "translateY(0px)" },
        ],
        {
          duration: 600,
          easing: "ease-out",
          fill: "forwards",
        }
      );
    });
  }, [value]);

  return (
    <span ref={wrapperRef}>
      <span ref={numberRef}>0</span>
    </span>
  );
};

export default Counter;
