var React = require('react');
var LayoutContainer = require('../layoutContainer.jsx')

class OneProduct extends React.Component {
  render() { 

    return (
      <LayoutContainer>
        <div className="container" id="oneProduct">
          <div className="row">
            <div className="col-lg-2 col-md-1 col-sm-1 content">
            </div>


            <div className="col-lg-8 col-md-10 col-sm-10 content">
            
              <div className="row">
                <div className="col-md-5 product-left">
                  <img src={this.props.results.img}/>
                  <i className="fas fa-map-marker-alt product-icon"></i> {this.props.results.location}
                </div>

                <div className="col-md-7 product-right">
                  <div className="product-details">
                    <div className="product-title">{this.props.results.title}</div>
                    <a href={"/product/" + this.props.results.id + "/message"}><div className="product-btn">Request for Item</div></a>
                  </div>
                  
                  <div className="product-description">{this.props.results.description}</div>
                </div>
              </div>
              
            </div>

            <div className="col-lg-2 col-md-1 col-sm-1 content">
            </div>
          </div>
        </div>
      </LayoutContainer>
    );
  }
}

module.exports = OneProduct;






