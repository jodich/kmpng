var React = require('react');
var LayoutContainer = require('../layoutContainer.jsx')

class UserProfile extends React.Component {
  render() { 

    return (
      <LayoutContainer>
        <div className="container-fluid" id="first">
          <div className="row">
            <div className="col-sm-3 content">
            </div>



            <div className="col-sm-6 content">
              <h1>profile here</h1>
              <a href="/user/product">See All My Stuff</a><br/>
              <a href="/user/product/new">Add New Stuff</a><br/>
              <a href="/user/logout">Logout</a><br/>
              <a href="/user/messages">Messages</a>
            </div>



            <div className="col-sm-3 content">
            </div>
          </div>
        </div>
      </LayoutContainer>

    );
  }
}

module.exports = UserProfile;