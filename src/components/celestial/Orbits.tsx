import { Line } from '@react-three/drei';
import { celestialObjects } from '../../data';
import { SOLAR_SYSTEM_CONFIG } from '../../constants/solarSystemConfig';

export function Orbits() {
  return (
    <>
      {celestialObjects.map((object) => {
        if (object.type === 'star') return null;
        
        const points = [];
        const segments = 64;
        const radius = object.meanDistance * SOLAR_SYSTEM_CONFIG.SCALE.DISTANCE;
        
        for (let i = 0; i <= segments; i++) {
          const theta = (i / segments) * Math.PI * 2;
          points.push(
            Math.cos(theta) * radius,
            0,
            Math.sin(theta) * radius
          );
        }
        
        return (
          <Line
            key={object.id}
            points={points}
            color="white"
            opacity={0.2}
            transparent
          />
        );
      })}
    </>
  );
}