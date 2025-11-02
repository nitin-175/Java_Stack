import React from 'react';

const Icon = ({ children, className = '' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    className={`${className}`}>
    {children}
  </svg>
);
const Search = ({ className = '' }) => (
  <Icon className={className}>
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </Icon>
);
const Users = ({ className = '' }) => (
  <Icon className={className}>
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
    <circle cx="9" cy="7" r="4"></circle>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
  </Icon>
);

const MentorMarquee = () => {
  const mentors = [
    { id: 1, img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGVvcGxlfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=600' },
    { id: 2, img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' },
    { id: 3, img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzR8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' },
    { id: 4, img: 'https://images.unsplash.com/photo-1522556189639-b150ed9c4330?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' },
    { id: 5, img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600' },
  ];

  const marqueeMentors = [...mentors, ...mentors];

  const MarqueeRow = ({ mentors, direction = 'normal' }) => (
    <div className="flex animate-marquee" style={{ animationDirection: direction }}>
      {mentors.map((mentor, i) => (
        <img
          key={i}
          src={mentor.img}
          alt=""
          className=" h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full shadow-lg border-2 border-white object-cover mx-3 flex-shrink-0"
        />
      ))}
    </div>
  );

  return (
    <div className="relative w-full flex flex-col gap-6 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0%,black_10%,black_90%,transparent_100%)]">
      <MarqueeRow mentors={marqueeMentors} />
      <MarqueeRow mentors={marqueeMentors} direction="reverse" />
    </div>
  );
};

const Hero = () => (
  <section
    id="hero"
    className="relative flex flex-col justify-center items-center text-center md:text-left md:grid md:grid-cols-2 min-h-[100vh] px-6 sm:px-10 md:px-16 py-16 bg-orange-50 overflow-hidden"
  >
    {/* background glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-emerald-100/60 via-orange-50 to-orange-50 rounded-full blur-[100px] opacity-70 animate-pulse-slow"></div>

    {/* background pattern */}
    <div className="absolute inset-0 opacity-[0.04] bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2230%22%20height%3D%2230%22%20viewBox%3D%220%200%20100%20100%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M11%2018c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207zm4%202c3.866%200%207-3.134%207-7s-3.134-7-7-7-7%203.134-7%207%203.134%207%207%207z%22%20fill%3D%22%23A0A0A0%22%20fill-opacity%3D%221%22%2F%3E%3C%2Fsvg%3E')]"></div>

    {/* text content */}
    <div className="relative z-10 flex flex-col items-center md:items-start w-full max-w-2xl md:max-w-none px-2 sm:px-4">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight animate-text-reveal-smooth">
        Find Your <br />
        <span className="bg-gradient-to-r from-emerald-700 to-green-900 bg-clip-text text-transparent">
          Perfect Mentor.
        </span>
      </h1>

      <p className="mt-6 text-base sm:text-lg md:text-xl text-gray-600 max-w-none leading-relaxed animate-fade-in-up">
        Get 1-on-1 guidance from world-class experts at top companies.
      </p>

      <form
        className="mt-10 w-full max-w-md relative animate-fade-in-up"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="Search by role, skill, or company"
          className="w-full pl-6 pr-16 py-4 rounded-full text-base sm:text-lg text-gray-900 bg-white/70 border border-gray-300/70 backdrop-blur-sm shadow-lg focus:ring-2 focus:ring-emerald-500 outline-none"
        />
        <button
          type="submit"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 p-3 bg-gray-900 hover:bg-gray-800 rounded-full transition-all duration-300"
        >
          <Search className="w-5 h-5 text-white" />
        </button>
      </form>

      <div className="mt-6 flex items-center justify-center md:justify-start animate-fade-in-up">
        <Users className="w-5 h-5 text-gray-500" />
        <p className="ml-2 text-gray-600 font-medium">
          Join <span className="font-bold text-gray-900">10,000+</span> happy learners
        </p>
      </div>
    </div>

    {/* mentor marquee */}
    <div className="relative z-10 mt-12 md:mt-0 flex justify-center">
      <MentorMarquee />
    </div>

    <style>{`
      @keyframes pulse-slow {
        0%, 100% { transform: scale(1); opacity: 0.7; }
        50% { transform: scale(1.05); opacity: 0.5; }
      }
      .animate-pulse-slow {
        animation: pulse-slow 10s infinite ease-in-out;
      }
      @keyframes text-reveal-smooth {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-text-reveal-smooth {
        animation: text-reveal-smooth 1s ease forwards;
      }
      @keyframes fade-in-up {
        from { opacity: 0; transform: translateY(30px); filter: blur(5px); }
        to { opacity: 1; transform: translateY(0); filter: blur(0); }
      }
      .animate-fade-in-up {
        animation: fade-in-up 1s ease forwards;
      }
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 25s linear infinite;
      }
    `}</style>
  </section>
);

export default function HeroDummy() {
  return (
    <div className="bg-orange-50 text-gray-900 font-sans antialiased">
      <Hero />
    </div>
  );
}
