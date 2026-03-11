import { useState, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function TiltCard({ children, className = '', glowColor = 'rgba(0, 245, 212, 0.15)', intensity = 15, ...props }) {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });
    const cardRef = useRef(null);

    const handleMouseMove = useCallback((e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const mouseX = e.clientX - centerX;
        const mouseY = e.clientY - centerY;
        const rotY = (mouseX / (rect.width / 2)) * intensity;
        const rotX = -(mouseY / (rect.height / 2)) * intensity;
        setRotateX(rotX);
        setRotateY(rotY);

        const glowX = ((e.clientX - rect.left) / rect.width) * 100;
        const glowY = ((e.clientY - rect.top) / rect.height) * 100;
        setGlowPosition({ x: glowX, y: glowY });
    }, [intensity]);

    const handleMouseLeave = useCallback(() => {
        setRotateX(0);
        setRotateY(0);
        setGlowPosition({ x: 50, y: 50 });
    }, []);

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{
                rotateX,
                rotateY,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            style={{
                perspective: '1200px',
                transformStyle: 'preserve-3d',
            }}
            className={className}
            {...props}
        >
            {/* Dynamic light reflection */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    borderRadius: 'inherit',
                    background: `radial-gradient(circle at ${glowPosition.x}% ${glowPosition.y}%, ${glowColor}, transparent 60%)`,
                    opacity: (Math.abs(rotateX) + Math.abs(rotateY)) / (intensity * 2),
                    pointerEvents: 'none',
                    zIndex: 2,
                    transition: 'opacity 0.3s ease',
                }}
            />
            {/* Content pushed forward in 3D */}
            <div style={{ transform: 'translateZ(20px)', transformStyle: 'preserve-3d', position: 'relative', zIndex: 1 }}>
                {children}
            </div>
        </motion.div>
    );
}
