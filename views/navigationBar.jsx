var React = require("react");

class Navigation extends React.Component {
  render() {
    return (

      <div className="row" id="nav">
        <div className="col-sm-12 navigation">
          <div className="nav-left">
          <div className="navbar-link"><a href="/products">Browse</a></div>
          <div className="navbar-link"><a href="/user">Profile</a></div>
          </div>
          <div className="navbar-link nav-center" id="logo"> <a href="/">  <img src="/images/logo-02.svg" id="logo-img"/> </a> </div>
          <div className="nav-right">
          <div className="navbar-link"><a id="login" href="/user/login">Log In</a><div id="notification">1</div></div>
          <div className="navbar-link"><a id="signup" href="/user/new">Sign Up</a></div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Navigation;




// <script type="text/javascript" src="map.js"></script>

