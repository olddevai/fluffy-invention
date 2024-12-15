import { CelestialObject } from '../../../types/celestial';

interface Props {
  object: CelestialObject;
}

export function ObjectStats({ object }: Props) {
  return (
    <div className="grid grid-cols-2 gap-2 text-sm">
      <div>
        <p className="text-gray-400">Diameter</p>
        <p>{object.diameter.toLocaleString()} km</p>
      </div>
      <div>
        <p className="text-gray-400">Temperature</p>
        <p>{object.temperature.mean}K</p>
      </div>
      <div>
        <p className="text-gray-400">Orbital Period</p>
        <p>{object.orbitalPeriod} days</p>
      </div>
      <div>
        <p className="text-gray-400">Distance from Sun</p>
        <p>{object.meanDistance} AU</p>
      </div>
    </div>
  );
}