import { useRef } from 'react';
import { Sphere } from '@react-three/drei';
import { CelestialObject as ICelestialObject } from '../../types/celestial';
import { SOLAR_SYSTEM_CONFIG } from '../../constants/solarSystemConfig';
import { useStore } from '../../store/useStore';

interface Props {
  object: ICelestialObject;
}

export function CelestialObject({ object }: Props) {
  const meshRef = useRef(null);
  const setSelectedObject = useStore((state) => state.setSelectedObject);
  const scale = object.diameter * SOLAR_SYSTEM_CONFIG.SCALE.SIZE;

  return (
    <Sphere
      ref={meshRef}
      args={[scale, 32, 32]}
      position={[object.meanDistance * SOLAR_SYSTEM_CONFIG.SCALE.DISTANCE, 0, 0]}
      onClick={() => setSelectedObject(object)}
    >
      <meshStandardMaterial map={null} /> {/* TODO: Add texture loading */}
    </Sphere>
  );
}