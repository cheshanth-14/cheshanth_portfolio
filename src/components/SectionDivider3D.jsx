import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function WaveMesh({ color = '#00F5D4', opacity = 0.15 }) {
    const meshRef = useRef();

    const geometry = useMemo(() => {
        const geo = new THREE.PlaneGeometry(20, 2, 80, 10);
        return geo;
    }, []);

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        if (meshRef.current) {
            const positions = meshRef.current.geometry.attributes.position.array;
            for (let i = 0; i < positions.length; i += 3) {
                const x = positions[i];
                const y = positions[i + 1];
                positions[i + 2] = Math.sin(x * 0.5 + time) * 0.3 + Math.sin(y * 2 + time * 1.5) * 0.15;
            }
            meshRef.current.geometry.attributes.position.needsUpdate = true;
        }
    });

    return (
        <mesh ref={meshRef} geometry={geometry} rotation={[-Math.PI / 4, 0, 0]}>
            <meshStandardMaterial
                color={color}
                transparent
                opacity={opacity}
                wireframe
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}

export default function SectionDivider3D({ color = '#00F5D4' }) {
    return (
        <div style={{
            width: '100%',
            height: '80px',
            position: 'relative',
            overflow: 'hidden',
            marginTop: '-20px',
            marginBottom: '-20px',
        }}>
            <Canvas
                camera={{ position: [0, 0, 5], fov: 50 }}
                dpr={[1, 1.5]}
                gl={{ antialias: false, alpha: true }}
                style={{ background: 'transparent' }}
            >
                <ambientLight intensity={0.5} />
                <WaveMesh color={color} />
            </Canvas>
        </div>
    );
}
