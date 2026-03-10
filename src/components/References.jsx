import { motion } from 'framer-motion';
import { FiPhone, FiMail } from 'react-icons/fi';

const refs = [
    {
        name: "Laashan Moganaraj",
        role: "Lecturer, Informatics Institute of Technology",
        phone: "+94 0766197923",
        email: "laashan.m@iit.ac.lk",
        bgClass: "from-accentTeal/10 to-transparent",
        borderClass: "border-accentTeal/30 hover:border-accentTeal",
        textClass: "text-accentTeal"
    },
    {
        name: "Virginiya Nathan",
        role: "Teacher, V/Vavuniya Tamil Madhya Maha Vidyalayam",
        phone: "+94 776507583",
        email: "virginnathan@gmail.com",
        bgClass: "from-accentViolet/10 to-transparent",
        borderClass: "border-accentViolet/30 hover:border-accentViolet",
        textClass: "text-accentViolet"
    }
];

export default function References() {
    return (
        <section id="references" className="py-24 relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16 lg:px-8">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-accentTeal to-accentViolet inline-block">
                        References
                    </h2>
                    <div className="w-24 h-1 bg-accentAmber mt-4 mx-auto rounded-full drop-shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {refs.map((ref, index) => (
                        <motion.div
                            key={ref.name}
                            initial={{ opacity: 0, x: index === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            whileHover={{ y: -5 }}
                            className={`glass-card p-8 rounded-3xl relative overflow-hidden group transition-all duration-300 border ${ref.borderClass} hover:shadow-[0_20px_40px_-15px_rgba(255,255,255,0.05)]`}
                        >
                            <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl ${ref.bgClass} rounded-full blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                <h3 className="text-2xl font-heading font-bold text-textPrimary mb-1">
                                    {ref.name}
                                </h3>
                                <p className={`text-sm font-mono ${ref.textClass} mb-6 tracking-wide`}>
                                    {ref.role}
                                </p>

                                <div className="space-y-4">
                                    <a href={`tel:${ref.phone.replace(/\s+/g, '')}`} className="flex items-center gap-4 text-textMuted hover:text-white transition-colors group/link p-2 -ml-2 rounded-lg hover:bg-white/5">
                                        <div className={`p-2 rounded-lg bg-bgPrimary border border-white/5 shadow-inner group-hover/link:shadow-[0_0_10px_var(--tw-shadow-color)] shadow-${ref.textClass.split('-')[1]}/50 transition-shadow`}>
                                            <FiPhone className={ref.textClass} />
                                        </div>
                                        <span>{ref.phone}</span>
                                    </a>

                                    <a href={`mailto:${ref.email}`} className="flex items-center gap-4 text-textMuted hover:text-white transition-colors group/link p-2 -ml-2 rounded-lg hover:bg-white/5">
                                        <div className={`p-2 rounded-lg bg-bgPrimary border border-white/5 shadow-inner group-hover/link:shadow-[0_0_10px_var(--tw-shadow-color)] shadow-${ref.textClass.split('-')[1]}/50 transition-shadow`}>
                                            <FiMail className={ref.textClass} />
                                        </div>
                                        <span>{ref.email}</span>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
