// TypewriterText.tsx
"use client";

import { useRef, useEffect, useState } from "react";
import { useInView } from "framer-motion"; // ✅ Correct import
import Typewriter from "typewriter-effect";

type TypewriterTextProps = {
  text: string;
  className?: string;
};

export default function TypewriterText({
  text,
  className,
}: TypewriterTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 }); // Trigger when 50% visible
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isInView) {
      setShow(true);
    }
  }, [isInView]);

  return (
    <div ref={ref} className={className}>
      {show && (
        <Typewriter
          onInit={(typewriter) => {
            typewriter.typeString(text).start();
          }}
          options={{
            autoStart: true,
            loop: false,
            delay: 60,
            cursor: "", // clean look
          }}
        />
      )}
    </div>
  );
}
