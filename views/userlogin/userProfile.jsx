var React = require('react');
var LayoutContainer = require('../layoutContainer.jsx')

class UserProfile extends React.Component {
  render() { 

    return (
      <LayoutContainer>
        <div className="container-fluid" id="profile">
          <div className="row">
            <div className="col-sm-3 content">
            </div>

            <div className="col-sm-2 content">
              
              <a href="/user/product">
                <div className="sidebar-link">My Items</div>
              </a>

              <a href="/user/product/new">
                <div className="sidebar-link">Add New Items</div>
              </a>

              <a href="/user/messages">
                <div className="sidebar-link">Messages</div>
              </a>
              
              <a href="/user/logout">
                <div className="sidebar-link">Logout</div>
              </a>

            </div>



            <div className="col-sm-4 content">
              <div className="profile-name">
                <h2>{this.props.userDetails.name}</h2>
              </div>
              <div className="profile-details">
                {this.props.userDetails.email}<br/>
              </div>
              <div className="profile-products">
                You have listed {this.props.userProductsCount.count} items in {this.props.userDetails.location}.
              </div>
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