import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function GlowingRing({ radius, color, speed, tilt }) {
    const ringRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (ringRef.current) {
            ringRef.current.rotation.z = time * speed;
        }
    });

    return (
        <mesh ref={ringRef} rotation={tilt}>
            <torusGeometry args={[radius, 0.03, 8, 64]} />
            <meshStandardMaterial
                color={color}
                transparent
                opacity={0.25}
                emissive={color}
                emissiveIntensity={0.5}
            />
        </mesh>
    );
}

function FloatingGem() {
    const gemRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (gemRef.current) {
            gemRef.current.rotation.x = time * 0.4;
            gemRef.current.rotation.y = time * 0.6;
        }
    });

    return (
        <Float speed={1.5} floatIntensity={2}>
            <mesh ref={gemRef}>
                <octahedronGeometry args={[1.2, 0]} />
                <MeshDistortMaterial
                    color="#00F5D4"
                    transparent
                    opacity={0.1}
                    wireframe
                    distort={0.15}
                    speed={3}
                />
            </mesh>
        </Float>
    );
}

function ParticleRing({ count = 50, radius = 2.5 }) {
    const pointsRef = useRef();

    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        positions[i * 3] = Math.cos(angle) * radius;
        positions[i * 3 + 1] = Math.sin(angle) * radius;
        positions[i * 3 + 2] = 0;
    }

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (pointsRef.current) {
            pointsRef.current.rotation.z = time * 0.2;
            pointsRef.current.rotation.x = Math.sin(time * 0.3) * 0.5;
        }
    });

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={positions}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.08}
                color="#7C3AED"
                transparent
                opacity={0.5}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
}

export default function ContactScene3D() {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
        }}>
            <Canvas
                camera={{ position: [0, 0, 6], fov: 50 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.3} />
                <pointLight position={[3, 3, 3]} intensity={0.5} color="#00F5D4" />
                <pointLight position={[-3, -3, 3]} intensity={0.3} color="#7C3AED" />

                <FloatingGem />
                <GlowingRing radius={2} color="#00F5D4" speed={0.3} tilt={[Math.PI / 3, 0, 0]} />
                <GlowingRing radius={2.8} color="#7C3AED" speed={-0.2} tilt={[Math.PI / 4, Math.PI / 6, 0]} />
                <GlowingRing radius={3.5} color="#F59E0B" speed={0.15} tilt={[Math.PI / 2, 0, Math.PI / 5]} />
                <ParticleRing />
            </Canvas>
        </div>
    );
}
