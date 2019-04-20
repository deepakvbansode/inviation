import React, { Component } from "react";
import { Map, GoogleApiWrapper, InfoWindow, Marker } from "google-maps-react";
import { isMobileDevice } from "../shared/utitlity/common";
const mapStyles = {
  width: isMobileDevice() ? "90%" : "95%",
  height: "65%"
};

export class AdressContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false, //Hides or the shows the infoWindow
      activeMarker: {}, //Shows the active marker upon click
      selectedPlace: {} //Shows the infoWindow to the selected place upon a marker
    };
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <div className="mapDiv">
        <div className="address">
          <div>Chaitanya Gagangiri Mangal Karyalay</div>
          <div>
            s.no 52, Kamal Niwas, kashinath nagar, Bhairav Nagar, Dhanori, Pune,
            Maharashtra 411015
          </div>
        </div>
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{ lat: 18.584889, lng: 73.884762 }}
        >
          <Marker
            onClick={this.onMarkerClick}
            name={`Chaitanya Gagangiri Mangal Karyalay`}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
            onClose={this.onClose}
          >
            <div>
              <h4>{this.state.selectedPlace.name}</h4>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyALQRA782JmevfK23lpHoYeweGVqZxx5-A"
})(AdressContainer);
