import { useEffect, useRef } from "react";
import "./styles.css";

export const Cursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    document.addEventListener("mousemove", (event) => {
      const { clientX, clientY } = event;
      if (cursorRef.current) {
        const mouseX = clientX - (cursorRef?.current?.clientWidth ?? 0) / 2;
        const mouseY = clientY - (cursorRef?.current?.clientHeight ?? 0) / 2;
        cursorRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    });
  }, []);

  return <div className="cursor-container" ref={cursorRef} />;
};
