var React = require('react');
var LayoutContainer = require('../layoutContainer.jsx')

class UserProducts extends React.Component {
  render() { 

    const allProducts = this.props.results.map( (element) => {

      return (
              <div key={element.id}>
                <div>{element.title}</div>
                <div>{element.img}</div>

                <a href={"/product/" + element.id}>See Details</a>

              </div>
      )
    }); // END OF MAP FUNCTION

    return (
      <LayoutContainer>
        <div className="container-fluid" id="first">
          <div className="row">
            <div className="col-sm-3 content">
            </div>



            <div className="col-sm-6 content">
            
              <div>
                <h1>All Products</h1>
                  {allProducts}
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

module.exports = UserProducts;






