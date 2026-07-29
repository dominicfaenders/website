const bounds = {
  west: 11.28,
  east: 14.08,
  north: 51.78,
  south: 50.82,
} as const;

const cities = [
  { name: "Halle", lat: 51.482, lon: 11.969 },
  { name: "Leipzig", lat: 51.34, lon: 12.373 },
  { name: "Dresden", lat: 51.05, lon: 13.737 },
] as const;

const majorRoads = [
  {
    stroke: "rgba(184,160,120,0.55)",
    width: 0.42,
    coords: [
      [11.78, 51.72],
      [11.92, 51.58],
      [12.08, 51.42],
      [12.18, 51.24],
      [12.28, 51.02],
      [12.38, 50.88],
    ],
  },
  {
    stroke: "rgba(184,160,120,0.55)",
    width: 0.42,
    coords: [
      [11.62, 51.46],
      [12.05, 51.38],
      [12.55, 51.28],
      [13.05, 51.14],
      [13.55, 51.06],
      [13.82, 51.03],
    ],
  },
  {
    stroke: "rgba(184,160,120,0.55)",
    width: 0.42,
    coords: [
      [11.35, 51.52],
      [11.72, 51.46],
      [12.15, 51.36],
      [12.62, 51.32],
      [13.05, 51.28],
    ],
  },
  {
    stroke: "rgba(184,160,120,0.55)",
    width: 0.42,
    coords: [
      [12.05, 51.62],
      [12.22, 51.48],
      [12.35, 51.34],
      [12.48, 51.18],
    ],
  },
  {
    stroke: "rgba(244,241,234,0.32)",
    width: 0.28,
    coords: [
      [11.55, 51.5],
      [11.82, 51.48],
      [12.12, 51.4],
      [12.38, 51.35],
    ],
  },
  {
    stroke: "rgba(244,241,234,0.32)",
    width: 0.28,
    coords: [
      [12.72, 51.24],
      [12.95, 51.18],
      [13.22, 51.1],
      [13.48, 51.04],
    ],
  },
] as const;

function project(lon: number, lat: number) {
  return {
    x: ((lon - bounds.west) / (bounds.east - bounds.west)) * 100,
    y: ((bounds.north - lat) / (bounds.north - bounds.south)) * 100,
  };
}

function roadPath(coords: readonly (readonly [number, number])[]) {
  return coords
    .map(([lon, lat], index) => {
      const { x, y } = project(lon, lat);
      return `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
    })
    .join(" ");
}

const cityPoints = cities.map((city) => ({
  ...city,
  position: project(city.lon, city.lat),
}));

export default function AbstractRegionMap() {
  return (
    <div
      className="relative aspect-[4/3] w-full bg-forest-elevated"
      role="img"
      aria-label="Große Verkehrsachsen zwischen Leipzig, Halle und Dresden"
    >
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      >
        {majorRoads.map((road, index) => (
          <path
            key={index}
            d={roadPath(road.coords)}
            fill="none"
            stroke={road.stroke}
            strokeWidth={road.width}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-0">
        {cityPoints.map((city) => (
          <div
            key={city.name}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${city.position.x}%`, top: `${city.position.y}%` }}
          >
            <span className="relative flex h-4 w-4 items-center justify-center">
              <span className="absolute h-7 w-7 rounded-full bg-gold/22" />
              <span className="relative h-2 w-2 rounded-full bg-gold shadow-[0_0_0_1px_rgba(26,33,30,0.8)]" />
            </span>
            <span className="mt-1.5 block whitespace-nowrap text-[10px] font-medium tracking-[0.14em] uppercase text-warm-white/90">
              {city.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
