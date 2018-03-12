import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import { GOOGLE_API_KEY } from '../../../../../constants/index';

import style from './style.scss';

class GoogleMap extends Component {
  constructor(props) {
    super(props);

    this.mapClicked = this.mapClicked.bind(this);
    this.markerClicked = this.markerClicked.bind(this);
  }

  mapClicked(mapProps, map, clickEvent) {
    const { input: { value, onChange } } = this.props;
    // latLng
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();
    onChange({ lat, lng });
  }

  markerClicked(mapProps, map, clickEvent) {
    console.log('clicked');
  }

  render() {
    const { input: { value, onChange }, intialCenter, label, meta: { touched, error }, ...custom } = this.props;
    //

    return (
      <div className={style.googleMap}>
        <Map
          google={this.props.google}
          zoom={14}
          initialCenter={intialCenter}
          onClick={this.mapClicked}
          style={{ height: '500px' }}
        >
          {value && <Marker onClick={this.markerClicked} name={'Current location'} position={value} />}
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY
})(GoogleMap);
