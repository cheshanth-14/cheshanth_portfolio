import { motion } from 'framer-motion';

const educationData = [
    {
        institution: "University of Westminster (via IIT Sri Lanka)",
        degree: "BSc (Hons) Computer Science",
        year: "2024 - 2028",
        color: "accentTeal"
    },
    {
        institution: "Informatics Institute of Technology",
        degree: "Foundation Certificate",
        year: "2023 - 2024",
        color: "accentViolet"
    },
    {
        institution: "V/Vavuniya Tamil Madhya Maha Vidyalayam",
        degree: "G.C.E Advanced Level",
        year: "2020 - 2022",
        color: "accentAmber"
    }
];

export default function Education() {
    return (
        <section id="education" className="py-24 relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center lg:text-left"
                >
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-accentViolet to-accentAmber inline-block">
                        Education Journey
                    </h2>
                    <div className="w-48 h-1 bg-accentTeal mt-4 mx-auto lg:mx-0 rounded-full drop-shadow-[0_0_8px_rgba(0,245,212,0.8)]" />
                </motion.div>

                <div className="relative border-l-2 lg:border-l-0 lg:border-t-0 border-white/20 ml-6 lg:ml-0 lg:flex lg:flex-col lg:items-center py-6">

                    {/* Central Line for Desktop */}
                    <div className="hidden lg:block absolute left-1/2 -ml-0.5 w-0.5 h-full bg-white/20"></div>

                    {educationData.map((item, index) => {
                        const isEven = index % 2 === 0;
                        const delay = index * 0.2;

                        return (
                            <motion.div
                                key={item.degree}
                                initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay }}
                                className="mb-12 relative flex w-full flex-col lg:flex-row items-center"
                            >
                                {/* Timeline Orb */}
                                <div className="absolute -left-[35px] lg:left-1/2 top-4 lg:-translate-x-1/2 w-6 h-6 rounded-full bg-bgPrimary border-4 border-bgPrimary flex items-center justify-center z-10 shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                                    <div className={`w-3 h-3 rounded-full bg-${item.color} animate-pulse drop-shadow-[0_0_10px_var(--${item.color})]`} />
                                </div>

                                {/* Card container */}
                                <div className={`w-full lg:w-[45%] ${isEven ? 'lg:mr-auto lg:pr-12' : 'lg:ml-auto lg:pl-12'}`}>
                                    <motion.div
                                        whileHover={{ scale: 1.02 }}
                                        className={`glass-card p-6 lg:p-8 rounded-2xl relative overflow-hidden group hover:shadow-[0_0_30px_rgba(255,255,255,0.05)] border-l-4 lg:border-l-0 ${!isEven ? 'lg:border-l-4' : 'lg:border-r-4'}`}
                                        style={{
                                            borderColor: `rgba(255,255,255,0.05)`,
                                            [isEven ? 'borderRightColor' : 'borderLeftColor']: `var(--${item.color})`
                                        }}
                                    >
                                        {/* Hover Glow Background */}
                                        <div className={`absolute inset-0 bg-${item.color}/5 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10`} />

                                        <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold bg-${item.color}/10 text-${item.color} border border-${item.color}/30 mb-4 inline-flex shadow-[0_0_10px_rgba(255,255,255,0.1)]`}>
                                            {item.year}
                                        </span>

                                        <h3 className="text-2xl font-bold font-heading text-textPrimary tracking-tight mb-2">
                                            {item.degree}
                                        </h3>

                                        <p className="text-lg text-textMuted font-medium font-sans flex items-center gap-2">
                                            <span className={`w-1.5 h-1.5 rounded-full bg-${item.color}`}></span>
                                            {item.institution}
                                        </p>
                                    </motion.div>
                                </div>

                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
