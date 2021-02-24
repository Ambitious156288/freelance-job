import React, { useState } from 'react';
import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from 'react-google-maps';
import mapStyles from './mapStyles';

function Map() {
  const [selected, setSelected] = useState({});

  const onSelect = item => {
    setSelected(item);
  };

  const locations = [
    {
      name:
        'Punkt Agencji Pocztowej <br/> „Centrum Europejskie” Ul. Bobrzyńskiego 37 <br/> Pn. 12.00-20.00 Wt.-Pt. 11.00-19.00',
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
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 50.01761, lng: 19.89325 }}
      defaultOptions={{ styles: mapStyles }}
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
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function AppMap() {
  return (
    <div style={{ height: '85vh' }}>
      <MapWrapped
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCe7UttIyxKmEY4_Wo6vj-RlUHX5QXy7hY"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
