import React, { Component } from 'react';

class GoogleMap extends Component {
  componentDidMount() {
    new google.maps.Map(this.ref.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lng
      }
    })
  }

  render() {
    return (
      <div ref="map" >

      </div>
    )
  }
}
