document.body.style.background = "linear-gradient(rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.85) ), url('/images/hdb-flats.jpg')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";





// window.onload = function () {

// 	var ajaxUrl = "/boobs";

// 	var responseHandler = function() {
// 	  console.log(this)
// 	  // console.log("response text", this.responseText);
// 	  var response = JSON.parse( this.responseText );
// 	  console.log( response );

// 	  var h1 = document.createElement('h1');
// 	  var h2 = document.createElement('h2');
// 	  var h3 = document.createElement('h3');

	  
// 	  h1.textContent = response.sammy;
// 	  h2.textContent = response.jodi;
// 	  h3.textContent = response.jem;
// 	  document.body.appendChild(h1);
// 	  document.body.appendChild(h2);
// 	  document.body.appendChild(h3);

// 	};

// 	// make a new request
// 	var request = new XMLHttpRequest();

// 	// listen for the request response
// 	request.addEventListener("load", responseHandler);

// 	// ready the system by calling open, and specifying the url
// 	request.open("GET", ajaxUrl);

// 	// send the request
// 	request.send();

// }