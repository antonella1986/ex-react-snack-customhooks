import { useEffect, useRef, useState } from "react";

export default function useCustomPointer(content) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const pointerRef = useRef();

  useEffect(() => {
    const handleMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMove);

    document.body.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.body.style.cursor = "";
    };
  }, []);

  return (
    <div
      ref={pointerRef}
      style={{
        position: "fixed",
        left: pos.x,
        top: pos.y,
        pointerEvents: "none",
        transform: "translate(-50%, -50%)",
        zIndex: 9999,
        fontSize: "2rem",
        userSelect: "none",
      }}
    >
      {content}
    </div>
  );
}