import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.heat';
import RamsSection from './RamsSection';

// Note: leaflet.heat attaches to L.heatLayer
// We need this helper to add the heatmap to the map instance
const HeatmapLayer = ({ points }: { points: [number, number, number][] }) => {
  const map = useMap();

  useEffect(() => {
    if (!map || !points.length) return;

    // @ts-ignore - leaflet.heat adds this
    const heatLayer = L.heatLayer(points, {
      radius: 25,
      blur: 20,
      maxZoom: 18,
      gradient: {
        0.2: 'rgba(67, 76, 55, 0.1)', // Subtle start with background color
        0.4: '#6b7a58',
        0.6: '#F1EFE7',              // Paper color at mid-intensity
        0.8: '#fff9e6',              // Brighter warm tint
        1.0: '#ffffff'               // Pure white for highest density
      }
    }).addTo(map);

    return () => {
      map.removeLayer(heatLayer);
    };
  }, [map, points]);

  return null;
};

const LifeMap: React.FC = () => {
  const [points, setPoints] = useState<[number, number, number][]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/assets/life_map.geojson');
        const json = await response.json();
        
        // Extract lat/lng for leaflet [lat, lng, intensity]
        const extractedPoints: [number, number, number][] = json.features
          .filter((f: any) => f.geometry && f.geometry.type === 'Point')
          .map((f: any) => [
            f.geometry.coordinates[1], // Latitude
            f.geometry.coordinates[0], // Longitude
            1 // Intensity
          ]);
        
        setPoints(extractedPoints);
      } catch (error) {
        console.error("Failed to load life map data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <RamsSection title="A map of where I've been...">
      <div className="h-[500px] w-full border border-paper/20 relative overflow-hidden bg-paper/5 contrast-[1.1] brightness-[0.9]">
        {loading ? (
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-8 h-8 border-2 border-paper/20 border-t-paper rounded-full animate-spin"></div>
          </div>
        ) : (
          <MapContainer
            center={[40.7128, -74.0060]}
            zoom={2}
            scrollWheelZoom={false}
            zoomControl={false}
            style={{ width: '100%', height: '100%', background: '#434C37' }}
          >
            {/* Dark Tile Layer - CartoDB Dark Matter */}
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
              url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
            />
            <HeatmapLayer points={points} />
          </MapContainer>
        )}
      </div>
      <div className="mt-4 flex justify-between items-center">
        <p className="text-[9px] font-mono text-paper/40 font-bold tracking-[0.2em] uppercase">
          Source: Google Timeline (2013-Present)
        </p>
        <p className="text-[9px] font-mono text-paper/40 font-bold tracking-[0.2em] uppercase">
          {points.length.toLocaleString()} Data Points (Leaflet)
        </p>
      </div>
      
      {/* Styles to fix Leaflet attribution and Rams feel */}
      <style>{`
        .leaflet-container {
          background-color: #434C37 !important;
        }
        /* Tint the base map slightly towards the site's green */
        .leaflet-tile-pane {
          filter: sepia(0.5) hue-rotate(45deg) brightness(0.8) contrast(1.2);
          opacity: 0.7;
        }
        .leaflet-layer {
          mix-blend-mode: color-dodge;
        }
        .leaflet-control-attribution {
          font-family: 'JetBrains Mono', monospace !important;
          font-size: 7px !important;
          background: transparent !important;
          color: rgba(241, 239, 231, 0.2) !important;
          text-transform: uppercase;
        }
        .leaflet-control-attribution a {
          color: rgba(241, 239, 231, 0.3) !important;
        }
      `}</style>
    </RamsSection>
  );
};

export default LifeMap;
