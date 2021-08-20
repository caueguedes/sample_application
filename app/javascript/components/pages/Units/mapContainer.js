import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

import config from '../../config/config.json';

const defaultCenter = { lat: 37.95,   lng: 95.66 };

const MapContainer = props => {
  const { children , center = defaultCenter } = props;
  return (
    <Map
      containerStyle={{
        maxWidth: '100%',
        height: '100%',
      }}
      google={props.google}
      initialCenter={center}
      zoom={7}
    >
      {children}
    </Map>
  );
}


export default GoogleApiWrapper({
  apiKey: config.GOOGLE_API_KEY
})(MapContainer);