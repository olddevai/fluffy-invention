export const SOLAR_SYSTEM_CONFIG = {
  SCALE: {
    SIZE: 0.0001, // Scale factor for celestial object sizes
    DISTANCE: 0.00001, // Scale factor for orbital distances
  },
  CAMERA: {
    INITIAL_POSITION: [0, 20, 20],
    FOV: 60,
    MIN_DISTANCE: 5,
    MAX_DISTANCE: 100,
  },
  TIME: {
    DEFAULT_SCALE: 1,
    MAX_SCALE: 1000000,
    MIN_SCALE: 0,
  },
} as const;