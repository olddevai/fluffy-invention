export interface CelestialObject {
  id: string;
  name: string;
  type: 'star' | 'planet' | 'dwarf-planet' | 'moon' | 'asteroid';
  diameter: number; // km
  mass: number; // kg
  orbitalPeriod: number; // Earth days
  rotationPeriod: number; // Earth days
  meanDistance: number; // AU from Sun
  temperature: {
    min: number; // Kelvin
    max: number;
    mean: number;
  };
  atmosphere: string[];
  composition: string[];
  textureUrl: string;
  description: string;
  notableFeatures: string[];
}