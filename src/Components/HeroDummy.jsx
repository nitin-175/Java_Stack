import React, { useState, useEffect } from 'react';

// --- Icon Component (Mocked for single-file demo) ---
const Icon = ({ children, className = '' }) => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${className}`}>{children}</svg>;
const Search = ({ className = '' }) => <Icon className={className}><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></Icon>;

// --- NEW Human Coder SVG Animation ---
const HumanCoderAnimation = () => {
  return (
    <div className="w-full flex justify-center items-center h-40 mb-4 px-4">
      <svg 
        viewBox="0 0 100 60" 
        className="h-full w-full" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* --- DEFINITIONS for Gradient Lighting --- */}
        <defs>
          <linearGradient id="monitor-light-glow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'rgb(163 230 53)', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: 'rgb(100 116 139)', stopOpacity: 0.6 }} />
          </linearGradient>
          <linearGradient id="skin-shadow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: 'rgb(255 240 210)', stopOpacity: 1 }} /> {/* Brighter side */}
            <stop offset="100%" style={{ stopColor: 'rgb(255 224 189)', stopOpacity: 1 }} /> {/* Darker side */}
          </linearGradient>
        </defs>

        {/* Chair */}
        <path d="M 20 58 L 10 58 A 5 5 0 0 1 10 48 L 20 48 V 40 H 25 V 48 L 35 48 A 5 5 0 0 1 35 58 Z" fill="rgb(30 41 59)" stroke="rgb(100 116 139)"/>
        <path d="M 15 40 L 15 30 L 25 30 L 25 40 Z" fill="rgb(30 41 59)" stroke="rgb(100 116 139)" />

        {/* Desk */}
        <rect x="0" y="38" width="100" height="8" rx="2" fill="rgb(30 41 59)" stroke="rgb(100 116 139)" />
        
        {/* Coffee Mug */}
        <path d="M 85 40 L 95 40 A 2 2 0 0 1 97 42 L 97 44 A 2 2 0 0 1 95 46 L 85 46 A 2 2 0 0 1 83 44 L 83 42 A 2 2 0 0 1 85 40 Z" fill="rgb(17 24 39)" stroke="rgb(100 116 139)" />
        <path d="M 97 42 L 99 42 A 1 1 0 0 1 100 43 L 100 43 A 1 1 0 0 1 99 44 L 97 44" stroke="rgb(100 116 139)" />
        {/* Steam */}
        <path d="M 88 38 Q 90 34 88 30" stroke="rgb(100 116 139 / 0.8)" strokeWidth="0.5" className="animate-steam" />
        <path d="M 92 38 Q 90 34 92 30" stroke="rgb(100 116 139 / 0.8)" strokeWidth="0.5" className="animate-steam" style={{ animationDelay: '0.5s' }} />
        
        {/* Monitor */}
        <rect x="35" y="15" width="30" height="15" rx="2" fill="rgb(17 24 39)" stroke="rgb(100 116 139)" />
        <path d="M 50 30 L 50 38" stroke="rgb(100 116 139)" />
        <path d="M 45 38 L 55 38" stroke="rgb(100 116 139)" />
        <rect 
          x="37" y="17" width="26" height="11" 
          fill="rgb(163 230 53 / 0.15)"
          stroke="rgb(163 230 53 / 0.6)" 
          className="animate-monitor-glow"
        />

        {/* --- Person (with new animations and lighting) --- */}
        <g className="animate-head-bob">
          {/* Head and Hair */}
          <circle cx="78" cy="18" r="6" fill="url(#skin-shadow)" stroke="url(#monitor-light-glow)" /> {/* Face with gradient */}
          <path d="M 72 15 C 70 10 75 8 80 10 C 85 8 90 10 88 15 C 85 20 75 20 72 15 Z" fill="rgb(50 50 50)" stroke="rgb(163 230 53 / 0.5)" /> {/* Hair */}
        </g>
        
        {/* Body */}
        <path d="M 78 24 L 78 35 C 78 40 70 42 65 42 L 60 42" stroke="url(#monitor-light-glow)" /> {/* Torso with gradient */}
        
        {/* Arms (Animated) */}
        <path d="M 78 30 Q 68 30 63 33" stroke="url(#monitor-light-glow)" className="animate-typing-arm-1" /> {/* Arm 1 */}
        <path d="M 78 33 Q 70 34 65 37" stroke="url(#monitor-light-glow)" className="animate-typing-arm-2" /> {/* Arm 2 */}

        {/* Hands (Stylized) */}
        <circle cx="63" cy="33" r="1.5" fill="url(#skin-shadow)" stroke="url(#monitor-light-glow)" className="animate-typing-hand-1" />
        <circle cx="65" cy="37" r="1.5" fill="url(#skin-shadow)" stroke="url(#monitor-light-glow)" className="animate-typing-hand-2" />

        {/* Keyboard (Subtle) */}
        <rect x="40" y="40" width="20" height="4" rx="1" fill="rgb(17 24 39)" stroke="rgb(100 116 139)" />
      </svg>
    </div>
  );
};

// --- Dummy Coder Component ---
const DummyCoder = () => {
  const codeString = `public class Greet {
  public static void main(String[] args) {
    System.out.println("Java. Perfected.");
  }
}`;
  const [typedCode, setTypedCode] = useState('');
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < codeString.length) {
      const timer = setTimeout(() => {
        setTypedCode((prev) => prev + codeString[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 50 + (Math.random() * 50)); // Add random delay for realistic typing
      return () => clearTimeout(timer);
    } else {
      // Optional: Reset animation after a delay
      const resetTimer = setTimeout(() => {
         setTypedCode('');
         setCharIndex(0);
      }, 5000); // Wait 5s before looping
      return () => clearTimeout(resetTimer);
    }
  }, [charIndex, codeString]);

  return (
    <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-lime-300 shadow-inner border border-gray-700/50 mb-6 min-h-[120px]">
      <pre className="whitespace-pre-wrap">
        {typedCode}
        <span className="animate-blink text-lime-400">|</span>
      </pre>
    </div>
  );
};


// --- Hero Section ---
const Hero = () => {
  const headlinePart1 = "Java.";
  const headlinePart2 = "Perfected.";
  const subHeadlineText = "The ultimate learning companion for developers."; // New sub-headline
  // Old sub-headline, new prompt

  return (
    <section 
      id="hero-section"
      className="py-16 md:py-32 bg-black relative overflow-hidden min-h-screen flex items-center justify-center font-sans" // Reduced vertical padding
    >
      {/* --- NEW MODERN BACKGROUND --- */}
      {/* 1. Digital Grid Lines */}
      <div className="absolute inset-0 z-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(60, 255, 60, 0.2) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(60, 255, 60, 0.2) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px',
        animation: 'grid-pan 30s linear infinite',
        transform: 'perspective(600px) rotateX(45deg)',
      }}></div>
      
      {/* 2. "Digital Flicker" Particles */}
      {[...Array(120)].map((_, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-[2px] bg-lime-400/80"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `digital-flicker ${Math.random() * 5 + 3}s infinite steps(1, end) ${Math.random() * 3}s`,
            opacity: 0,
            boxShadow: '0 0 5px 1px rgba(163, 230, 53, 0.7)',
            zIndex: 0
          }}
        ></div>
      ))}
       {[...Array(50)].map((_, i) => (
        <div
          key={`l-${i}`}
          className="absolute w-1 h-1 bg-gray-600/50"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `digital-flicker ${Math.random() * 4 + 2}s infinite steps(1, end) ${Math.random() * 2}s`,
            opacity: 0,
            zIndex: 0
          }}
        ></div>
      ))}

      {/* --- NEW MODERN LAYOUT --- */}
      
      <div 
        className="relative z-10 max-w-7xl w-full mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-16 items-start"
      >
        {/* LEFT COLUMN: Headline */}
        <div className="text-center md:text-left">
          <h1 className="text-5xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter leading-none drop-shadow-lg relative z-10 text-white">
              <span
                className="block text-white font-light opacity-0 animate-text-reveal-smooth" // New font weight
                style={{ animationDelay: `0.1s` }}
              >
                {headlinePart1}
              </span>
            <span 
              className="text-lime-400 block opacity-0 animate-text-reveal-smooth" // Changed to block
              style={{ animationDelay: `0.3s` }}
            >
              {headlinePart2}
            </span>
          </h1>
          <p className="mt-8 text-md md:text-xl text-gray-400 max-w-lg mx-auto md:mx-0 relative z-10 font-light opacity-0 animate-fade-in-up" style={{ animationDelay: `0.6s` }}>
            {subHeadlineText}
          </p>
        </div>

        {/* RIGHT COLUMN: Search Card */}
        <div className="relative z-10 opacity-0 animate-fade-in-up w-full max-w-md mx-auto md:max-w-none" style={{ animationDelay: `0.9s` }}>
          <div className="bg-gray-800/30 backdrop-blur-lg rounded-2xl border border-gray-700/50 shadow-2xl p-8">
            
            {/* --- NEW HUMAN CODER ANIMATION --- */}
            <HumanCoderAnimation />
            <DummyCoder />

            
            <form className="relative flex flex-col items-center" onSubmit={(e) => e.preventDefault()}>
              <div className="relative w-full">
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500 pointer-events-none" />
                <input 
                  type="text" 
                  placeholder="e.g., 'Concurrency', 'Generics'"
                  className="w-full pl-14 pr-4 py-4 rounded-xl text-lg text-gray-200 bg-gray-900/80 border border-gray-700/70 backdrop-blur-sm shadow-lg focus:outline-none focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition-all duration-300" // Modernized style
                />
              </div>
              <button 
                type="submit" 
                className="w-full mt-4 px-8 py-4 rounded-xl font-semibold text-lg text-black bg-lime-400 hover:bg-lime-300 shadow-xl shadow-lime-500/30 hover:shadow-lime-400/50 transition-all duration-500 transform hover:scale-105 active:scale-95" // Modernized style
              >
                Learn
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};


// --- Main App Component ---
export default function HeroDummy() {
  return (
    <div className="bg-black text-gray-200 font-sans antialiased"> {/* Changed to dark theme */}
      <main>
        <Hero />
      </main>
      <style>{`

        {/* --- NEW SVG ANIMATIONS --- */}
        @keyframes typing-arm-1 {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(1.5px) rotate(2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-typing-arm-1 {
          animation: typing-arm-1 0.7s infinite ease-in-out;
          transform-origin: 78px 30px; /* Origin near shoulder */
        }
        
        @keyframes typing-arm-2 {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-1.5px) rotate(-2deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .animate-typing-arm-2 {
          animation: typing-arm-2 0.7s infinite ease-in-out 0.35s;
          transform-origin: 78px 33px; /* Origin near shoulder */
        }

        @keyframes typing-hand-1 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(1.5px); }
          100% { transform: translateY(0px); }
        }
        .animate-typing-hand-1 {
          animation: typing-hand-1 0.7s infinite ease-in-out;
        }
        
        @keyframes typing-hand-2 {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-1.5px); }
          100% { transform: translateY(0px); }
        }
        .animate-typing-hand-2 {
          animation: typing-hand-2 0.7s infinite ease-in-out 0.35s;
        }

        @keyframes monitor-glow {
          0% { fill: rgb(163 230 53 / 0.15); stroke: rgb(163 230 53 / 0.6); }
          50% { fill: rgb(163 230 53 / 0.3); stroke: rgb(163 230 53 / 0.9); } /* Brighter peak */
          100% { fill: rgb(163 230 53 / 0.15); stroke: rgb(163 230 53 / 0.6); }
        }
        .animate-monitor-glow {
          animation: monitor-glow 2.5s infinite ease-in-out;
        }

        @keyframes head-bob {
          0% { transform: translateY(0) rotate(0); }
          25% { transform: translateY(0.5px) rotate(1deg); } /* Look down-right */
          75% { transform: translateY(0) rotate(-1deg); } /* Look up-left */
          100% { transform: translateY(0) rotate(0); }
        }
        .animate-head-bob {
          animation: head-bob 3s infinite ease-in-out;
          transform-origin: 78px 24px; /* Base of neck */
        }

        @keyframes steam {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          100% { transform: translateY(-10px) scale(1.5); opacity: 0; }
        }
        .animate-steam {
          animation: steam 2s infinite linear;
          transform-origin: 88px 38px;
        }


        /* --- TEXT REVEAL ANIMATIONS (Unchanged) --- */

        @keyframes text-reveal-smooth {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-text-reveal-smooth {
          animation: text-reveal-smooth 1s cubic-bezier(0.19, 1, 0.22, 1) forwards;
        }

        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0px);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.9s ease-out forwards;
        }

        /* Animation delays for sequenced animations */
        .animation-delay-0 { animation-delay: 0s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}

