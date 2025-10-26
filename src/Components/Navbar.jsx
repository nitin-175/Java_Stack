import React, { useState, useEffect, useRef } from 'react';

// --- SVG ICONS ---
// Using functional components for icons for better reusability and clean code.

const LogoIcon = (props) => (
    <svg height="32" viewBox="0 0 28 28" width="32" {...props}>
        <path d="M14 0C6.268 0 0 6.268 0 14s6.268 14 14 14 14-6.268 14-14S21.732 0 14 0zm0 24.265C8.34 24.265 3.735 19.66 3.735 14S8.34 3.735 14 3.735 24.265 8.34 24.265 14 19.66 24.265 14 24.265z" fill="currentColor" />
        <path d="M14 7c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 11.2c-2.317 0-4.2-1.883-4.2-4.2s1.883-4.2 4.2-4.2 4.2 1.883 4.2 4.2-1.883 4.2-4.2 4.2z" fill="currentColor" />
    </svg>
);

const MenuIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="4" x2="20" y1="12" y2="12" />
        <line x1="4" x2="20" y1="6" y2="6" />
        <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
);

const XIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
    </svg>
);

const ChevronDownIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m6 9 6 6 6-6" />
    </svg>
);

const SearchIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
);


// --- Icons for Mega Menu ---
const StartupIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 2 7 5-7 5-7-5 7-5z" /><path d="m2 12 10 5 10-5" /><path d="m2 17 10 5 10-5" /></svg>
);
const EnterpriseIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="2" width="18" height="20" rx="2" /><path d="M3 10h18" /><path d="M12 14v4" /><path d="M8 14v4" /><path d="M16 14v4" /></svg>
);
const IndustryIcon = (props) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" /><circle cx="12" cy="10" r="3" /></svg>
);

// --- Command Menu Component ---
const CommandMenu = ({ open, setOpen }) => {
    const commandMenuRef = useRef(null);
    const inputRef = useRef(null);

    // Auto-focus input when menu opens
    useEffect(() => {
        if (open) {
            inputRef.current?.focus();
        }
    }, [open]);

    // Close on escape key
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') setOpen(false);
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [setOpen]);

    // Close on click outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (commandMenuRef.current && !commandMenuRef.current.contains(event.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [setOpen]);

    if (!open) return null;

    return (
        <div className="fixed inset-0  backdrop-blur-sm z-[100] flex items-start justify-center pt-20 animate-fade-in">
            <div ref={commandMenuRef} className="bg-white w-full max-w-xl rounded-xl shadow-2xl animate-slide-in-down overflow-hidden ring-1 ring-black ring-opacity-5">
                <div className="flex items-center px-4 border-b border-gray-200">
                    <SearchIcon className="text-gray-400" />
                    <input
                        ref={inputRef}
                        type="text"
                        placeholder="Search documentation or features..."
                        className="w-full p-4 bg-transparent focus:outline-none text-gray-800"
                    />
                </div>
                <div className="p-4">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Quick Links</p>
                    <div className="space-y-1">
                        <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-100 text-gray-700 transition-colors">Getting Started</a>
                        <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-100 text-gray-700 transition-colors">API Reference</a>
                        <a href="#" className="flex items-center p-2 rounded-md hover:bg-gray-100 text-gray-700 transition-colors">Integrations</a>
                    </div>
                </div>
            </div>
        </div>
    );
};


