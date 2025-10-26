import React, {  useEffect } from 'react';

// --- Icon Components (Mocked for single-file demo) ---
// No icons needed for this version

// --- Reusable Button Component ---
const Button = ({ children, variant = 'primary', className = '' }) => {
  const baseStyle = 'px-10 py-4 rounded-full font-bold text-xl transition-all duration-700 transform hover:scale-105 active:scale-95 relative overflow-hidden group tracking-wide shadow-xl';
  const variants = {
    primary: 'bg-gradient-to-r from-emerald-600 to-teal-700 text-white hover:from-emerald-700 hover:to-teal-800 hover:shadow-2xl hover:shadow-emerald-600/50 border border-emerald-500/50',
    secondary: 'bg-gray-800 text-gray-200 hover:bg-gray-700 border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl hover:shadow-gray-600/30',
  };
  return (
    <a href="#" className={`${baseStyle} ${variants[variant]} ${className}`}>
      {/* Dynamic light streak on hover - made slower */}
      <span className="absolute inset-0 block bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 transform -skew-x-12 -translate-x-full group-hover:translate-x-full"></span>
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
    </a>
  );
};

// --- Hero Section ---
const Hero = () => {
  const headlinePart1 = "Java.";
  const headlinePart2 = "Perfected.";
  const subHeadlineText = "An elite, AI-driven cloud platform for demanding applications. Unmatched speed, security, and scale.";

  // Effect for mouse-tracking spotlight and 3D tilt
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY, currentTarget } = e;
      const { offsetWidth, offsetHeight } = currentTarget;
      
      const xPos = (clientX / offsetWidth) - 0.5;
      const yPos = (clientY / offsetHeight) - 0.5;

      // 3D Tilt: Max 8 degrees rotation
      const rotateY = (xPos * 16).toFixed(2);
      const rotateX = (-yPos * 16).toFixed(2);
      
      // Spotlight
      const spotlightX = (clientX / offsetWidth) * 100;
      const spotlightY = (clientY / offsetHeight) * 100;

      currentTarget.style.setProperty('--rotateX', `${rotateX}deg`);
      currentTarget.style.setProperty('--rotateY', `${rotateY}deg`);
      currentTarget.style.setProperty('--spotlightX', `${spotlightX}%`);
      currentTarget.style.setProperty('--spotlightY', `${spotlightY}%`);
    };

    const section = document.getElementById('hero-section');
    section.addEventListener('mousemove', handleMouseMove);

    return () => {
      section.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section 
      id="hero-section"
      className="py-24 md:py-48 bg-gradient-to-br from-gray-950 via-emerald-950 to-black relative overflow-hidden min-h-screen flex items-center justify-center font-serif"
      style={{ perspective: '2000px' }} // Added for 3D effect
    >
      {/* Mouse-follow spotlight */}
      <div 
        className="absolute inset-0 z-0 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(600px circle at var(--spotlightX) var(--spotlightY), rgba(255, 255, 255, 0.03), transparent 40%)`
        }}
      ></div>

      {/* ULTRA-PREMIUM BACKGROUND ELEMENTS */}
      {/* Large, drifting nebula glows - NEW COLORS & ANIMATION */}
      <div className="absolute top-[10%] left-[5%] w-[600px] h-[600px] bg-emerald-600/30 rounded-full filter blur-[280px] opacity-40 animate-pulse-ultra animation-delay-0"></div>
      <div className="absolute bottom-[15%] right-[8%] w-[700px] h-[700px] bg-teal-700/20 rounded-full filter blur-[320px] opacity-35 animate-pulse-ultra animation-delay-2000" style={{animationDirection: 'alternate-reverse'}}></div>
      <div className="absolute top-[40%] left-[30%] w-[500px] h-[500px] bg-gray-500/20 rounded-full filter blur-[250px] opacity-30 animate-pulse-ultra animation-delay-4000"></div>

      {/* Dynamic Star Dust Field (simulated with more, smaller divs) */}
      {[...Array(100)].map((_, i) => ( // More particles
        <div
          key={i}
          className="absolute rounded-full bg-white/70"
          style={{
            width: `${Math.random() * 1.5 + 0.5}px`, // 0.5-2px
            height: `${Math.random() * 1.5 + 0.5}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `sparkle-float ${Math.random() * 20 + 10}s infinite ease-in-out alternate-reverse ${Math.random() * 10}s, particle-drift ${Math.random() * 60 + 30}s linear infinite`, // Added particle-drift
            opacity: `${Math.random() * 0.7 + 0.3}`, // 0.3-1.0
            filter: `blur(${Math.random() * 0.8}px)`, // 0-0.8px blur
            zIndex: 0
          }}
        ></div>
      ))}
      {[...Array(60)].map((_, i) => ( // Larger, more distant "stars"
        <div
          key={`l-${i}`}
          className="absolute rounded-full bg-emerald-200/30"
          style={{
            width: `${Math.random() * 3 + 1}px`, // 1-4px
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `sparkle-float ${Math.random() * 30 + 15}s infinite ease-in-out alternate ${Math.random() * 15}s, particle-drift ${Math.random() * 80 + 40}s linear infinite`, // Added particle-drift
            opacity: `${Math.random() * 0.5 + 0.1}`, // 0.1-0.6
            filter: `blur(${Math.random() * 1.5 + 0.5}px)`, // 0.5-2px blur
            zIndex: 0
          }}
        ></div>
      ))}
      {/* Subtle "Electric" Lines/Streaks - NEW BACKGROUND EFFECT */}
      {[...Array(7)].map((_, i) => (
        <div
          key={`line-${i}`}
          className="absolute h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-0 animate-light-streak"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            top: `${Math.random() * 90 + 5}%`,
            left: `${Math.random() * 90 + 5}%`,
            animationDelay: `${Math.random() * 10}s`,
            transform: `rotate(${Math.random() * 360}deg)`,
            zIndex: 0,
            filter: `blur(${Math.random() * 1 + 0.5}px)`
          }}
        ></div>
      ))}

      {/* Shooting Stars */}
      {[...Array(5)].map((_, i) => (
        <div
          key={`ss-${i}`}
          className="absolute h-[2px] w-[150px] bg-gradient-to-r from-white/70 to-transparent"
          style={{
            top: `${Math.random() * 100}%`,
            left: `-150px`,
            animation: `shooting-star ${Math.random() * 5 + 3}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`,
            opacity: 0.8,
            zIndex: 0,
            transform: 'rotate(-20deg)'
          }}
        ></div>
      ))}


      {/* Subtle radial vignette - NEW COLORS */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/80 opacity-80 z-0"></div>

      <div 
        className="relative z-10 max-w-7xl mx-auto text-center px-4 md:px-8 transition-transform duration-300 ease-out"
        style={{ transform: 'rotateX(var(--rotateX, 0)) rotateY(var(--rotateY, 0))' }}
      >
        {/* Animated Headline - NO HOVER ANIMATIONS, PERMANENT GRADIENT */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-wider leading-tight drop-shadow-2xl relative z-10 text-shadow-platinum">
            <span
              className="inline-block opacity-0 animate-text-reveal-smooth"
              style={{ animationDelay: `0.2s` }}
            >
              {headlinePart1}
            </span>
          <span 
            className="bg-clip-text text-transparent bg-gradient-to-r from-gray-200 via-white to-gray-300 inline-block opacity-0 animate-text-reveal-smooth" 
            style={{ animationDelay: `0.4s`, backgroundSize: '200% auto' }}
          >
            {' '}
            {headlinePart2}
          </span>
        </h1>

        {/* Animated Sub-headline - REDUCED CONTENT */}
        <p className="mt-8 text-md md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed md:leading-loose relative z-10 font-normal opacity-0 animate-fade-in-up" style={{ animationDelay: `0.8s` }}>
          {subHeadlineText}
        </p>

        {/* Animated Buttons - REDUCED CONTENT */}
        <div className="mt-16 flex flex-col sm:flex-row justify-center gap-8 relative z-10 opacity-0 animate-fade-in-up" style={{ animationDelay: `1.2s` }}>
          <Button variant="primary" className="flex items-center justify-center text-xl">
            Start Now
          </Button>
          <Button variant="secondary" className="text-xl">
            Book Demo
          </Button>
        </div>
      </div>
    </section>
  );
};

// --- Main App Component ---
export default function HeroDummy() {
  return (
    <div className="bg-black text-gray-100 font-serif antialiased">
      <main>
        <Hero />
      </main>
      <style>{`
        /* Custom text shadow for platinum effect */
        .text-shadow-platinum {
          text-shadow: 0 0 10px rgba(255,255,255,0.4), 0 0 20px rgba(192,192,192,0.3);
        }

        /* ULTRA-PREMIUM KEYFRAMES AND ANIMATIONS */

        /* Background Glow Pulse - NEW DRIFTING EFFECT */
        @keyframes pulse-ultra {
          0%, 100% {
            transform: scale(1) translate(0, 0);
            opacity: 0.4;
          }
          50% {
            transform: scale(1.1) translate(5vw, -5vh);
            opacity: 0.6;
          }
        }
        .animate-pulse-ultra {
          animation: pulse-ultra 20s infinite ease-in-out alternate;
        }

        /* Particle Float Animation (subtle wobble/breath) */
        @keyframes sparkle-float {
          0% {
            transform: translate(0, 0) scale(1);
          }
          25% {
            transform: translate(0.5vw, 0.5vh) scale(1.05);
          }
          50% {
            transform: translate(0, -0.5vh) scale(0.95);
          }
          75% {
            transform: translate(-0.5vw, 0.5vh) scale(1.02);
          }
          100% {
            transform: translate(0, 0) scale(1);
          }
        }

        /* NEW: Particle Drift Animation for subtle background movement */
        @keyframes particle-drift {
          0% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(2vw) translateY(3vh); }
          50% { transform: translateX(0) translateY(-2vh); }
          75% { transform: translateX(-3vw) translateY(2vh); }
          100% { transform: translateX(0) translateY(0); }
        }

        /* NEW: Light Streak Animation */
        @keyframes light-streak {
          0%, 100% { opacity: 0; transform: translateX(-100%) rotate(var(--random-rotation, 0deg)); }
          20% { opacity: 0.4; transform: translateX(0%) rotate(var(--random-rotation, 0deg)); }
          40% { opacity: 0; transform: translateX(100%) rotate(var(--random-rotation, 0deg)); }
        }
        .animate-light-streak {
          animation: light-streak 8s ease-out infinite;
        }


        /* Shooting Star Animation */
        @keyframes shooting-star {
          0% {
            transform: translateX(0) rotate(-20deg);
            opacity: 0.8;
          }
          100% {
            transform: translateX(calc(100vw + 150px)) rotate(-20deg);
            opacity: 0;
          }
        }

        /* Text Reveal Animation (word by word) - NEW SMOOTHER VERSION */
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
          animation: text-reveal-smooth 1.2s cubic-bezier(0.19, 1, 0.22, 1) forwards; /* Ease-out quint */
        }

        /* Fade In Up Animation */
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
          animation: fade-in-up 1s ease-out forwards;
        }

        /* Animation delays for sequenced animations */
        .animation-delay-0 { animation-delay: 0s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  );
}

