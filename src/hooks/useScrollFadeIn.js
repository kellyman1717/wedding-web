import { useEffect, useRef, useState } from "react";

export default function useScrollFadeIn(direction = "up", delay = 0) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  const getTransform = (visible) => {
    if (direction === "left") {
      return visible ? "translateX(0)" : "translateX(-30px)";
    } else if (direction === "right") {
      return visible ? "translateX(0)" : "translateX(30px)";
    } else {
      return visible ? "translateY(0)" : "translateY(20px)";
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay); 
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  return {
    ref,
    style: {
      opacity: isVisible ? 1 : 0,
      transform: getTransform(isVisible),
      transition: `all 0.8s ease-out ${delay / 1000}s`,
    },
  };
}
