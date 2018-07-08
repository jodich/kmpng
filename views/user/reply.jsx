var React = require('react');
var LayoutContainer = require('../layoutContainer.jsx')

class UserProducts extends React.Component {
  render() { 

    return (
      <LayoutContainer>
        <div className="container-fluid" id="first">
          <div className="row">
            <div className="col-sm-3 content">
            </div>



            <div className="col-sm-6 content">
            
              <div>
                <h1>reply here</h1>
                <form method="POST" action={"/user/messages/" + this.props.results.id}>
                  <input type="text" name="message"/>
                  <input type="submit" value="submit"/>
                </form>
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






