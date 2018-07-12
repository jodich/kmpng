var React = require('react');
var LayoutContainer = require('../layoutContainer.jsx')

class UserProducts extends React.Component {
  render() { 

    const allUserProducts = this.props.results.map( (element) => {

      let item;

      if (element.availability === true) {

        item = (
          <span>Available </span>
        )

      } else {

        item = (
          <span>Unavailable </span>
        )
      }

      return (
              <div className="col-lg-4 col-md-6 col-sm-12 all-thumbnails" key={element.id} >
                <div className="thumbnail" id={element.id}>

                  <img src={element.img} alt={element.title} className="img-thumbnail productImg" />

                  <div className="caption">

                    <div className="product-title"><h6>{element.title}</h6></div>
                    {item}

                    <form method="POST" action={"/user/product/"+element.id+"/status?_method=PUT"} className="product-form">
                      <div className="form-group product-div">
                        <input className="form-control product-input" type="submit" value="Change Availabilty"/>
                      </div>
                    </form>

                  </div>

                  <div className="more-details">
                    <a href={"/user/product/" + element.id + "/edit"}><span id="option-left" className="thumbnail-options">Edit</span></a>
                    <a href={"/user/product/" + element.id}><span id="option-right" className="thumbnail-options">More Details</span></a>
                  </div>
                  
                </div>
              </div>
      )
    }); 



    return (
      <LayoutContainer>
        <div className="container-fluid" id="alluserproducts">
          <div className="row">
            <div className="col-sm-2 content">
            </div>



            <div className="col-sm-8 content">
            
              <div>
                <center><h3>My Stuff</h3></center>
                  {allUserProducts}
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

module.exports = UserProducts;






