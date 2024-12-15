import { useStore } from '../../../store/useStore';
import { ObjectStats } from './ObjectStats';
import { NotableFeatures } from './NotableFeatures';

export function InfoPanel() {
  const selectedObject = useStore((state) => state.selectedObject);

  if (!selectedObject) return null;

  return (
    <div className="absolute top-4 right-4 w-80 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
      <h2 className="text-2xl font-bold mb-2">{selectedObject.name}</h2>
      <p className="text-sm mb-4">{selectedObject.description}</p>
      <ObjectStats object={selectedObject} />
      <div className="mt-4">
        <NotableFeatures features={selectedObject.notableFeatures} />
      </div>
    </div>
  );
}