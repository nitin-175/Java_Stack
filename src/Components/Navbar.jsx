import React, { useState, useEffect, useRef } from 'react';

// --- SVG ICONS ---
// A new, simpler logo icon
const LogoIcon = (props) => (
    <svg
        height="32"
        viewBox="0 0 32 32"
        width="32"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        {...props}
    >
        <path d="M22 16c0-5.523-4.477-10-10-10S2 10.477 2 16s4.477 10 10 10" />
        <path d="M30 16c0-5.523-4.477-10-10-10" />
    </svg>
);

const MenuIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
);

const XIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
);

const ChevronDownIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="m6 9 6 6 6-6" />
    </svg>
);

const ArrowRightIcon = (props) => (
    <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M5 12h14" />
        <path d="m12 5 7 7-7 7" />
    </svg>
);

// --- MAIN APP COMPONENT ---
export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);

    const navRef = useRef(null);

    // --- Navigation Links Data ---
    const navLinks = [
        { name: 'Home', href: '#' },
        {
            name: 'Features',
            dropdown: [
                {
                    name: 'Feature One',
                    description: 'A brief description of this cool feature.',
                    href: '#',
                },
                {
                    name: 'Feature Two',
                    description: 'Explore the benefits of our second feature.',
                    href: '#',
                },
                {
                    name: 'Feature Three',
                    description: 'See what this amazing third feature can do.',
                    href: '#',
                },
            ],
        },
        { name: 'Pricing', href: '#' },
        { name: 'About', href: '#' },
    ];

    // --- Event Handlers ---

    // Handle clicks outside of nav to close mobile menu/dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
                setOpenDropdown(null);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // --- Dynamic Classes ---
    const headerClasses = `
    fixed top-4 left-4 right-4 z-50
    max-w-7xl mx-auto
    transition-all duration-300 ease-in-out
    bg-green-950/80 backdrop-blur-lg border border-white/10 shadow-2xl
    rounded-2xl
  `;

    const linkColorClass = 'text-gray-200';

    return (
        <div className="bg-gray-100 font-sans antialiased">
            <header className={headerClasses} ref={navRef}>
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        {/* Logo */}
                        <a
                            href="#"
                            className={`flex items-center space-x-2 transition-colors duration-300 ${linkColorClass}`}
                        >
                            <LogoIcon className="h-8 w-8" />
                            <span className="text-xl font-bold">BrandName</span>
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex items-center space-x-2">
                            {navLinks.map((link) => (
                                <div
                                    key={link.name}
                                    className="relative"
                                    onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                                    onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
                                >
                                    <a
                                        href={link.href || '#'}
                                        className={`
                      group flex items-center space-x-1 px-3 py-2 rounded-md
                      text-sm font-medium transition-colors duration-300
                      ${linkColorClass} hover:text-blue-500
                    `}
                                    >
                                        <span>{link.name}</span>
                                        {link.dropdown && (
                                            <ChevronDownIcon
                                                className={`w-4 h-4 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        )}
                                    </a>

                                    {/* Desktop Dropdown */}
                                    {link.dropdown && openDropdown === link.name && (
                                        <div
                                            className="
                        absolute top-full left-1/2 -translate-x-1/2 w-80
                        bg-gray-900 rounded-xl shadow-2xl p-2
                        animate-fade-in-down ring-1 ring-white/10
                      "
                                        >
                                            <div className="flex flex-col space-y-1">
                                                {link.dropdown.map((item) => (
                                                    <a
                                                        key={item.name}
                                                        href={item.href}
                                                        className="group p-3 rounded-lg hover:bg-gray-800 transition-colors"
                                                    >
                                                        <p className="font-semibold text-gray-100">
                                                            {item.name}
                                                        </p>
                                                        <p className="text-sm text-gray-400">
                                                            {item.description}
                                                        </p>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>

                        {/* CTAs and Mobile Toggle */}
                        <div className="flex items-center space-x-4">
                            {/* Desktop CTAs */}
                            <div className="hidden md:flex items-center space-x-4">
                                <a
                                    href="#"
                                    className={`
                    text-sm font-medium transition-colors duration-300
                    ${linkColorClass} hover:text-blue-500
                  `}
                                >
                                    Sign In
                                </a>
                                <a
                                    href="#"
                                    className={`
                    group flex items-center space-x-2
                    bg-blue-600 text-white px-4 py-2 rounded-lg
                    text-sm font-semibold shadow-md
                    transition-all duration-300 transform
                    hover:bg-blue-700 hover:shadow-lg hover:scale-105
                  `}
                                >
                                    <span>Sign Up</span>
                                    <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </a>
                            </div>

                            {/* Mobile Menu Toggle */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`md:hidden focus:outline-none transition-colors duration-300 ${linkColorClass}`}
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <XIcon className="h-6 w-6" />
                                ) : (
                                    <MenuIcon className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div
                        className="
              md:hidden
              bg-transparent
              border-t border-white/10
              animate-fade-in-down
            "
                    >
                        <nav className="flex flex-col px-4 pt-2 pb-6 space-y-1">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <a
                                        href={link.href || '#'}
                                        onClick={(e) => {
                                            if (link.dropdown) {
                                                e.preventDefault();
                                                setOpenDropdown(
                                                    openDropdown === link.name ? null : link.name
                                                );
                                            } else {
                                                setIsMobileMenuOpen(false);
                                            }
                                        }}
                                        className="flex justify-between items-center py-2 px-3 text-base font-medium text-gray-200 hover:bg-white/10 rounded-md"
                                    >
                                        {link.name}
                                        {link.dropdown && (
                                            <ChevronDownIcon
                                                className={`w-5 h-5 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''
                                                    }`}
                                            />
                                        )}
                                    </a>
                                    {/* Mobile Dropdown */}
                                    {link.dropdown && openDropdown === link.name && (
                                        <div className="pl-4 pt-1 pb-1 space-y-1">
                                            {link.dropdown.map((item) => (
                                                <a
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block py-1.5 px-3 text-gray-400 hover:bg-white/10 rounded-md"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            {/* Mobile CTAs */}
                            <div className="border-t border-white/10 pt-4 mt-4 flex flex-col space-y-3 px-3">
                                <a
                                    href="#"
                                    className="w-full text-center bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700"
                                >
                                    Sign Up
                                </a>
                                <a
                                    href="#"
                                    className="w-full text-center bg-gray-800 text-gray-200 px-5 py-2.5 rounded-lg font-semibold hover:bg-gray-700"
                                >
                                    Sign In
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </header>

            
        </div>
    );
}

// We add some keyframes for the subtle animations
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
  @keyframes fade-in-up { 
    0% { opacity: 0; transform: translateY(30px); } 
    100% { opacity: 1; transform: translateY(0); } 
  }
  @keyframes fade-in-down { 
    0% { transform: translateY(-10px) scale(0.98); opacity: 0; } 
    100% { transform: translateY(0) scale(1); opacity: 1; } 
  }
  @keyframes pan-animation { 
    0% { background-position: 0% 50%; } 
    50% { background-position: 100% 50%; } 
    100% { background-position: 0% 50%; } 
  }
  
  .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
  .animate-fade-in-up { animation: fade-in-up 0.7s ease-out 0.2s forwards; opacity: 0; }
  .animate-fade-in-down { 
    animation: fade-in-down 0.2s ease-out forwards; 
    transform-origin: top center;
  }
  .bg-pan-animation { 
    background-size: 400% 400%; 
    animation: pan-animation 15s ease infinite; 
  }
`;
document.head.appendChild(style);

