var React = require("react");
var LayoutContainer = require('../layoutContainer.jsx')
// var Navigation = require('./navigationBar.jsx')


class Login extends React.Component {
  render() {
    return (


      <LayoutContainer>
        <div className="container-fluid" id="first">
          <div className="row">
            <div className="col-sm-3 content">
            <h1>Log In</h1><br/>
            </div>


            <div className="col-sm-6 content">
              <form method="POST" action="/user/login">
                <input name="email" type="text" placeholder="email"/>
                <input name="password" type="text" placeholder="password"/>
                <input type="submit" value="Submit" />
              </form>
            </div>

            <div className="col-sm-3 content">
            </div>
          </div>
        </div>

      </LayoutContainer>


    );
  }
}

module.exports = Login;