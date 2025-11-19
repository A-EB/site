// src/components/PasswordFinder.jsx
import { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../i18n.jsx';

const CHARSET =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_.!@#$%&/ ';

function PasswordFinder() {
  const { lang } = useLanguage();

  const targetText =
    lang === 'fr'
      ? 'A EB - Bienvenue sur mon site portfolio !'
      : 'A EB - Welcome to my portfolio site!';

  const [displayText, setDisplayText] = useState(() =>
    targetText.replace(/./g, (ch) => (ch === ' ' ? ' ' : '•')),
  );
  const [isScrambling, setIsScrambling] = useState(true);

  const indexRef = useRef(0);

  // Reset when language / target text changes
  useEffect(() => {
    indexRef.current = 0;
    setIsScrambling(true);
    setDisplayText(
      targetText.replace(/./g, (ch) => (ch === ' ' ? ' ' : '•')),
    );

    const maxFramesPerChar = 1; // single fast flip per character
    let frameForChar = 0;

    const interval = setInterval(() => {
      const currentIndex = indexRef.current;

      setDisplayText((prev) => {
        const chars = prev.split('');

        for (let i = 0; i < targetText.length; i += 1) {
          const targetChar = targetText[i];

          if (i < currentIndex) {
            // already "found" characters
            chars[i] = targetChar;
          } else if (i === currentIndex && targetChar !== ' ') {
            // current character: keep flipping
            chars[i] =
              CHARSET[Math.floor(Math.random() * CHARSET.length)];
          } else if (targetChar === ' ') {
            chars[i] = ' ';
          } else if (chars[i] === ' ' || chars[i] === '•') {
            // future characters: sometimes random noise
            chars[i] =
              CHARSET[Math.floor(Math.random() * CHARSET.length)];
          }
        }

        return chars.join('');
      });
      setIsScrambling(currentIndex < targetText.length);

      if (currentIndex < targetText.length) {
        // still finding characters
        frameForChar += 1;
        if (frameForChar >= maxFramesPerChar) {
          frameForChar = 0;
          indexRef.current += 1;
        }
      } else {
        // full password found: stop animation
        setIsScrambling(false);
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [targetText]);

  return (
    <span className={`password-finder-text ${isScrambling ? 'scrambling' : ''}`}>
      {displayText}
    </span>
  );
}

export default PasswordFinder;
