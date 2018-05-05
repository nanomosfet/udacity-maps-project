import { createClient } from '@google/maps';

const getSurfSpots = () => {
	return fetch('http://api.spitcast.com/api/spot/all')
		.then(res => res.json());		
}

const addSurfSpotMarkers = () => {
	getSurfSpots().then(
		(surfSpots) => {
			surfSpots.map(
				(surfSpot) => {
					const spotDescription = "<div>"
					+"<h2>Name: "+surfSpot.spot_name+"</h2>"
					+"<h3>County: "+surfSpot.county_name+"</h3>"
					+"</div>"
					addMarker({lat: surfSpot.latitude, lng: surfSpot.longitude}, spotDescription);

				}
			);
		},
		(error) => {
			console.log(error);
		}
	)
}


module.exports = {
	addSurfSpotMarkers: () => {
		addSurfSpotMarkers();

	}
}