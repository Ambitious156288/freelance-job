/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import mapStyles from './mapStyles';

function Map() {
  const [, setSelectedPark] = useState(null);

  const [selected, setSelected] = useState({});

  const onSelect = item => {
    setSelected(item);
  };

  const locations = [
    {
      name: 'Location 1',
      location: {
        lat: 50.01761,
        lng: 19.89325,
      },
    },
    {
      name: 'Location 2',
      location: {
        lat: 50.00597,
        lng: 19.89687,
      },
    },
    {
      name: 'Location 3',
      location: {
        lat: 50.06272,
        lng: 19.96092,
      },
    },
    {
      name: 'Location 4',
      location: {
        lat: 50.001,
        lng: 19.91259,
      },
    },
    {
      name: 'Location 5',
      location: {
        lat: 41.4055,
        lng: 2.1915,
      },
    },
  ];

  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        setSelectedPark(null);
      }
    };
    window.addEventListener('keydown', listener);

    return () => {
      window.removeEventListener('keydown', listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 50.01761, lng: 19.89325 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {/* {parkData.features.map(park => (
        <Marker
          // key={park.properties.PARK_ID}
          position={{
            lat: park.geometry.coordinates[1],
            lng: park.geometry.coordinates[0],
          }}
          onClick={() => {
            setSelectedPark(park);
          }}
          icon={{
            url: `/placeholder.png`,
            scaledSize: new window.google.maps.Size(25, 25),
          }}
        />
      ))}

      {selectedPark && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedPark(null);
          }}
          position={{
            lat: selectedPark.geometry.coordinates[1],
            lng: selectedPark.geometry.coordinates[0],
          }}
        >
          <div>
            <h2>{selectedPark.properties.NAME}</h2>
            <p>{selectedPark.properties.DESCRIPTIO}</p>
          </div>
        </InfoWindow>
      )} */}

      {locations.map(item => {
        return <Marker key={item.name} position={item.location} onClick={() => onSelect(item)} />;
      })}

      {selected.location && (
        <InfoWindow position={selected.location} clickable onCloseClick={() => setSelected({})}>
          <p>{selected.name}</p>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function AppMap() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <MapWrapped
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCe7UttIyxKmEY4_Wo6vj-RlUHX5QXy7hY"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

// AIzaSyA1gViLB_DbziuTOjezPAxI8AVoBCSPr1U
