import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { Object3D } from 'three';
import { CelestialObject } from '../types/celestial';
import { SOLAR_SYSTEM_CONFIG } from '../constants/solarSystemConfig';

export function useOrbitalPosition(object: CelestialObject, timeScale: number) {
  const ref = useRef<Object3D>(null);

  useFrame((_, delta) => {
    if (ref.current && object.type !== 'star') {
      const orbitalSpeed = (2 * Math.PI) / (object.orbitalPeriod * 24 * 60 * 60);
      ref.current.rotation.y += orbitalSpeed * delta * timeScale;
    }
  });

  return ref;
}