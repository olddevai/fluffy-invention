import { Pause, Play, Rewind, FastForward } from 'lucide-react';
import { useStore } from '../../store/useStore';
import { SOLAR_SYSTEM_CONFIG } from '../../constants/solarSystemConfig';

export function TimeControls() {
  const { timeScale, setTimeScale } = useStore();
  const isPaused = timeScale === 0;

  const handlePlayPause = () => {
    setTimeScale(isPaused ? SOLAR_SYSTEM_CONFIG.TIME.DEFAULT_SCALE : 0);
  };

  const adjustSpeed = (faster: boolean) => {
    const newScale = timeScale * (faster ? 2 : 0.5);
    setTimeScale(Math.min(
      Math.max(newScale, SOLAR_SYSTEM_CONFIG.TIME.MIN_SCALE),
      SOLAR_SYSTEM_CONFIG.TIME.MAX_SCALE
    ));
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => adjustSpeed(false)}
        className="p-2 hover:bg-white/10 rounded-full"
      >
        <Rewind size={20} />
      </button>
      <button
        onClick={handlePlayPause}
        className="p-2 hover:bg-white/10 rounded-full"
      >
        {isPaused ? <Play size={24} /> : <Pause size={24} />}
      </button>
      <button
        onClick={() => adjustSpeed(true)}
        className="p-2 hover:bg-white/10 rounded-full"
      >
        <FastForward size={20} />
      </button>
    </div>
  );
}