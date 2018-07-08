var React = require('react');
var LayoutContainer = require('../layoutContainer.jsx')

class UserProducts extends React.Component {
  render() { 

    const allUserProducts = this.props.results.map( (element) => {

      let item;

      if (element.availability === true) {

        item = (
          <div>AVAILABLE</div>
        )

      } else {

        item = (
          <div>UNAVAILABLE</div>
        )
      }

      return (
              <div key={element.id}>
                <div>{element.title}</div>
                <div>{element.img}</div>
                {item}
                <form method="POST" action={"/user/product/"+element.id+"/status?_method=PUT"}>
                  <input type="submit" value="Change Availabilty"/>
                </form>
                <a href={"/user/product/" + element.id}>See Details</a><br/><br/>
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
                <h1>USER'S PRODUCTS HERE</h1>
                  {allUserProducts}
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






