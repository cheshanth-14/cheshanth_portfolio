import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiGithub, FiInstagram, FiLinkedin } from 'react-icons/fi';

const contactInfo = [
    {
        icon: <FiMail size={24} />,
        title: "Email",
        value: "cheshanth14@gmail.com",
        href: "mailto:cheshanth14@gmail.com",
        color: "accentTeal"
    },
    {
        icon: <FiPhone size={24} />,
        title: "Phone",
        value: "+94 765743454",
        href: "tel:+94765743454",
        color: "accentViolet"
    },
    {
        icon: <FiMapPin size={24} />,
        title: "Location",
        value: "Rohini Road, Wellawatte, Colombo",
        href: "https://maps.google.com/?q=Rohini+Road,+Wellawatte,+Colombo",
        color: "accentAmber"
    }
];

export default function Contact() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden z-10">

            {/* Animated Gradient Mesh Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-bgPrimary via-[#0t1a2f] to-[#12052c] -z-20 opacity-80" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[600px] bg-gradient-to-tr from-accentTeal/20 via-accentViolet/20 to-accentAmber/20 blur-[150px] -z-10 animate-pulse" style={{ animationDuration: '6s' }} />

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-16 lg:px-8 text-center sm:text-left">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <h2 className="text-4xl lg:text-6xl font-heading font-black text-transparent bg-clip-text bg-gradient-to-r from-accentTeal via-accentViolet to-accentAmber inline-block drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                        Let's Connect
                    </h2>
                    <p className="mt-6 text-lg text-textPrimary/80 font-light max-w-2xl mx-auto">
                        Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={info.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="glass-card p-6 rounded-2xl flex flex-col items-center sm:items-start text-center sm:text-left group border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className={`absolute top-0 right-0 w-24 h-24 bg-${info.color}/10 blur-2xl group-hover:bg-${info.color}/20 transition-all duration-500 rounded-full`} />

                            <div className={`text-${info.color} mb-4 p-3 bg-bgPrimary/60 rounded-xl shadow-inner group-hover:drop-shadow-[0_0_8px_var(--${info.color})] transition-all`}>
                                {info.icon}
                            </div>

                            <h3 className="text-lg font-heading font-bold text-textPrimary mb-2">
                                {info.title}
                            </h3>

                            <a href={info.href} target={info.title === "Location" ? "_blank" : "_self"} rel="noopener noreferrer" className="text-sm font-mono text-textMuted hover:text-white transition-colors truncate w-full">
                                {info.value}
                            </a>
                        </motion.div>
                    ))}
                </div>

                {/* Social Links Container */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="glass-card p-8 rounded-full max-w-fit mx-auto flex items-center gap-8 justify-center shadow-[0_0_30px_rgba(0,0,0,0.5)] border-white/5"
                >
                    <SocialButton href="https://github.com/cheshanth-14" icon={<FiGithub size={28} />} color="accentTeal" />
                    <SocialButton href="https://www.instagram.com/cheshanth_14" icon={<FiInstagram size={28} />} color="accentViolet" />
                    <SocialButton href="https://www.linkedin.com/in/jagannithy-cheshanth-975128304" icon={<FiLinkedin size={28} />} color="accentAmber" />
                </motion.div>

            </div>
        </section>
    );
}

const SocialButton = ({ href, icon, color }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-textMuted hover:text-${color} transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_15px_var(--${color})]`}
        style={{ '--hover-color': `var(--${color})` }}
    >
        {icon}
    </a>
);
