import { motion } from 'framer-motion';

const languages = [
    { flag: "🇬🇧", name: "English", level: "Fluent", color: "accentTeal" },
    { flag: "🇱🇰", name: "Tamil", level: "Native", color: "accentViolet" },
    { flag: "🇱🇰", name: "Sinhala", level: "Conversational", color: "accentAmber" }
];

export default function Languages() {
    return (
        <section className="py-24 relative z-10 border-t border-white/5 bg-gradient-to-b from-transparent to-bgPrimary/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-12 text-center"
                >
                    <h2 className="text-3xl lg:text-4xl font-heading font-bold text-textPrimary inline-block">
                        Languages
                    </h2>
                    <div className="w-16 h-1 bg-accentTeal mt-4 mx-auto rounded-full drop-shadow-[0_0_8px_rgba(0,245,212,0.8)]" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                    {languages.map((lang, index) => (
                        <motion.div
                            key={lang.name}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5, shadow: `0 0 20px var(--${lang.color})` }}
                            className="glass-card p-6 flex flex-col items-center justify-center rounded-2xl group transition-all duration-300 relative border border-white/5 hover:border-white/20 overflow-hidden"
                            style={{ '--hover-color': `var(--${lang.color})` }}
                        >
                            <div className="absolute inset-0 bg-[var(--hover-color)]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10" />

                            <span className="text-4xl mb-4 p-4 bg-bgPrimary rounded-full shadow-inner border border-white/10 group-hover:scale-110 transition-transform">
                                {lang.flag}
                            </span>

                            <h3 className="text-xl font-heading font-bold text-textPrimary group-hover:text-[var(--hover-color)] transition-colors mb-2">
                                {lang.name}
                            </h3>

                            <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm font-mono text-textMuted group-hover:border-[var(--hover-color)]/30 group-hover:text-textPrimary transition-all">
                                {lang.level}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
