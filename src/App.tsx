import { Scene } from './components/Scene';
import { Controls } from './components/ui/Controls';
import { InfoPanel } from './components/ui/InfoPanel';

function App() {
  return (
    <div className="w-full h-screen relative">
      <Scene />
      <Controls />
      <InfoPanel />
    </div>
  );
}

export default App;
