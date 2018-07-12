var React = require("react");
var LayoutContainer = require('../layoutContainer.jsx')
// var Navigation = require('./navigationBar.jsx')


class Login extends React.Component {
  render() {
    return (


      <LayoutContainer>
        <div className="container" id="login">
          <div className="row">
            <div className="col-sm-4 content">
            </div>


            <div className="col-sm-4 content">
            <h1>Log In</h1><br/>
              <form method="POST" action="/user/login">

              <div className="form-group loginInput">
                <label htmlFor="email">Email address:</label>
                  <input name="email" type="text" placeholder="email" className="form-control"/>
              </div>

              <div className="form-group loginInput">
                <label htmlFor="password">Password:</label>
                <input name="password" type="password" placeholder="password" className="form-control"/>
              </div>

                <button type="submit" className="btn loginSubmit">Submit</button>
                <a href="/user/new">New User?</a>

              </form>
            </div>

            <div className="col-sm-4 content">
            </div>
          </div>
        </div>

      </LayoutContainer>


    );
  }
}

module.exports = Login;