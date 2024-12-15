import { CelestialObject } from '../../types/celestial';

export const sun: CelestialObject = {
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
};