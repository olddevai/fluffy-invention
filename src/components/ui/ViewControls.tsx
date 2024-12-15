import { Eye, EyeOff, ZoomIn, ZoomOut } from 'lucide-react';
import { useStore } from '../../store/useStore';

export function ViewControls() {
  const { showOrbits, showLabels, toggleOrbits, toggleLabels } = useStore();

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={toggleOrbits}
        className="p-2 hover:bg-white/10 rounded-full"
        title={showOrbits ? 'Hide Orbits' : 'Show Orbits'}
      >
        {showOrbits ? <Eye size={20} /> : <EyeOff size={20} />}
      </button>
      <button
        onClick={toggleLabels}
        className="p-2 hover:bg-white/10 rounded-full"
        title={showLabels ? 'Hide Labels' : 'Show Labels'}
      >
        <span className="text-sm">ABC</span>
      </button>
      <div className="flex items-center gap-1">
        <button className="p-2 hover:bg-white/10 rounded-full">
          <ZoomOut size={20} />
        </button>
        <button className="p-2 hover:bg-white/10 rounded-full">
          <ZoomIn size={20} />
        </button>
      </div>
    </div>
  );
}