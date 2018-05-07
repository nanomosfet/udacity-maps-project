import { createClient } from '@google/maps';
import loadGoogleMapsApi from 'load-google-maps-api';

const getSurfSpots = () => {
	return fetch('http://api.spitcast.com/api/spot/all')
		.then(res => res.json());		
}

class GoogleMaps {
	constructor(key, element) {
		this.map = null;
		this.googleMaps = null;
		this.markers = [];
		this.key = key;
		this.element = element;
		this.sv = null;

		this.setStreetView = this.setStreetView.bind(this);
		this.zoomInToLocation = this.zoomInToLocation.bind(this);

	}

	loadMaps() {
		const key = this.key;
		const element = this.element;
		return loadGoogleMapsApi({'key': key})
			.then(
				(googleMaps) => {
					this.googleMaps = googleMaps;
					this.map = new this.googleMaps.Map(element, {
						center: {lat: 37.769, lng: -122.446},
						zoom: 6,
						streetViewControl: false,
						mapTypeId: 'hybrid'
					});
					this.markers = [];
					this.sv = new googleMaps.StreetViewService();

				},
				(error) => {
					console.log(error);
				}
			)
	}

	addMarker(location, contentString) {
		const googleMaps = this.googleMaps;
		const sv = this.sv;
		const setStreetView = this.setStreetView;
		const zoomInToLocation = this.zoomInToLocation;
        let marker = new googleMaps.Marker({
        	position: location,
          	map: this.map
        });
        var infoWindow = new googleMaps.InfoWindow({
        	content: contentString
        });
        marker.addListener('click', function() {
        	infoWindow.open(this.map, marker);
        	zoomInToLocation(marker.getPosition());
        });

        this.markers.push(marker);
    }


    setStreetView(location) {
    	this.sv;
    	this.sv.getPanorama({location: location, radius: 1000}, (data, status) => {
    		const streetView = this.map.getStreetView();
	        streetView.setPosition(data.location.latLng);
	        streetView.setVisible(true);
    	})
    	
    }

    zoomInToLocation(location) {
    	this.map.setZoom(15);
    	this.map.setCenter(location);

    }

}

let surfSpotMap = new GoogleMaps('AIzaSyCIw77AT33fN4gObr96dtGWKuyYfmO5Tx8', document.getElementById('map'));
surfSpotMap.loadMaps().then(
	() => {
		addSurfSpotMarkers();

	}
)


const addSurfSpotMarkers = () => {
	getSurfSpots().then(
		(surfSpots) => {
			surfSpots.map(
				(surfSpot) => {
					const spotDescription = "<div>"
					+"<h2>Name: "+surfSpot.spot_name+"</h2>"
					+"<h3>County: "+surfSpot.county_name+"</h3>"
					+"</div>"
					surfSpotMap.addMarker({lat: surfSpot.latitude, lng: surfSpot.longitude}, spotDescription);

				}
			);
		},
		(error) => {
			console.log(error);
		}
	)
}

// module.exports = {
// 	addSurfSpotMarkers: () => {
// 		addSurfSpotMarkers();

// 	}
// }