import { CelestialObject } from '../types/celestial';

export const celestialObjects: CelestialObject[] = [
  {
    id: 'sun',
    name: 'Sun',
    type: 'star',
    diameter: 1392700,
    mass: 1.989e30,
    orbitalPeriod: 0,
    rotationPeriod: 27,
    meanDistance: 0,
    temperature: {
      min: 5500,
      max: 15000000,
      mean: 5778
    },
    atmosphere: ['Hydrogen', 'Helium'],
    composition: ['Hydrogen (74.9%)', 'Helium (23.8%)', 'Metals (1.3%)'],
    textureUrl: 'https://images.unsplash.com/photo-1532760270536-ad2626f2d7c1',
    description: 'The Sun is the star at the center of our Solar System.',
    notableFeatures: ['Solar flares', 'Sunspots', 'Corona']
  },
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
  }
  // Add other planets, moons, and notable asteroids...
];