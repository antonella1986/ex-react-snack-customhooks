import { useEffect, useRef, useState } from "react";

export default function useCustomPointer() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: position.x,
        top: position.y,
        cursor: "none",
        transform: "translate(-50%, -50%)",
      }}
    >
      {component}
    </div>
  );
}