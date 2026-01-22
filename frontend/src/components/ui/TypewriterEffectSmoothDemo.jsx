"use client";

import { motion, stagger, useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

/* =========================
   TYPEWRITER EFFECT (CHAR-BY-CHAR)
========================= */
export const TypewriterEffect = ({
  words,
  className = "",
  cursorClassName = "",
}) => {
  const wordsArray = words.map((word) => ({
    ...word,
    text: word.text.split(""),
  }));

  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          opacity: 1,
          display: "inline-block",
        },
        {
          duration: 0.3,
          delay: stagger(0.08),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, animate]);

  return (
    <div
      className={`text-base sm:text-xl md:text-3xl lg:text-5xl font-bold text-center ${className}`}
    >
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => (
          <span key={idx} className="inline-block">
            {word.text.map((char, index) => (
              <motion.span
                key={index}
                className={`opacity-0 ${word.className ?? ""}`}
              >
                {char}
              </motion.span>
            ))}
            {/* ✅ SPACE BETWEEN WORDS */}
            {idx !== wordsArray.length - 1 && (
              <span className="inline-block">&nbsp;</span>
            )}
          </span>
        ))}
      </motion.div>

      {/* Cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={`inline-block rounded-sm w-[4px] h-4 md:h-6 lg:h-10 bg-current ml-1 ${cursorClassName}`}
      />
    </div>
  );
};

/* =========================
   TYPEWRITER EFFECT (SMOOTH)
========================= */
export const TypewriterEffectSmooth = ({
  words,
  className = "",
  cursorClassName = "",
}) => {
  return (
    <div className={`flex items-center my-6 ${className}`}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{ width: 0 }}
        whileInView={{ width: "fit-content" }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 0.5,
        }}
      >
        <div
          className="text-xs sm:text-base md:text-xl lg:text-3xl xl:text-5xl font-bold whitespace-nowrap"
        >
          {words.map((word, idx) => (
            <span key={idx} className={word.className}>
              {word.text}
              {/* ✅ SPACE BETWEEN WORDS */}
              {idx !== words.length - 1 && "\u00A0"}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Cursor */}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={`block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-current ml-2 ${cursorClassName}`}
      />
    </div>
  );
};
