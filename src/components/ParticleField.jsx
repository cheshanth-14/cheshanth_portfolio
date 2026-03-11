import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function Particles({ count = 800 }) {
    const mesh = useRef();
    const light = useRef();

    const particles = useMemo(() => {
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        const sizes = new Float32Array(count);

        const tealColor = new THREE.Color('#00F5D4');
        const violetColor = new THREE.Color('#7C3AED');
        const amberColor = new THREE.Color('#F59E0B');
        const colorPalette = [tealColor, violetColor, amberColor];

        for (let i = 0; i < count; i++) {
            const i3 = i * 3;
            positions[i3] = (Math.random() - 0.5) * 30;
            positions[i3 + 1] = (Math.random() - 0.5) * 50;
            positions[i3 + 2] = (Math.random() - 0.5) * 15;

            const color = colorPalette[Math.floor(Math.random() * colorPalette.length)];
            colors[i3] = color.r;
            colors[i3 + 1] = color.g;
            colors[i3 + 2] = color.b;

            sizes[i] = Math.random() * 0.08 + 0.02;
        }

        return { positions, colors, sizes };
    }, [count]);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (mesh.current) {
            mesh.current.rotation.y = time * 0.02;
            mesh.current.rotation.x = Math.sin(time * 0.01) * 0.1;

            const positions = mesh.current.geometry.attributes.position.array;
            for (let i = 0; i < count; i++) {
                const i3 = i * 3;
                positions[i3 + 1] += Math.sin(time + i * 0.1) * 0.002;
            }
            mesh.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <points ref={mesh}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={count}
                    array={particles.positions}
                    itemSize={3}
                />
                <bufferAttribute
                    attach="attributes-color"
                    count={count}
                    array={particles.colors}
                    itemSize={3}
                />
            </bufferGeometry>
            <pointsMaterial
                size={0.06}
                vertexColors
                transparent
                opacity={0.6}
                sizeAttenuation
                blending={THREE.AdditiveBlending}
                depthWrite={false}
            />
        </points>
    );
}

function FloatingOrbs() {
    const group = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (group.current) {
            group.current.children.forEach((child, i) => {
                child.position.y = Math.sin(time * 0.5 + i * 2) * 2;
                child.position.x = Math.cos(time * 0.3 + i * 1.5) * 3;
                child.rotation.x = time * 0.2 + i;
                child.rotation.z = time * 0.1 + i;
            });
        }
    });

    return (
        <group ref={group}>
            {[...Array(5)].map((_, i) => (
                <mesh key={i} position={[(i - 2) * 4, 0, -5]}>
                    <icosahedronGeometry args={[0.3, 0]} />
                    <meshStandardMaterial
                        color={['#00F5D4', '#7C3AED', '#F59E0B', '#00F5D4', '#7C3AED'][i]}
                        transparent
                        opacity={0.15}
                        wireframe
                    />
                </mesh>
            ))}
        </group>
    );
}

export default function ParticleField() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
        }}>
            <Canvas
                camera={{ position: [0, 0, 10], fov: 60 }}
                dpr={[1, 1.5]}
                gl={{ antialias: false, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.3} />
                <Particles count={600} />
                <FloatingOrbs />
            </Canvas>
        </div>
    );
}
