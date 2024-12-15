interface Props {
  features: string[];
}

export function NotableFeatures({ features }: Props) {
  return (
    <div>
      <p className="text-gray-400">Notable Features</p>
      <ul className="list-disc list-inside">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
    </div>
  );
}