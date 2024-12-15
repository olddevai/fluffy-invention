import { CelestialObject } from '../../types/celestial';

export const planets: CelestialObject[] = [
  {
    id: 'earth',
    name: 'Earth',
    type: 'planet',
    diameter: 12742,
    mass: 5.972e24,
    orbitalPeriod: 365.26,
    rotationPeriod: 1,
    meanDistance: 1,
    temperature: {
      min: 184,
      max: 330,
      mean: 288
    },
    atmosphere: ['Nitrogen', 'Oxygen', 'Argon'],
    composition: ['Iron', 'Oxygen', 'Silicon', 'Magnesium'],
    textureUrl: 'https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4',
    description: 'Earth is the third planet from the Sun and the only astronomical object known to harbor life.',
    notableFeatures: ['Atmosphere', 'Liquid water', 'Magnetic field']
  },
  // Add other planets...
];