import { useState, useEffect } from "react";

export default function useDate() {
  const getCurrentDate = () => {
    const now = new Date();
    return {
      date: now.toLocaleDateString(),
      time: now.toLocaleTimeString(),
    };
  };

  const [current, setCurrent] = useState(getCurrentDate());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(getCurrentDate());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return current;
}