var React = require('react');
var LayoutContainer = require('../layoutContainer.jsx')

class Request extends React.Component {
  render() { 

    return (
      <LayoutContainer>
        <div className="container" id="request">
          <div className="row">
            <div className="col-sm-3 content">
            </div>



            <div className="col-sm-6 content">
            
              <h3>Requesting Item</h3>
              <div className="message-details">Requesting For: {this.props.results.title}</div>
              <div className="message-img"><img src={this.props.results.img}/></div>
              <div className="message-message">{this.props.results.description}</div>


              <form method="POST" action={"/product/" + this.props.results.id + "/message"}>
                <div className="form-group reply-block">
                    <label htmlFor="description">Request Message:</label>
                    <textarea className="form-control" rows="5" name="message" required></textarea>
                </div>

                <button type="submit" className="btn submit-btn">Submit</button>
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

module.exports = Request;






