import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
    { label: 'Projects Built', value: 4, suffix: '+' },
    { label: 'Technologies Mastered', value: 10, suffix: '+' },
    { label: 'Languages Spoken', value: 3, suffix: '' },
    { label: 'Accredited Umpire 😄', value: 1, suffix: '' },
];

function AnimatedCounter({ value, suffix }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const duration = 2000;
            const end = value;
            const stepTime = Math.abs(Math.floor(duration / end));

            const timer = setInterval(() => {
                start += 1;
                setCount(start);
                if (start === end) clearInterval(timer);
            }, stepTime);

            return () => clearInterval(timer);
        }
    }, [value, inView]);

    return (
        <span ref={ref}>
            {count}{suffix}
        </span>
    );
}

export default function About() {
    return (
        <section id="about" className="py-24 relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center lg:text-left"
                >
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-accentTeal to-accentViolet inline-block">
                        About Me
                    </h2>
                    <div className="w-24 h-1 bg-accentAmber mt-4 mx-auto lg:mx-0 rounded-full drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="grid grid-cols-2 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15, type: "spring", stiffness: 100 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                                className="glass-card p-6 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 group hover:border-accentTeal/50 transition-all duration-300 relative overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
                            >
                                <div className="absolute inset-0 bg-accentTeal/5 blur-xl group-hover:bg-accentTeal/20 transition-all duration-500 rounded-2xl -z-10" />
                                <h3 className="text-4xl font-black text-accentTeal font-mono drop-shadow-[0_0_10px_rgba(0,245,212,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(0,245,212,0.8)] transition-all">
                                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                </h3>
                                <p className="text-sm text-textMuted font-medium tracking-wide group-hover:text-white transition-colors">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Bio Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="glass-card p-8 lg:p-10 rounded-3xl relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-accentViolet/10 blur-[80px] -z-10" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accentAmber/10 blur-[80px] -z-10" />

                        <motion.p
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
                            className="text-lg lg:text-xl text-textPrimary leading-relaxed font-light"
                        >
                            I'm a motivated Computer Science undergraduate at the <span className="text-accentTeal font-medium">Information Institute of Technology</span> in Sri Lanka, affiliated with the <span className="text-accentViolet font-medium">University of Westminster</span> in the UK.
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}
                            className="text-lg lg:text-xl text-textMuted leading-relaxed font-light mt-6"
                        >
                            Passionate about learning new technologies, working with professionals, and growing as a developer to do creative work in the tech industry. I blend technical logic with creative problem-solving to build applications that are not only functional but <span className="text-accentAmber font-medium drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]">unforgettable</span>.
                        </motion.p>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
