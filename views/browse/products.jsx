var React = require('react');
var LayoutContainer = require('../layoutContainer.jsx')

class AllProducts extends React.Component {
  render() { 

    const allProducts = this.props.results.map( (element) => {

      return (

              <div className="col-lg-4 col-md-6 col-sm-12 all-thumbnails" key={element.id}>
                <div className="thumbnail" id={element.id}>

                  <img src={element.img} alt={element.title} className="img-thumbnail productImg" />

                  <div className="caption">
                    <div className="product-title"><h6>{element.title}</h6></div>
                    <p><i className="fas fa-map-marker-alt"></i> {element.location}</p>
                  </div>

                  <div className="more-details">
                    <a href={"/product/" + element.id + "/message"}><span id="option-left" className="thumbnail-options">Request Item</span></a>
                    <a href={"/product/" + element.id}><span id="option-right" className="thumbnail-options">More Details</span></a>
                  </div>

                </div>
              </div>


      )
    }); // END OF MAP FUNCTION

    return (
      <LayoutContainer>
        <div className="container-fluid" id="allproducts">
          <div className="row">
            <div className="col-sm-2 content">
            </div>



            <div className="col-sm-8 content">
            
              <div>
              <center><h3>All Products</h3></center>
                  {allProducts}
              </div>

            </div>


            <div className="col-sm-2 content">
            </div>
          </div>
        </div>
      </LayoutContainer>
    );
  }
}

module.exports = AllProducts;
