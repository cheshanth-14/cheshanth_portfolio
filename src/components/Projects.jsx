import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

const projects = [
    {
        id: "01",
        title: "🐾 Pet Buddy Website",
        date: "2025",
        tags: ["React", "Tailwind CSS", "SVG", "Animation", "Responsive"],
        desc: "Built a pet services landing page with React and Tailwind CSS. Features custom SVG logo/illustrations, fully responsive layout, and smooth animated micro-interactions.",
        demoLink: "http://pettbuddy.lk/",
        githubLink: "https://github.com/cheshanth-14"
    },
    {
        id: "02",
        title: "🏠 Estate Agent App",
        date: "2024–2025",
        tags: ["React", "CSS", "Real Estate", "Responsive"],
        desc: "A real estate web application built with React. Browse property listings, filter by location and price, and view detailed property pages with image galleries and agent contact info.",
        demoLink: "https://cheshanth-14.github.io/estate-agent-app/",
        githubLink: "https://github.com/cheshanth-14/estate-agent-app"
    },
    {
        id: "03",
        title: "🚗 Traffic Flow Analysis",
        date: "2024–2025",
        tags: ["Python", "Tkinter", "CSV", "Data Visualization"],
        desc: "Python-based app analyzing traffic data from CSV files. Generates vehicle count stats and peak hour reports with Tkinter visualizations and automated batch processing.",
    },
    {
        id: "04",
        title: "🔬 Percolation Simulation",
        date: "2023–2024",
        tags: ["Python", "Algorithms", "Grid Systems"],
        desc: "Generates random value grids, detects column-wise percolation (top-to-bottom connectivity), and saves results to text files.",
    }
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center lg:text-left"
                >
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-accentTeal to-accentViolet inline-block">
                        Featured Projects
                    </h2>
                    <div className="w-48 h-1 bg-accentAmber mt-4 mx-auto lg:mx-0 rounded-full drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -10, rotateX: 2, rotateY: -2 }}
                            className="glass-card relative flex flex-col h-full rounded-2xl overflow-hidden group hover:shadow-[0_20px_40px_-15px_rgba(0,245,212,0.3)] border-t border-t-transparent hover:border-t-accentTeal transition-all duration-300"
                            style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accentTeal to-accentViolet opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            <div className="p-8 flex flex-col flex-1 z-10">
                                <div className="flex justify-between items-start mb-6">
                                    <span className="text-4xl font-mono font-black text-white/10 group-hover:text-accentTeal/20 transition-colors drop-shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                                        {project.id}
                                    </span>
                                </div>

                                <h3 className="text-xl font-heading font-bold text-textPrimary mb-2 group-hover:text-accentTeal transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-accentViolet text-sm font-mono mb-4">
                                    {project.date}
                                </p>

                                <p className="text-textMuted text-sm leading-relaxed mb-6 flex-1">
                                    {project.desc}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto mb-8">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="px-3 py-1 bg-bgPrimary/50 border border-white/5 rounded-full text-xs font-mono text-textPrimary group-hover:border-accentTeal/30 transition-colors shadow-inner">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
                                    {project.demoLink && (
                                        <motion.a
                                            href={project.demoLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="py-2.5 bg-gradient-to-r from-accentTeal to-accentViolet text-bgPrimary font-bold rounded-xl flex items-center justify-center gap-2 shadow-[0_5px_15px_rgba(0,245,212,0.3)] text-sm"
                                        >
                                            Demo <FiExternalLink />
                                        </motion.a>
                                    )}
                                    {project.githubLink && (
                                        <motion.a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            className="py-2.5 border border-white/10 hover:border-accentTeal/50 text-textPrimary hover:text-accentTeal font-bold rounded-xl flex items-center justify-center gap-2 transition-all bg-white/5 text-sm"
                                        >
                                            Code <FiGithub />
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 text-center"
                >
                    <motion.a
                        href="https://github.com/cheshanth-14"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0,245,212,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-bgPrimary border border-accentTeal/30 text-accentTeal font-bold rounded-full hover:bg-accentTeal/5 hover:border-accentTeal transition-all"
                    >
                        See More on GitHub <FiGithub />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
