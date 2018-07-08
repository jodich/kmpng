var React = require('react');
var LayoutContainer = require('../layoutContainer.jsx')

class NewItem extends React.Component {
  render() {

    const allService = this.props.results.map( (element) => {
      return (
        <option value={element.id}>{element.type}</option>
      )
    })

    return (
     <LayoutContainer>
        <div className="container-fluid" id="first">
          <div className="row">
            <div className="col-sm-3 content">
            </div>



            <div className="col-sm-6 content">
            <h1>New Item</h1>
              <form method="POST" action="/user/product/new">
                <input type="text" name="title" placeholder="title"/>
              	<input type="text" name="img" placeholder="image link"/>
                <select name="service"> 
                  <option value="" selected>Type of Service?</option>
                  {allService}
                </select>
                <input type="submit" value="Submit"/>
              </form>
            </div>



            <div className="col-sm-3 content">
            </div>
          </div>
        </div>
      </LayoutContainer>
    );
  }
}

module.exports = NewItem;