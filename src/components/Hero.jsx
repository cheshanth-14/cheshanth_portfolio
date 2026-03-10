import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiInstagram, FiLinkedin, FiDownload, FiChevronDown } from 'react-icons/fi';

const roles = [
    "Computer Science Undergraduate",
    "Full-Stack Developer",
    "React & React Native Developer",
    "Cricket Captain & Badminton Umpire ⚡",
    "Stage Performer 🎭"
];

export default function Hero() {
    const [currentRole, setCurrentRole] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accentTeal/20 rounded-full blur-[120px] animate-spin-slow" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accentViolet/20 rounded-full blur-[120px] animate-spin-slow shadow-[0_0_50px_rgba(124,58,237,0.5)]" style={{ animationDirection: 'reverse', animationDuration: '12s' }} />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 w-full z-10 flex flex-col lg:flex-row-reverse items-center justify-between gap-12 text-center lg:text-left">

                {/* Profile Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15, duration: 0.8 }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    className="relative group w-40 h-40 sm:w-48 sm:h-48 lg:w-72 lg:h-72 shrink-0"
                >
                    {/* Spinning Gradient Border */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accentTeal via-accentViolet to-accentAmber animate-spin-slow" style={{ animationDuration: '4s' }}></div>

                    {/* Inner Image Container (Not Spinning) */}
                    <div className="absolute inset-[3px] rounded-full overflow-hidden border-4 border-bgPrimary bg-bgPrimary z-10 flex items-center justify-center">
                        <img
                            src="./profile_photo.jpg"
                            alt="Jagannithy Cheshanth"
                            className="w-full h-full object-cover object-top scale-[1.3] translate-y-1 transition-transform duration-700 group-hover:scale-[1.4]"
                        />
                    </div>

                    {/* Hover Glow */}
                    <div className="absolute inset-0 rounded-full bg-accentTeal/20 blur-2xl -z-10 group-hover:bg-accentViolet/40 transition-colors duration-500"></div>
                </motion.div>

                {/* Text Content */}
                <div className="flex-1 space-y-6 max-w-full z-20">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                    >
                        <motion.h2
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
                            className="text-accentTeal font-mono text-lg mb-2 tracking-wider flex items-center justify-center lg:justify-start gap-2"
                        >
                            <span className="w-8 h-[1px] bg-accentTeal hidden sm:block"></span> Hello, I'm
                        </motion.h2>
                        <h1 className="text-3xl sm:text-5xl md:text-[3.5rem] lg:text-7xl font-heading font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-accentTeal to-accentViolet mb-4 leading-tight">
                            JAGANNITHY <br className="lg:block" /> CHESHANTH
                        </h1>

                        <div className="h-12 flex items-center justify-center lg:justify-start">
                            <motion.p
                                key={currentRole}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="text-xl sm:text-2xl text-textMuted font-medium"
                            >
                                {roles[currentRole]}
                            </motion.p>
                        </div>
                    </motion.div>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="flex items-center justify-center lg:justify-start space-x-6 py-4"
                    >
                        <SocialIcon href="https://github.com/cheshanth-14" icon={<FiGithub size={24} />} />
                        <SocialIcon href="https://www.instagram.com/cheshanth_14" icon={<FiInstagram size={24} />} />
                        <SocialIcon href="https://www.linkedin.com/in/jagannithy-cheshanth-975128304" icon={<FiLinkedin size={24} />} />
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                    >
                        <a
                            href="#projects"
                            className="w-full sm:w-auto px-8 py-3 bg-accentTeal text-bgPrimary font-bold rounded-lg hover:shadow-[0_0_20px_rgba(0,245,212,0.5)] hover:-translate-y-1 transition-all duration-300"
                        >
                            View My Work
                        </a>
                        <a
                            href="#"
                            className="w-full sm:w-auto px-8 py-3 border-2 border-accentViolet text-textPrimary font-bold rounded-lg hover:bg-accentViolet/10 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <FiDownload /> Download CV
                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
            >
                <a href="#about" className="text-textMuted hover:text-accentTeal transition-colors">
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <FiChevronDown size={32} />
                    </motion.div>
                </a>
            </motion.div>
        </section>
    );
}

const SocialIcon = ({ href, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-textMuted hover:text-accentTeal transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_8px_rgba(0,245,212,0.8)]"
    >
        {icon}
    </a>
);
