var React = require('react');
var LayoutContainer = require('../layoutContainer.jsx')

class UserProducts extends React.Component {
  render() { 

    let status;

    if (this.props.results.availability) {
      status = (
          <div>AVAILABLE</div>
        )
    } else {
      status = (
        <div>UNAVAILABLE</div>
      )
    }

    return (
      <LayoutContainer>
        <div className="container-fluid" id="first">
          <div className="row">
            <div className="col-sm-3 content">
            </div>



            <div className="col-sm-6 content">
            
              <div>
                <h1>One Product</h1>
                {this.props.results.id}
                {this.props.results.title}
                {this.props.results.img}
                {this.props.results.location}
                {status}
              </div>
              <a href={"/user/product/" + this.props.results.id + "/edit"}>Edit</a>

            </div>


            <div className="col-sm-3 content">
            </div>
          </div>
        </div>
      </LayoutContainer>
    );
  }
}

module.exports = UserProducts;






