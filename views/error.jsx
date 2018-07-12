var React = require('react');
var LayoutContainer = require('./layoutContainer.jsx')


class ErrorMsg extends React.Component {
  render() {

    return (
      <LayoutContainer>
        <div className="container" id="signup">
          <div className="row">
            <div className="col-sm-3 content">
            </div>


            <div className="col-sm-6 content">
              {this.props.message}<br/><br/>
              <a href="javascript: history.go(-1)">Go Back</a>
            </div>

            <div className="col-sm-3 content">
            </div>
          </div>
        </div>



        <script type="text/javascript" src="/map.js"></script>
        <script async defer
          src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCKkpNchKuhoHEyC1Sdt_2KqW2s-hIDpCM&callback=initMap">
        </script>



      </LayoutContainer>

    );
  }
}

module.exports = ErrorMsg;