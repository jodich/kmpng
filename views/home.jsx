var React = require("react");
var LayoutContainer = require('./layoutContainer.jsx')

class Home extends React.Component {
  render() {
    return (

      <LayoutContainer>
        <div className="container-fluid" id="first">
          <div className="row">
            <div className="col-sm-3 content">
            </div>
            <div className="col-sm-6 content">
              
              <h1>You Only Use Once</h1><br/>
              <p> Phasellus eget augue ut purus blandit ultricies. Etiam quis felis ut nisl condimentum faucibus id id augue. Phasellus quis eros nec mauris lobortis blandit. Nulla nec lacus lacinia, feugiat nisl nec, fringilla massa. Nulla dapibus velit id nisi viverra accumsan. Duis sodales in nibh at luctus. </p>
              
              <a href="/products">Let's Get Started</a>
            
            </div>
            <div className="col-sm-3 content">
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

