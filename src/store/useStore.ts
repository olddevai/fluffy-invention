import { create } from 'zustand';
import { CelestialObject } from '../types/celestial';

interface StoreState {
  selectedObject: CelestialObject | null;
  timeScale: number;
  showOrbits: boolean;
  showLabels: boolean;
  setSelectedObject: (object: CelestialObject | null) => void;
  setTimeScale: (scale: number) => void;
  toggleOrbits: () => void;
  toggleLabels: () => void;
}

export const useStore = create<StoreState>((set) => ({
  selectedObject: null,
  timeScale: 1,
  showOrbits: true,
  showLabels: true,
  setSelectedObject: (object) => set({ selectedObject: object }),
  setTimeScale: (scale) => set({ timeScale: scale }),
  toggleOrbits: () => set((state) => ({ showOrbits: !state.showOrbits })),
  toggleLabels: () => set((state) => ({ showLabels: !state.showLabels })),
}));