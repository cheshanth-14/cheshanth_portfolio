import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

function GeometricShape({ position, color, geometry, speed = 1, distort = 0.3 }) {
    const mesh = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.x = time * 0.3 * speed;
            mesh.current.rotation.y = time * 0.2 * speed;
        }
    });

    return (
        <Float speed={speed * 2} rotationIntensity={1} floatIntensity={2}>
            <mesh ref={mesh} position={position}>
                {geometry === 'torus' && <torusGeometry args={[1, 0.4, 16, 32]} />}
                {geometry === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
                {geometry === 'dodecahedron' && <dodecahedronGeometry args={[0.8, 0]} />}
                {geometry === 'icosahedron' && <icosahedronGeometry args={[0.9, 0]} />}
                {geometry === 'torusknot' && <torusKnotGeometry args={[0.7, 0.25, 64, 16]} />}
                <MeshDistortMaterial
                    color={color}
                    transparent
                    opacity={0.15}
                    wireframe
                    distort={distort}
                    speed={2}
                />
            </mesh>
        </Float>
    );
}

function GlowingSphere({ position, color, size = 0.5 }) {
    const mesh = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.scale.setScalar(1 + Math.sin(time * 2) * 0.1);
        }
    });

    return (
        <Float speed={1.5} floatIntensity={3}>
            <mesh ref={mesh} position={position}>
                <sphereGeometry args={[size, 32, 32]} />
                <MeshWobbleMaterial
                    color={color}
                    transparent
                    opacity={0.08}
                    factor={0.5}
                    speed={2}
                />
            </mesh>
        </Float>
    );
}

function ConnectingLines() {
    const linesRef = useRef();
    const points = useMemo(() => {
        const pts = [];
        for (let i = 0; i < 20; i++) {
            pts.push(new THREE.Vector3(
                (Math.random() - 0.5) * 12,
                (Math.random() - 0.5) * 8,
                (Math.random() - 0.5) * 6
            ));
        }
        return pts;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (linesRef.current) {
            linesRef.current.rotation.y = time * 0.05;
        }
    });

    return (
        <group ref={linesRef}>
            {points.map((point, i) => {
                const nextPoint = points[(i + 1) % points.length];
                const lineGeometry = new THREE.BufferGeometry().setFromPoints([point, nextPoint]);
                return (
                    <line key={i} geometry={lineGeometry}>
                        <lineBasicMaterial
                            color="#00F5D4"
                            transparent
                            opacity={0.06}
                        />
                    </line>
                );
            })}
        </group>
    );
}

export default function HeroScene3D() {
    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 1,
            pointerEvents: 'none',
        }}>
            <Canvas
                camera={{ position: [0, 0, 8], fov: 50 }}
                dpr={[1, 1.5]}
                gl={{ antialias: true, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.4} />
                <pointLight position={[5, 5, 5]} intensity={0.5} color="#00F5D4" />
                <pointLight position={[-5, -5, 5]} intensity={0.3} color="#7C3AED" />

                {/* Main geometric shapes */}
                <GeometricShape position={[-4.5, 2, -2]} color="#00F5D4" geometry="torus" speed={0.8} distort={0.2} />
                <GeometricShape position={[4.5, -1.5, -3]} color="#7C3AED" geometry="octahedron" speed={1.2} distort={0.4} />
                <GeometricShape position={[-3, -2.5, -1]} color="#F59E0B" geometry="dodecahedron" speed={0.6} distort={0.3} />
                <GeometricShape position={[3.5, 2.5, -2]} color="#00F5D4" geometry="torusknot" speed={0.5} distort={0.15} />
                <GeometricShape position={[0, 3, -4]} color="#7C3AED" geometry="icosahedron" speed={0.9} distort={0.25} />

                {/* Ambient glow spheres */}
                <GlowingSphere position={[-5, 0, -3]} color="#00F5D4" size={1.5} />
                <GlowingSphere position={[5, 1, -4]} color="#7C3AED" size={1.2} />
                <GlowingSphere position={[0, -3, -2]} color="#F59E0B" size={1} />

                {/* Connecting lines network */}
                <ConnectingLines />
            </Canvas>
        </div>
    );
}
