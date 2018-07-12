var React = require("react");
var LayoutContainer = require('./layoutContainer.jsx')

class Home extends React.Component {
  render() {
    return (

      <LayoutContainer>
        <div className="container" id="intro">
          


         

          <div className="row">
            <div className="col-sm-12 extra">
              <a href="/user/product/new">CONTRIBUTE NOW</a>
            </div>
          </div>
        
          
          <div className="row">
            <div className="col-lg-5 content">
              
              <h1>You Only Use Once</h1>
              <p>Hi, there! Kmpng is a community-based platform for your neighborhood that promotes sharing and giving of items with people residing near you. Our name references the Malay word Kampong, in reminiscence of the affable community culture that once populated Singapore. Likewise here at Kmpng, we strives to achieve a kinder and more inviting community. Contribute now and be a part of our family!</p>              
              <a href="/products">Let's Get Started</a>
            
            </div>
            <div className="col-lg-7 content">
            </div>
          </div>



        </div>
      </LayoutContainer>




    );
  }
}

module.exports = Home;




// <script type="text/javascript" src="/script.js"></script>

// <script type="text/javascript" src="map.js"></script>

