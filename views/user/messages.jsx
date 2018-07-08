var React = require('react');
var LayoutContainer = require('../layoutContainer.jsx')

class UserProducts extends React.Component {
  render() { 

    const allMessages = this.props.results.map( (element) => {

      return (
              <div key={element.id}>
                {element.name} ({element.email}) sent a message:<br/>
                {element.message}<br/>
                for item name: {element.title}<br/>
                message id is : {element.id}
              <a href={"/user/messages/" + element.id}>Reply?</a>
                  <br/><br/><br/><br/><br/>
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
                <h1>All Messages</h1>
                  {allMessages}
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