// --- MAIN APP COMPONENT ---
function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);

    const navRef = useRef(null);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Handle clicks outside of nav to close mobile menu/dropdown
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (navRef.current && !navRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
                setOpenDropdown(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Keyboard shortcut for command menu
    useEffect(() => {
        const handleKeyDown = (event) => {
            if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
                event.preventDefault();
                setIsCommandMenuOpen(prev => !prev);
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const navLinks = [
        { name: 'Practice Problems', href: '#' },
        {
            name: 'JAVA',
            dropdown: {
                links: [
                    { name: 'DSA Sheets', description: "Get the recommended sheets of top Educators.", href: '#', icon: StartupIcon },
                    { name: 'DSA Problems', description: "Find all the DSA most asked and HOT questions here.", href: '#', icon: EnterpriseIcon },
                    { name: 'Concept of the day', description: "Understand a new concept daily.", href: '#', icon: IndustryIcon },
                ],
                featured: {
                    name: 'Visual Learning',
                    description: 'Learn by watching funny animation videos.',
                    href: '#',
                    imageUrl: 'https://placehold.co/600x400/0a101f/ffffff?text=Stellar'
                }
            }
        },
        { name: 'DSA', href: '#' },
        { name: 'About Us', href: '#' },
    ];

    const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm' : 'bg-transparent'
        } ${isMobileMenuOpen ? 'bg-white/95 backdrop-blur-xl' : ''
        }`;

    const linkColorClass = isScrolled || isMobileMenuOpen ? 'text-gray-700' : 'text-white';

    // The main component now includes a wrapper div and the page content for context.
    return (
        <div className="bg-white text-gray-800 font-sans antialiased">
            <CommandMenu open={isCommandMenuOpen} setOpen={setIsCommandMenuOpen} />
            
            <header className={`${headerClasses} animate-slide-in-down-header`} ref={navRef}>
                <div className="container mx-auto px-6 py-3.5">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href="#" className={`flex items-center space-x-2.5 transition-colors duration-300 ${linkColorClass}`}>
                            <LogoIcon className="h-8 w-8" />
                            <span className="text-2xl font-bold tracking-tight">Java Stack</span>
                        </a>

                        {/* Right Aligned Content */}
                        <div className="flex items-center">
                            {/* Desktop Navigation */}
                            <nav className="hidden md:flex items-center space-x-2">
                                {navLinks.map((link) => (
                                    <div
                                        key={link.name}
                                        className="relative px-4 pt-2 pb-6 -mb-4" // BUG FIX: Increased padding-bottom to create a seamless hover area
                                        onMouseEnter={() => link.dropdown && setOpenDropdown(link.name)}
                                        onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
                                    >
                                        <a href={link.href || '#'} className={`group flex items-center space-x-1.5 transition-colors duration-300 ${linkColorClass} hover:text-blue-500`}>
                                            <span>{link.name}</span>
                                            {link.dropdown && <ChevronDownIcon className={`transition-transform duration-300 ease-out ${openDropdown === link.name ? 'rotate-180' : ''}`} />}
                                            <span className={`absolute bottom-4 left-0 w-full h-0.5 bg-blue-500 transition-transform duration-300 scale-x-0 group-hover:scale-x-100 origin-center`}></span>
                                        </a>
                                        {link.dropdown && openDropdown === link.name && (
                                            <div className="absolute top-full left-1/2 -translate-x-1/2 w-[40rem] bg-white rounded-xl shadow-2xl p-2 animate-fade-in-down ring-1 ring-black ring-opacity-5">
                                                <div className="grid grid-cols-2">
                                                    <div className="p-4">
                                                        {link.dropdown.links.map(item => (
                                                            <a key={item.name} href={item.href} className="group flex items-start space-x-4 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200">
                                                                <div className="bg-blue-50 text-blue-600 p-3 rounded-lg mt-1 transition-all duration-300 group-hover:bg-white group-hover:shadow-md group-hover:scale-110">
                                                                    <item.icon className="h-6 w-6" />
                                                                </div>
                                                                <div>
                                                                    <p className="font-semibold text-gray-900">{item.name}</p>
                                                                    <p className="text-sm text-gray-500">{item.description}</p>
                                                                </div>
                                                            </a>
                                                        ))}
                                                    </div>
                                                    <a href={link.dropdown.featured.href} className="group block rounded-lg overflow-hidden relative">
                                                        <img src={link.dropdown.featured.imageUrl} alt="Featured" className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                                        <div className="absolute bottom-0 left-0 p-6">
                                                            <h3 className="text-white font-bold text-lg">
                                                                {link.dropdown.featured.name}
                                                            </h3>
                                                            <p className="text-white/80 text-sm mt-1">{link.dropdown.featured.description}</p>
                                                        </div>
                                                    </a>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </nav>

                            {/* CTA and Mobile Toggle */}
                            <div className="flex items-center space-x-5 md:ml-6">
                                <button onClick={() => setIsCommandMenuOpen(true)} className={`hidden md:flex items-center space-x-2 text-sm ${linkColorClass} hover:text-blue-500 transition-colors p-2 rounded-lg hover:bg-gray-500/10`}>
                                    <SearchIcon />
                                    
                                </button>
                                <a href="#" className={`hidden md:block text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 transform shadow-sm ${isScrolled ? 'bg-blue-600 text-white hover:bg-blue-700 hover:scale-105 ring-2 ring-blue-600 ring-offset-2 ring-offset-white' : 'bg-white text-gray-800 hover:bg-gray-200 hover:scale-105'}`}>
                                    Login
                                </a>
                                <button
                                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                    className={`md:hidden focus:outline-none transition-colors duration-300 ${linkColorClass}`}
                                    aria-label="Toggle menu"
                                >
                                    {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white border-t border-gray-200 animate-fade-in-down">
                        <nav className="flex flex-col px-6 pt-4 pb-8 space-y-2">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <a
                                        href={link.href || '#'}
                                        onClick={(e) => {
                                            if (link.dropdown) {
                                                e.preventDefault();
                                                setOpenDropdown(openDropdown === link.name ? null : link.name);
                                            } else {
                                                setIsMobileMenuOpen(false);
                                            }
                                        }}
                                        className="flex justify-between items-center py-2 text-lg text-gray-800 hover:text-blue-600"
                                    >
                                        {link.name}
                                        {link.dropdown && <ChevronDownIcon className={`transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} />}
                                    </a>
                                    {link.dropdown && openDropdown === link.name && (
                                        <div className="pl-4 pt-2 pb-1 space-y-1">
                                            {link.dropdown.links.map(item => (
                                                <a key={item.name} href={item.href} className="block py-1.5 text-gray-600 hover:text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>
                                                    {item.name}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                            <div className="border-t border-gray-200 pt-4 mt-4 flex flex-col space-y-4">
                                <a href="#" className="w-full text-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700">
                                    Login
                                </a>
                            </div>
                        </nav>
                    </div>
                )}
            </header>

            
        </div>
    );
};

// We add some keyframes for the subtle animations
const style = document.createElement('style');
style.innerHTML = `
  @keyframes fade-in { 0% { opacity: 0; } 100% { opacity: 1; } }
  @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
  @keyframes slide-in-down { 0% { transform: translateY(-20px) scale(0.98); opacity: 0; } 100% { transform: translateY(0) scale(1); opacity: 1; } }
  @keyframes slide-in-down-header { 0% { transform: translateY(-100%); } 100% { transform: translateY(0); } }
  @keyframes pan-animation { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
  
  .animate-fade-in { animation: fade-in 0.3s ease-out forwards; }
  .animate-fade-in-up { animation: fade-in-up 0.8s ease-out 0.2s forwards; opacity: 0; }
  .animate-slide-in-down { animation: slide-in-down 0.3s ease-out forwards; }
  .animate-fade-in-down { animation: slide-in-down 0.3s ease-out forwards; }
  .animate-slide-in-down-header { animation: slide-in-down-header 0.5s ease-out forwards; }
  .bg-pan-animation { background-size: 400% 400%; animation: pan-animation 15s ease infinite; }
`;
document.head.appendChild(style);

export default Navbar;

