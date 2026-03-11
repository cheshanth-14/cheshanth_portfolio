import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const techLabels = [
    { name: 'React', color: '#00F5D4' },
    { name: 'JS', color: '#F59E0B' },
    { name: 'Python', color: '#7C3AED' },
    { name: 'Node', color: '#00F5D4' },
    { name: 'Java', color: '#F59E0B' },
    { name: 'CSS', color: '#7C3AED' },
    { name: 'MySQL', color: '#00F5D4' },
    { name: 'Figma', color: '#F59E0B' },
    { name: 'Git', color: '#7C3AED' },
];

function OrbitingLabel({ name, color, index, total, radius = 3.5 }) {
    const meshRef = useRef();
    const angle = (index / total) * Math.PI * 2;

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        const currentAngle = angle + time * 0.3;
        if (meshRef.current) {
            meshRef.current.position.x = Math.cos(currentAngle) * radius;
            meshRef.current.position.z = Math.sin(currentAngle) * radius;
            meshRef.current.position.y = Math.sin(time * 0.5 + index) * 0.5;
            meshRef.current.lookAt(0, 0, 0);
            meshRef.current.rotateY(Math.PI);
        }
    });

    return (
        <group ref={meshRef}>
            <Float speed={2} floatIntensity={0.5}>
                {/* Background pill */}
                <mesh position={[0, 0, -0.05]}>
                    <planeGeometry args={[1.6, 0.6]} />
                    <meshStandardMaterial
                        color={color}
                        transparent
                        opacity={0.08}
                        side={THREE.DoubleSide}
                    />
                </mesh>
                {/* Wireframe border */}
                <mesh position={[0, 0, -0.04]}>
                    <planeGeometry args={[1.6, 0.6]} />
                    <meshStandardMaterial
                        color={color}
                        transparent
                        opacity={0.2}
                        wireframe
                        side={THREE.DoubleSide}
                    />
                </mesh>
                <Text
                    fontSize={0.25}
                    color={color}
                    anchorX="center"
                    anchorY="middle"
                    font="https://fonts.gstatic.com/s/jetbrainsmono/v19/tDbY2o-flEEny0FPpzEBgR-v54GJlM_MkBhCdmqJ.woff"
                >
                    {name}
                </Text>
            </Float>
        </group>
    );
}

function CentralCore() {
    const coreRef = useRef();
    const ringRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (coreRef.current) {
            coreRef.current.rotation.x = time * 0.5;
            coreRef.current.rotation.y = time * 0.3;
            coreRef.current.scale.setScalar(1 + Math.sin(time * 2) * 0.05);
        }
        if (ringRef.current) {
            ringRef.current.rotation.z = time * 0.4;
            ringRef.current.rotation.x = Math.PI / 4;
        }
    });

    return (
        <group>
            <mesh ref={coreRef}>
                <icosahedronGeometry args={[0.6, 1]} />
                <meshStandardMaterial
                    color="#00F5D4"
                    transparent
                    opacity={0.2}
                    wireframe
                />
            </mesh>
            <mesh ref={ringRef}>
                <torusGeometry args={[1.2, 0.02, 8, 64]} />
                <meshStandardMaterial
                    color="#7C3AED"
                    transparent
                    opacity={0.3}
                    emissive="#7C3AED"
                    emissiveIntensity={0.5}
                />
            </mesh>
            {/* Second ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[1.5, 0.015, 8, 64]} />
                <meshStandardMaterial
                    color="#F59E0B"
                    transparent
                    opacity={0.2}
                    emissive="#F59E0B"
                    emissiveIntensity={0.3}
                />
            </mesh>
        </group>
    );
}

function OrbitRing({ radius = 3.5 }) {
    return (
        <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[radius, 0.005, 8, 128]} />
            <meshStandardMaterial
                color="#ffffff"
                transparent
                opacity={0.05}
            />
        </mesh>
    );
}

export default function SkillsOrbit3D() {
    return (
        <div style={{
            width: '100%',
            height: '140px',
            position: 'relative',
        }}>
            <Canvas
                camera={{ position: [0, 2, 7], fov: 45 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <pointLight position={[5, 5, 5]} intensity={0.8} color="#00F5D4" />
                <pointLight position={[-5, -3, 3]} intensity={0.4} color="#7C3AED" />

                <CentralCore />
                <OrbitRing radius={3.5} />

                {techLabels.map((label, index) => (
                    <OrbitingLabel
                        key={label.name}
                        name={label.name}
                        color={label.color}
                        index={index}
                        total={techLabels.length}
                    />
                ))}
            </Canvas>
        </div>
    );
}
