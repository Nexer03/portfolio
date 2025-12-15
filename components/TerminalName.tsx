"use client";

import { useEffect, useRef, useState } from "react";

type TerminalNameProps = {
  text: string;
  speed?: number;
};

export default function TerminalName({ text, speed = 150 }: TerminalNameProps) {
  const [displayed, setDisplayed] = useState("");
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    setDisplayed("");

    let index = 0;

    intervalRef.current = window.setInterval(() => {
      index += 1;


      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        if (intervalRef.current) {
          window.clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
      }
    }, speed);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [text, speed]);

  return (
    <h2 className="font-mono text-3xl md:text-5xl lg:text-5xl text-white/90 flex items-center gap-2">

      <span>{displayed}</span>
      <span className="cursor text-white/60 leading-none relative top-[1px]">
        |
      </span>
    </h2>
  );
}
