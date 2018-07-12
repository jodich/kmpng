var initMap = () => {

	document.getElementById('location').addEventListener('click', function mapping() {

		document.getElementById('location').removeEventListener('click', mapping);

		if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(function(position) {
				var pos = {
		            lat: position.coords.latitude,
		            lng: position.coords.longitude
		        };

		      	var geocoder = new google.maps.Geocoder;
	  			var infowindow = new google.maps.InfoWindow;

				geocodeLatLng(geocoder, infowindow, pos);
		     });

	    } else {
	    	console.log("Geolocation is not supported by this browser.");
	    }
    });
};

var geocodeLatLng = (geocoder, infowindow, pos) => {
	geocoder.geocode({'location': pos}, function(results, status) {
		console.log(status)
	    if (status === 'OK') {
	    	if (results[0]) {
	        	var map = new google.maps.Map(document.getElementById('map'), {zoom: 16, center: pos})
	        	var marker = new google.maps.Marker({position: pos, map: map});

	        	infowindow.setContent('You Are Here!');
	        	infowindow.open(map, marker);

	        	// == finds neighborhood ==
	        	// note: results[0].address_components[2].long_name is not always the neighbourhood, need to do check to get the neighbourhood's long_name
	        	for (let k = 0; k < results.length; k++ ) {

	        		let neighborhood;

	        		var addressComponents = results[k].address_components

	        		for (let i = 0; i < addressComponents.length; i++ ) {
	        	
		        		for (let j = 0; j < addressComponents[i].types.length; j++) {
		        	
		        			if (addressComponents[i].types[j] === 'neighborhood') {
		        			
		        				neighborhood = addressComponents[i].long_name;

		        				document.querySelector('#map').setAttribute("style", "display: block");
		        				document.querySelector('#location').setAttribute("type", "text");
		        				document.querySelector('#location').setAttribute("value", neighborhood);
		        				document.querySelector('#location').readOnly = true;

		        			}
		        		}
		        	}

		        	if (neighborhood) {
						break; 
					}
	        	}

	        	// console.log(results)

	    	} else {
	        	window.alert('No results found');
	    	}

	    } else {
	    	window.alert('Geocoder failed due to: ' + status);
	    }
	});
};



























// ===== NOTES =====
// == REVERSE GEOCODING
// function initMap() {
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 8,
//     center: {lat: 40.731, lng: -73.997}
//   });
//   var geocoder = new google.maps.Geocoder;
//   var infowindow = new google.maps.InfoWindow;

//   document.getElementById('submit').addEventListener('click', function() {
//     geocodeLatLng(geocoder, map, infowindow);
//   });
// }

// function geocodeLatLng(geocoder, map, infowindow) {
//   var input = document.getElementById('latlng').value;
//   var latlngStr = input.split(',', 2);
//   var latlng = {lat: parseFloat(latlngStr[0]), lng: parseFloat(latlngStr[1])};
//   geocoder.geocode({'location': latlng}, function(results, status) {
//     if (status === 'OK') {
//       if (results[0]) {
//         map.setZoom(11);
//         var marker = new google.maps.Marker({
//           position: latlng,
//           map: map
//         });
//         infowindow.setContent(results[0].formatted_address);
//         infowindow.open(map, marker);
//       } else {
//         window.alert('No results found');
//       }
//     } else {
//       window.alert('Geocoder failed due to: ' + status);
//     }
//   });
// }


// == GET LOCATION AND SET MARKER ON MAP
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(function(position) {
//   			initMap(position.coords.latitude, position.coords.longitude);
// 		});


//     } else { 
//         console.log("Geolocation is not supported by this browser.");
//     }
// }

// function initMap(a, b) {
//   // The location of Uluru
//   var uluru = {lat: a, lng: b};
//   // The map, centered at Uluru
//   var map = new google.maps.Map(
//       document.getElementById('map'), {zoom: 14, center: uluru});
//   // The marker, positioned at Uluru
//   var marker = new google.maps.Marker({position: uluru, map: map});
// }

// getLocation()

