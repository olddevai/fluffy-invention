import { Scene } from './components/Scene';
import { Controls } from './components/UI/Controls';
import { InfoPanel } from './components/UI/InfoPanel';

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