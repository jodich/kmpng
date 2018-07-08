var React = require('react');
var LayoutContainer = require('../layoutContainer.jsx')


class NewUser extends React.Component {
  render() {

    return (
      <LayoutContainer>
        <div className="container-fluid" id="first">
          <div className="row">
            <div className="col-sm-3 content">
            </div>


            <div className="col-sm-6 content">
              <h1>Sign Up</h1><br/>
              <form method="POST" action="/user/new">
              	<input type="text" name="name" autoComplete="name" placeholder="name"/>
              	<input type="text" name="email" autoComplete="email" placeholder="email"/>
                <input type="text" name="password" placeholder="password"/>
              	
                <input type="hidden" name="location" value="" id="location" readOnly/>

                <input id="submit" type="button" value="Get Location"/>
                <div id="map"></div>
                <input type="submit" value="Submit"/>

              </form>
            </div>

            <div className="col-sm-3 content">
            </div>
          </div>
        </div>



        <script type="text/javascript" src="/map.js"></script>
        <script async defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKkpNchKuhoHEyC1Sdt_2KqW2s-hIDpCM&callback=initMap">
        </script>



      </LayoutContainer>

    );
  }
}

module.exports = NewUser;