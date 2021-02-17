/* eslint-disable no-undef */
/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import mapStyles from 'data/mapStyles';

const MarkersMap = () => {
  const [selected, setSelected] = useState({});

  const onSelect = item => {
    setSelected(item);
  };

  const [currentPosition, setCurrentPosition] = useState({});

  const success = position => {
    const currentPosition = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };
    setCurrentPosition(currentPosition);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success);
  });

  const Styles = {
    height: '100vh',
    width: '100vw',
  };

  const defaultCenter = {
    lat: 50.01761,
    lng: 19.89325,
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

  return (
    <LoadScript googleMapsApiKey="AIzaSyCe7UttIyxKmEY4_Wo6vj-RlUHX5QXy7hY">
      <GoogleMap
        defaultOptions={{ styles: mapStyles }}
        mapContainerStyle={Styles}
        zoom={13}
        center={defaultCenter}
      >
        {locations.map(item => {
          return <Marker key={item.name} position={item.location} onClick={() => onSelect(item)} />;
        })}
        {selected.location && (
          <InfoWindow position={selected.location} clickable onCloseClick={() => setSelected({})}>
            <p>{selected.name}</p>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default MarkersMap;
