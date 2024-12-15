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
    id: 'mercury',
    name: 'Mercury',
    type: 'planet',
    diameter: 4879,
    mass: 3.285e23,
    orbitalPeriod: 87.97,
    rotationPeriod: 58.6,
    meanDistance: 0.39,
    temperature: {
      min: 100,
      max: 700,
      mean: 440
    },
    atmosphere: ['Oxygen', 'Sodium', 'Hydrogen', 'Helium'],
    composition: ['Iron', 'Silicon', 'Magnesium'],
    textureUrl: 'https://images.unsplash.com/photo-1592941187321-95e7999f0b63',
    description: 'Mercury is the smallest and innermost planet in the Solar System.',
    notableFeatures: ['Large iron core', 'Extreme temperature variations']
  },
  {
    id: 'venus',
    name: 'Venus',
    type: 'planet',
    diameter: 12104,
    mass: 4.867e24,
    orbitalPeriod: 224.7,
    rotationPeriod: -243,
    meanDistance: 0.72,
    temperature: {
      min: 737,
      max: 737,
      mean: 737
    },
    atmosphere: ['Carbon dioxide', 'Nitrogen'],
    composition: ['Iron', 'Oxygen', 'Silicon'],
    textureUrl: 'https://images.unsplash.com/photo-1575302920794-27d32de7267e',
    description: 'Venus is the second planet from the Sun and has a thick, toxic atmosphere.',
    notableFeatures: ['Runaway greenhouse effect', 'Volcanic plains']
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
  },
  {
    id: 'mars',
    name: 'Mars',
    type: 'planet',
    diameter: 6779,
    mass: 6.417e23,
    orbitalPeriod: 687,
    rotationPeriod: 1.03,
    meanDistance: 1.52,
    temperature: {
      min: 130,
      max: 308,
      mean: 210
    },
    atmosphere: ['Carbon dioxide', 'Nitrogen', 'Argon'],
    composition: ['Iron oxide', 'Silicon', 'Magnesium'],
    textureUrl: 'https://images.unsplash.com/photo-1528569937393-e5b719b0a333',
    description: 'Mars is the fourth planet from the Sun, known as the Red Planet.',
    notableFeatures: ['Olympus Mons', 'Valles Marineris', 'Polar ice caps']
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    type: 'planet',
    diameter: 139820,
    mass: 1.898e27,
    orbitalPeriod: 4331,
    rotationPeriod: 0.41,
    meanDistance: 5.2,
    temperature: {
      min: 110,
      max: 165,
      mean: 120
    },
    atmosphere: ['Hydrogen', 'Helium'],
    composition: ['Hydrogen', 'Helium', 'Ammonia'],
    textureUrl: 'https://images.unsplash.com/photo-1589144616413-0dde55c5dc44',
    description: 'Jupiter is the largest planet in the Solar System and is known for its Great Red Spot.',
    notableFeatures: ['Great Red Spot', 'Many moons', 'Strong magnetic field']
  },
  {
    id: 'saturn',
    name: 'Saturn',
    type: 'planet',
    diameter: 116460,
    mass: 5.683e26,
    orbitalPeriod: 10747,
    rotationPeriod: 0.45,
    meanDistance: 9.58,
    temperature: {
      min: 82,
      max: 134,
      mean: 97
    },
    atmosphere: ['Hydrogen', 'Helium'],
    composition: ['Hydrogen', 'Helium', 'Methane'],
    textureUrl: 'https://images.unsplash.com/photo-1583749503028-43f2017ba279',
    description: 'Saturn is the second-largest planet in the Solar System, famous for its ring system.',
    notableFeatures: ['Ring system', 'Many moons', 'Low density']
  },
  {
    id: 'uranus',
    name: 'Uranus',
    type: 'planet',
    diameter: 50724,
    mass: 8.681e25,
    orbitalPeriod: 30660,
    rotationPeriod: -0.72,
    meanDistance: 19.2,
    temperature: {
      min: 49,
      max: 76,
      mean: 59
    },
    atmosphere: ['Hydrogen', 'Helium', 'Methane'],
    composition: ['Ices', 'Hydrogen', 'Helium'],
    textureUrl: 'https://images.unsplash.com/photo-1605459656498-f754fd3ed4e5',
    description: 'Uranus is an ice giant with a unique sideways rotation.',
    notableFeatures: ['Sideways rotation', 'Methane-rich atmosphere']
  },
  {
    id: 'neptune',
    name: 'Neptune',
    type: 'planet',
    diameter: 49244,
    mass: 1.024e26,
    orbitalPeriod: 60190,
    rotationPeriod: 0.67,
    meanDistance: 30.1,
    temperature: {
      min: 38,
      max: 73,
      mean: 55
    },
    atmosphere: ['Hydrogen', 'Helium', 'Methane'],
    composition: ['Ices', 'Hydrogen', 'Helium'],
    textureUrl: 'https://images.unsplash.com/photo-1621052604224-447cf7ad2a5a',
    description: 'Neptune is the eighth planet from the Sun and is known for its deep blue color.',
    notableFeatures: ['Great Dark Spot', 'Strong winds', 'Faint ring system']
  }
];
