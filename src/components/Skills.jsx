import { motion } from 'framer-motion';

const techSkills = [
    { name: 'React', level: 70 },
    { name: 'React Native', level: 75 },
    { name: 'JavaScript', level: 72 },
    { name: 'Node.js', level: 72 },
    { name: 'HTML & CSS', level: 80 },
    { name: 'Python', level: 80 },
    { name: 'Java', level: 75 },
    { name: 'Figma', level: 80 },
    { name: 'MySQL', level: 76 },
];

const softSkills = [
    "🧠 Problem-solving & Thinking",
    "🤝 Team Work",
    "💬 Communication",
    "⏰ Time Management",
    "💪 Work Ethic & Attitude"
];

const tools = ["VS Code", "Git", "GitHub", "Figma", "Android Studio", "Postman"];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center lg:text-left"
                >
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-accentTeal to-accentViolet inline-block">
                        Technical & Soft Skills
                    </h2>
                    <div className="w-32 h-1 bg-accentAmber mt-4 mx-auto lg:mx-0 rounded-full drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Technical Skills */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-heading font-bold text-textPrimary mb-8 flex items-center gap-3">
                            <span className="w-2 h-8 bg-accentTeal rounded-full shadow-[0_0_10px_rgba(0,245,212,0.5)]"></span>
                            Technical Arsenal
                        </h3>

                        <div className="space-y-4">
                            {techSkills.map((skill, index) => (
                                <motion.div
                                    key={skill.name}
                                    className="space-y-2 group cursor-pointer"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    whileHover={{ scale: 1.02, x: 5 }}
                                >
                                    <div className="flex justify-between items-center text-sm font-mono text-textPrimary group-hover:text-accentTeal transition-colors">
                                        <span>{skill.name}</span>
                                        <span className="text-accentTeal font-bold">{skill.level}%</span>
                                    </div>
                                    <div className="h-2 w-full bg-bgCard rounded-full overflow-hidden border border-white/5 group-hover:border-accentTeal/30 transition-colors">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: `${skill.level}%` }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.5, delay: index * 0.1, type: "spring" }}
                                            className="h-full bg-gradient-to-r from-accentTeal to-accentViolet shadow-[0_0_10px_rgba(0,245,212,0.8)] relative"
                                        >
                                            <div className="absolute top-0 right-0 bottom-0 w-8 bg-white/20 skew-x-12 blur-sm group-hover:animate-pulse" />
                                        </motion.div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Soft Skills & Tools */}
                    <div className="space-y-12">

                        {/* Soft Skills */}
                        <div>
                            <h3 className="text-2xl font-heading font-bold text-textPrimary mb-8 flex items-center gap-3">
                                <span className="w-2 h-8 bg-accentViolet rounded-full shadow-[0_0_10px_rgba(124,58,237,0.5)]"></span>
                                Soft Skills
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {softSkills.map((skill, index) => (
                                    <motion.div
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        whileHover={{ y: -3, scale: 1.05 }}
                                        className="glass-card px-5 py-3 rounded-full text-sm font-medium text-textPrimary hover:border-accentViolet/50 hover:shadow-[0_0_15px_rgba(124,58,237,0.2)] transition-all cursor-default"
                                    >
                                        {skill}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Tools */}
                        <div>
                            <h3 className="text-2xl font-heading font-bold text-textPrimary mb-8 flex items-center gap-3">
                                <span className="w-2 h-8 bg-accentAmber rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></span>
                                Tools & Environments
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {tools.map((tool, index) => (
                                    <motion.div
                                        key={tool}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        whileHover={{ y: -3, scale: 1.1, rotate: [0, -2, 2, 0] }}
                                        className="px-4 py-2 bg-textMuted/10 text-textMuted text-sm font-mono border border-textMuted/20 rounded-md hover:text-white hover:border-accentAmber/50 hover:shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-all cursor-default"
                                    >
                                        {tool}
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
