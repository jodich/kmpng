var React = require("react");

class Location extends React.Component {
  render() {
    return (

        <html lang="en">
        <head>
          <title>Location Test</title>
          <link rel="stylesheet" href="style.css"/>
        </head>
        <body>
          <input id="submit" type="button" value="Get Location"/>
          <div id="map"></div>

          <script type="text/javascript" src="map.js"></script>
          <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKkpNchKuhoHEyC1Sdt_2KqW2s-hIDpCM&callback=initMap">
          </script>
          
        </body>
        </html>


    );
  }
}

module.exports = Location;
