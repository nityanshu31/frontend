import React, { useEffect, useState } from 'react';

const Mapreq = () => {
  const [location, setLocation] = useState(null);
  const [map, setMap] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const platform = new window.H.service.Platform({
      apikey: 'mwSGd_thMziSd8hBzz4OQT5b9goG8RAyNCZq8-5onz0',
    });

    const defaultLayers = platform.createDefaultLayers();
    const mapInstance = new window.H.Map(
      document.getElementById('map-container'),
      defaultLayers.vector.normal.map,
      {
        zoom: 13,
        center: { lat: 0, lng: 0 },
      }
    );

    new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(mapInstance));
    setMap(mapInstance);

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLocation(userLocation);
          setLoading(false);
          
          const userIcon = new window.H.map.Icon(
            'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
          );

          const userMarker = new window.H.map.Marker(userLocation, { icon: userIcon });
          mapInstance.addObject(userMarker);
          mapInstance.setCenter(userLocation);
        },
        (error) => {
          console.error('Error fetching location:', error);
          setLoading(false);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
      setLoading(false);
    }

    return () => {
      mapInstance.dispose();
    };
  }, []);

  return (
    <div style={{ position: 'relative', height: '400px', width: '100%' }}>
      {loading && (
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          zIndex: 1000, background: 'rgba(255, 255, 255, 0.8)', padding: '20px',
          borderRadius: '10px', textAlign: 'center'
        }}>
          <p>Loading location...</p>
        </div>
      )}
      <div
        style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1000, backgroundColor: '#3498db',
        color: 'white', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' }}
        onClick={() => map && location && map.setCenter(location)}
      >
        Go to My Location
      </div>
      <div id="map-container" style={{ height: '100%', width: '100%' }}></div>
    </div>
  );
};

export default Mapreq;
