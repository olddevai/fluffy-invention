import { useStore } from '../../store/useStore';

export function InfoPanel() {
  const selectedObject = useStore((state) => state.selectedObject);

  if (!selectedObject) return null;

  return (
    <div className="absolute top-4 right-4 w-80 bg-black/50 backdrop-blur-sm rounded-lg p-4 text-white">
      <h2 className="text-2xl font-bold mb-2">{selectedObject.name}</h2>
      <div className="space-y-2">
        <p className="text-sm">{selectedObject.description}</p>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div>
            <p className="text-gray-400">Diameter</p>
            <p>{selectedObject.diameter.toLocaleString()} km</p>
          </div>
          <div>
            <p className="text-gray-400">Temperature</p>
            <p>{selectedObject.temperature.mean}K</p>
          </div>
          <div>
            <p className="text-gray-400">Orbital Period</p>
            <p>{selectedObject.orbitalPeriod} days</p>
          </div>
          <div>
            <p className="text-gray-400">Distance from Sun</p>
            <p>{selectedObject.meanDistance} AU</p>
          </div>
        </div>
        <div>
          <p className="text-gray-400">Notable Features</p>
          <ul className="list-disc list-inside">
            {selectedObject.notableFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}