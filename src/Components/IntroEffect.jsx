import React, { useState, useEffect } from 'react';

// --- Premium Intro Component ---
// This component shows the typing tagline, fades out, and flashes.
const PremiumIntro = () => {
  const tagline = "Unlock Your Potential!";
  const [typedTagline, setTypedTagline] = useState('');
  const [typingDone, setTypingDone] = useState(false);
  const [textOpacity, setTextOpacity] = useState(1);
  const [startFlash, setStartFlash] = useState(false);

  // Total duration of the intro sequence
  const INTRO_DURATION_MS = 3500;

  // Typing effect
  useEffect(() => {
    if (typedTagline.length < tagline.length) {
      // 1. Type out the tagline
      const timer = setTimeout(() => {
        setTypedTagline(tagline.substring(0, typedTagline.length + 1));
      }, 100); // 100ms per character
      return () => clearTimeout(timer);
    } else {
      // 2. Typing is done.
      setTypingDone(true);
      
      // 3. Wait 1s.
      const pauseTimer = setTimeout(() => {
        // 4. Disappear text
        setTextOpacity(0);
        
        // 5. Wait 0.5s for text to fade, then flash
        const flashTimer = setTimeout(() => {
          setStartFlash(true);
        }, 500); // This delay should match the text fade duration
        
        return () => clearTimeout(flashTimer);
      }, 1000); // 1s pause after typing
      
      return () => clearTimeout(pauseTimer);
    }
  }, [typedTagline, tagline]);

  return (
    <div className={`fixed inset-0 bg-black z-[100] flex items-center justify-center animate-intro-fade-out ${startFlash ? 'animate-bright-flash' : ''}`}
         style={{ animationDuration: `${INTRO_DURATION_MS}ms` }}
    >
      <h1 
        className={`text-4xl md:text-6xl font-mono text-lime-400 transition-opacity duration-500`}
        style={{ opacity: textOpacity }}
      >
        {typedTagline}
        <span className={`animate-blink ${typingDone ? 'opacity-0' : 'opacity-100'}`}>|</span>
      </h1>
    </div>
  );
};


// --- Main App Component ---
export default function IntroEffect() {
  // State to manage intro visibility
  const [introDone, setIntroDone] = useState(false);
  const INTRO_DURATION_MS = 3500; // This must match the intro's duration

  useEffect(() => {
    // Set introDone to true after the animation finishes
    const timer = setTimeout(() => {
      setIntroDone(true);
    }, INTRO_DURATION_MS); 
    return () => clearTimeout(timer);
  }, []); // Runs only once on mount

  return (
    <div className="bg-black text-gray-200 font-sans antialiased min-h-screen">
      {/* Render PremiumIntro only if intro is NOT done */}
      {!introDone && <PremiumIntro />}
      
      

      <style>{`
        /* --- KEYFRAMES for Intro/Outro --- */
        
        @keyframes bright-flash {
          0% { background-color: rgba(0,0,0,1); }
          50% { background-color: rgba(255,255,255,1); } /* Bright flash */
          100% { background-color: rgba(0,0,0,1); }
        }
        .animate-bright-flash {
          /* This animation lasts 1.0s */
          /* It runs at the *end* of the intro-fade-out animation */
          animation: bright-flash 0.5s ease-out;
        }

        @keyframes intro-fade-out {
          0% { opacity: 1; }
          90% { opacity: 1; } /* Hold visibility for most of the animation */
          100% { opacity: 0; visibility: hidden; } /* Fade out at the very end */
        }
        .animate-intro-fade-out {
          /* The total duration is passed via style prop */
          animation: intro-fade-out forwards; 
        }

        /* --- Blinking Cursor --- */
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite steps(1, end);
        }
      `}</style>
    </div>
  );
}
