import { useEffect, useState } from "react";

const chars = "!<>-_\\/[]{}—=+*^?#________";

export default function EncryptedText({
  text,
  encryptedClassName = "",
  revealedClassName = "",
  revealDelayMs = 40,
  pauseAfterReveal = 1500, // time before re-encrypt
}) {
  const [displayText, setDisplayText] = useState("");
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    let i = 0;
    let interval;
    let timeout;

    const startEncryption = () => {
      setRevealed(false);
      i = 0;

      interval = setInterval(() => {
        if (i <= text.length) {
          setDisplayText(
            text
              .split("")
              .map((char, index) =>
                index < i
                  ? char
                  : chars[Math.floor(Math.random() * chars.length)]
              )
              .join("")
          );
          i++;
        } else {
          clearInterval(interval);
          setDisplayText(text);
          setRevealed(true);

          // Restart after pause
          timeout = setTimeout(startEncryption, pauseAfterReveal);
        }
      }, revealDelayMs);
    };

    startEncryption();

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, revealDelayMs, pauseAfterReveal]);

  return (
    <span className={revealed ? revealedClassName : encryptedClassName}>
      {displayText}
    </span>
  );
}
