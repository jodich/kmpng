var React = require("react");

class LayoutContainer extends React.Component {
  render() {
    return (

      <div className="row" id="nav">
        <div className="col-sm-12 navigation">
          <div className="nav-left">
          <div className="navbar-link"><a href="/products">Browse</a></div>
          <div className="navbar-link"><a href="/user">Profile</a></div>
          </div>
          <div>
          <div className="navbar-link" id="logo"> <a href="/">  <img src="/images/logo-02.svg" id="logo-img"/> </a> </div>
          </div>
          <div className="nav-right">
          <div className="navbar-link"><a href="/user/login">Log In</a></div>
          <div className="navbar-link"><a href="/user/new">Sign Up</a></div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = LayoutContainer;




// <script type="text/javascript" src="map.js"></script>

