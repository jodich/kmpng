var React = require('react');
var LayoutContainer = require('../layoutContainer.jsx')


class NewUser extends React.Component {
  render() {

    return (
      <LayoutContainer>
        <div className="container" id="signup">
          <div className="row">
            <div className="col-sm-2 content">
            </div>


            <div className="col-sm-8 content">
              <h1>Sign Up</h1><br/>
              <form method="POST" action="/user/new">

              <div className="col-sm-6 signupSide">
                    <div className="form-group signupInput">
                      <label htmlFor="name">Name:</label>
                    	<input type="text" name="name" className="form-control" required/>
                    </div>
                    <div className="form-group signupInput">
                      <label htmlFor="email">Email:</label>
                    	<input type="text" name="email" className="form-control" required/>
                    </div>
                    <div className="form-group signupInput">
                      <label htmlFor="phonenum">Phone Number:</label>
                      <input type="text" name="phonenum" className="form-control" required/>
                    </div>
                    
              </div>

              <div className="col-sm-6 signupSide">
                    <div className="form-group signupInput">
                      <label htmlFor="password">Password:</label>
                      <input type="password" name="password" className="form-control" required/>
                    </div>
                    <div className="form-group signupInput">
                      <label htmlFor="cmfpassword">Confirm Password:</label>
                      <input type="password" name="cmfpassword" className="form-control" required/>
                    </div>
                    <div className="form-group signupInput">	
                      <label htmlFor="location">Location:</label>
                      <input type="text" name="location" value="click here to get location" id="location" className="form-control" readOnly required/>
                      
                    </div>
              </div>

                <div id="map"></div>
                <button type="submit" className="btn signupSubmit">Submit</button>
                <a href="/user/login">Already have an account?</a>

              </form>
            </div>

            <div className="col-sm-2 content">
            </div>
          </div>
        </div>



        <script type="text/javascript" src="/map.js"></script>
        <script async defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA0eLkjdHUsR_SX4Eon_CP8OdW4Qa4aztU&callback=initMap">
        </script>



      </LayoutContainer>

    );
  }
}

module.exports = NewUser;