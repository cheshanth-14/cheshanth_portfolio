import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Scroll spy logic
            const sections = navLinks.map(link => document.querySelector(link.href));
            const scrollPosition = window.scrollY + 100;

            let current = '';
            sections.forEach((section) => {
                if (section && section.offsetTop <= scrollPosition && (section.offsetTop + section.offsetHeight) > scrollPosition) {
                    current = section.getAttribute('id');
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 border-b-[0.5px] ${scrolled ? 'bg-white/5 backdrop-blur-md border-white/10 py-4 shadow-[0_4px_30px_rgba(0,0,0,0.1)]' : 'bg-transparent border-white/5 py-6'
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="text-2xl font-heading font-bold tracking-tighter text-white relative group">
                    JC
                    <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-accentTeal transition-all duration-300 group-hover:w-full drop-shadow-[0_0_8px_rgba(0,245,212,0.8)]"></span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center space-x-8">
                    <ul className="flex space-x-6">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className={`text-sm font-medium transition-colors relative group ${activeSection === link.href.substring(1) ? 'text-accentTeal' : 'text-textMuted hover:text-white'
                                        }`}
                                >
                                    {link.name}
                                    {(activeSection === link.href.substring(1)) && (
                                        <motion.span layoutId="underline" className="absolute -bottom-1.5 left-0 w-full h-0.5 bg-accentTeal drop-shadow-[0_0_5px_rgba(0,245,212,0.8)]" />
                                    )}
                                    {/* Hover effect */}
                                    <span className={`absolute -bottom-1.5 left-0 w-0 h-0.5 bg-accentTeal transition-all duration-300 group-hover:w-full ${activeSection === link.href.substring(1) ? 'hidden' : ''}`}></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center space-x-4 border-l border-white/10 pl-6">
                        <SocialIcon href="https://github.com/cheshanth-14" icon={<FiGithub />} />
                        <SocialIcon href="https://www.instagram.com/cheshanth_14" icon={<FiInstagram />} />
                        <SocialIcon href="https://www.linkedin.com/in/jagannithy-cheshanth-975128304" icon={<FiLinkedin />} />
                    </div>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                </button>
            </div>

            {/* Mobile Nav Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-bgPrimary border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-textPrimary hover:text-accentTeal font-medium py-2"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="flex space-x-6 pt-4 border-t border-white/10">
                                <SocialIcon href="https://github.com/cheshanth-14" icon={<FiGithub />} />
                                <SocialIcon href="https://www.instagram.com/cheshanth_14" icon={<FiInstagram />} />
                                <SocialIcon href="https://www.linkedin.com/in/jagannithy-cheshanth-975128304" icon={<FiLinkedin />} />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}

const SocialIcon = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-textMuted hover:text-accentTeal transition-colors duration-300 hover:drop-shadow-[0_0_8px_rgba(0,245,212,0.8)]"
    >
        {icon}
    </a>
);
