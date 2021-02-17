/* eslint-disable no-undef */
import React from 'react';
import { withGoogleMap, withScriptjs, GoogleMap } from 'react-google-maps';

const Map = () => {
  return <GoogleMap defaultZoom={10} defaultCenter={{ lat: 50.064651, lng: 19.944981 }} />;
};

const WrappedMap = withScriptjs(withGoogleMap(Map));

export default function AppMap() {
  return (
    <div style={{ width: '99vw', height: '80vh' }}>
      <WrappedMap
        googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCe7UttIyxKmEY4_Wo6vj-RlUHX5QXy7hY"
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}

// AIzaSyA1gViLB_DbziuTOjezPAxI8AVoBCSPr1U
