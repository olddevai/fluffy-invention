import { useState } from 'react';
import { Pause, Play, ZoomIn, ZoomOut } from 'lucide-react';
import { useStore } from '../../store/useStore';

export function Controls() {
  const [isPaused, setIsPaused] = useState(false);
  const { setTimeScale, toggleOrbits, toggleLabels } = useStore();

  const handlePlayPause = () => {
    setIsPaused(!isPaused);
    setTimeScale(isPaused ? 1 : 0);
  };

  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm rounded-full p-2 flex items-center gap-2">
      <button
        onClick={handlePlayPause}
        className="p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        {isPaused ? <Play size={24} /> : <Pause size={24} />}
      </button>
      <div className="w-px h-6 bg-white/20" />
      <button
        onClick={() => toggleOrbits()}
        className="p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        Show Orbits
      </button>
      <button
        onClick={() => toggleLabels()}
        className="p-2 hover:bg-white/10 rounded-full transition-colors"
      >
        Show Labels
      </button>
      <div className="flex items-center gap-1">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ZoomOut size={24} />
        </button>
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ZoomIn size={24} />
        </button>
      </div>
    </div>
  );
}