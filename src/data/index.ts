import { sun } from './celestialObjects/sun';
import { planets } from './celestialObjects/planets';
import { CelestialObject } from '../types/celestial';

export const celestialObjects: CelestialObject[] = [sun, ...planets];