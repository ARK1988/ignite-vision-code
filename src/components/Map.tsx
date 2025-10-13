import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState<string>('');
  const [tokenSubmitted, setTokenSubmitted] = useState<boolean>(false);

  useEffect(() => {
    if (!mapContainer.current || !tokenSubmitted || !mapboxToken) return;

    // Initialize map
    mapboxgl.accessToken = mapboxToken;
    
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      zoom: 14,
      center: [55.196168, 25.115556], // Rasis Business Center, Dubai
    });

    // Add marker for office location
    new mapboxgl.Marker({ color: '#3b82f6' })
      .setLngLat([55.196168, 25.115556])
      .setPopup(
        new mapboxgl.Popup().setHTML(
          '<div style="color: #1a1a1a; padding: 8px;"><strong>EdgeTec AI System Co.</strong><br/>Unit 112, 3rd floor<br/>Rasis Business Center<br/>Al Barsha 1, Dubai, UAE</div>'
        )
      )
      .addTo(map.current);

    // Add navigation controls
    map.current.addControl(
      new mapboxgl.NavigationControl({
        visualizePitch: true,
      }),
      'top-right'
    );

    // Cleanup
    return () => {
      map.current?.remove();
    };
  }, [tokenSubmitted, mapboxToken]);

  const handleSubmitToken = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      setTokenSubmitted(true);
    }
  };

  if (!tokenSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center h-full min-h-[400px] p-8 space-y-4">
        <div className="text-center space-y-2 mb-4">
          <h3 className="text-lg font-semibold">Mapbox Token Required</h3>
          <p className="text-sm text-muted-foreground max-w-md">
            Enter your Mapbox public token to view the map. Get your token at{' '}
            <a 
              href="https://mapbox.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>
          </p>
        </div>
        <form onSubmit={handleSubmitToken} className="w-full max-w-md space-y-4">
          <Input
            type="text"
            placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIiwi..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="w-full"
          />
          <Button type="submit" className="w-full" variant="default">
            Load Map
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full min-h-[400px]">
      <div ref={mapContainer} className="absolute inset-0" />
    </div>
  );
};

export default Map;
