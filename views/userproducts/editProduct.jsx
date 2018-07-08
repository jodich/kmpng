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
            <form method="POST" action={"/user/product/"+ this.props.results.id + "?_method=PUT"} >

              <input type="text" name="title" defaultValue={this.props.results.title}/>
              <input type="text" name="img" defaultValue={this.props.results.img}/>

              <input className="btn_input_style" name="submit" type="submit" />
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

module.exports = UserProducts;






