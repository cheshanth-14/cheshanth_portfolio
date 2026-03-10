import { motion } from 'framer-motion';

const achievements = [
    {
        icon: "🎓",
        title: "School Prefect",
        subtitle: "V/V.T.M.M.V",
        desc: "Leadership & Discipline | School Years",
        glow: "accentTeal"
    },
    {
        icon: "🎭",
        title: "National Drama Participant",
        subtitle: "2017",
        desc: "Represented school at national-level drama competition",
        glow: "accentViolet"
    },
    {
        icon: "🏏",
        title: "School Cricket Captain",
        subtitle: "2018",
        desc: "Led school team in strategy, morale & match leadership",
        glow: "accentAmber"
    },
    {
        icon: "🏆",
        title: "Athletic Champion",
        subtitle: "2019",
        desc: "Champion at school athletics championship",
        glow: "accentTeal"
    },
    {
        icon: "🏏",
        title: "IIT Cricket Team Player",
        subtitle: "Ongoing",
        desc: "Active player for IIT university cricket squad",
        glow: "accentViolet"
    },
    {
        icon: "✨",
        title: "Stage Craft Participant",
        subtitle: "2024",
        desc: "Performed in stage craft event at IIT",
        glow: "accentAmber"
    },
    {
        icon: "⚖️",
        title: "SLBA Accredited Cricket Umpire",
        subtitle: "2025",
        desc: "Officially certified by Sri Lanka Board of Cricket Umpires",
        glow: "accentTeal"
    }
];

export default function Achievements() {
    return (
        <section id="achievements" className="py-24 relative z-10">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-16">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center lg:text-left"
                >
                    <h2 className="text-4xl lg:text-5xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-r from-accentViolet to-accentTeal inline-block">
                        Beyond The Code
                    </h2>
                    <p className="text-xl text-textMuted mt-4 font-mono">Leadership · Sports · Arts · Community</p>
                    <div className="w-32 h-1 bg-accentViolet mt-4 mx-auto lg:mx-0 rounded-full drop-shadow-[0_0_8px_rgba(124,58,237,0.8)]" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:grid-cols-2 gap-6">
                    {achievements.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className={`glass-card p-6 rounded-2xl flex flex-col group relative overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_var(--${item.glow})]`}
                            style={{ '--hover-color': `var(--${item.glow})` }}
                        >
                            <div className="absolute inset-0 bg-white/0 group-hover:bg-[var(--hover-color)]/10 transition-colors duration-500 rounded-2xl -z-10" />

                            <div className="text-4xl mb-4 p-3 bg-bgPrimary/50 rounded-xl inline-flex w-fit shadow-inner group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>

                            <h3 className="text-lg font-heading font-bold text-textPrimary group-hover:text-[var(--hover-color)] transition-colors mb-1">
                                {item.title}
                            </h3>

                            <span className="text-xs font-mono text-[var(--hover-color)] mb-3 bg-[var(--hover-color)]/10 px-2 py-0.5 rounded-full w-fit border border-[var(--hover-color)]/20 shadow-sm">
                                {item.subtitle}
                            </span>

                            <p className="text-sm text-textMuted mt-auto">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
